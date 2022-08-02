---
title: Site Reliability Engineering
description: How Google runs production systems.
---

# Site Reliability Engineering

- [Google SRE book review](https://danluu.com/google-sre-book/)

## 1. Introduction

### The Sysadmin Approach to Service Management

- Assemble existing components and deploy them to produce a service
- Respond to events and updates as they occur
- Pros:
  - Easy to implement because it’s standard
  - Large talent pool to hire from
  - Lots of available software
- Cons
  - Manual intervention for change management and event handling
  - Size of the team need to scale with the load on system / service
  - Conflict between OPS \(the service has to be stable\) vs DEV \(the service needs new features and updates\)

### Goole's Approach to Service Management: Site Reliability Engineering

- Operations is done the "software engineer" way, with automation instead of manual labor
- Candidates should be able to pass the dev recruitment test \(and may have some additional skills that are rare among devs like L1 - L3 networking or UNIX system internals\).
- Results: SREs will be bored to do tasks by hand and will have the skillset to automate them
- To avoid manual labor trap: **50% cap on the amount of "ops" work** for SREs \(upper bound, actual amount of ops work is expected to be much lower\)
- Pros
  - Cheaper to scale
  - Circumvents devs/ops split
- Cons
  - Hard to hire for
  - Require management support

### Tenets of SRE

An SRE team is responsible for the **availability, latency, performance, efficiency, change management, monitoring, emergency response, and capacity planning** of their services.

**Ensuring a durable focus on engineering:**

- 50% ops cap means that extra ops work is redirected to product teams on overflow
- Provides feedback mechanism to product teams as well as keeps load down
- Target max 2 events per 8-12 hour on-call shift
- Postmortems for all serious incidents, even if they didn’t trigger a page
- Blameless postmortems

**Maximum change velocity without violating a service's SLO:**

- Error budget: 100% is the wrong reliability target for basically everything
- Going from 5 9s to 100% reliability isn’t noticeable to most users and requires tremendous effort
- Set a goal that acknowledges the trade-off and leaves an error budget
- Error budget can be spent on anything: launching features, etc.
- Goal of SRE team isn’t "zero outages", SRE and product devs are incentive aligned to spend the error budget to get maximum feature velocity

**Monitoring:**

- Monitoring should never require a human to interpret any part of the alerting domain
- Three valid kinds of monitoring output
  - **Alerts**: human needs to take action immediately
  - **Tickets**: human needs to take action eventually
  - **Logging**: no action needed \(Note that for example graphs are a type of log\)

**Emergency Response:**

- Reliability is a function of **MTTF** \(Mean Time To Failure\) and **MTTR** \(Mean Time To Recovery\)
- For evaluating responses, we care about MTTR
- Humans add latency, systems that don’t require humans to respond will have higher availability due to lower MTTR
- Having a "playbook" \(documentation of best practices\) produces 3x lower MTTR
- Having hero generalists who can respond to everything works, but having playbooks works better

**Change management:**

- 70% of outages are due to changes in a live system. Mitigation: implement progressive rollouts, monitoring and rollback
- Remove humans from the loop, avoid standard human problems on repetitive tasks

## 2. The Production Environment at Google, from the Viewpoint of an SRE

### Hardware

- **Machine**: A piece of hardware (or perhaps a VM).
- **Server**: A piece of software that implements a service.

The topology of a Google datacenter:

- Tens of machine are placed in a **rack**.
- Racks stand in a **row**.
- One or more rows form a **cluster**.
- Usually a **datacenter** building house multiple clusters.
- Multiple datacenter buildings that are located close together form a **campus**.

### System Software That "Organizes" the Hardware

- **Managing Machines** with [Borg](https://research.google/pubs/pub43438/), a distributed cluster operating system.
- **Storage** with many layers: the lowest layer **D** is a fileserver running on all machines, a layer on top of D **Colossus** creates a cluster-wide fileystem and several databases like services built on top of Colossus: [Bigtable](https://research.google/pubs/pub27898/) (NoSQL), [Spanner](https://research.google/pubs/pub39966/) (SQL), **Blobstore**
- **Networking**: with [OpenFlow](https://en.wikipedia.org/wiki/OpenFlow), Bandwidth Enforcer (BwE) and Global Software Load Balancer (GSLB)

### Other System Software

- **Lock Service** with [Chubby](https://research.google/pubs/pub27897/)
- **Monitoring and Alerting** with Borgmon
- **Sotfware Infrastructure** with a http server on every servers for diagnostics and statistics, RPC calls with **protocol buffers** (Stubby or gRPC)

### Our Development Environment

Appart froma a few groups that have their own open source repositories (Android, Chrome), engineers work from a single shared repository (a [monorepo](https://research.google/pubs/pub45424/)).

## 3. Embracing risk

Extreme reliability (100%) comes at a cost: maximizing stability limits how fast new features can be developed and how quickly products can be delivered to users, and dramatically increases their costs.
Also, users typically don't notice the difference between high reliability vs extreme reliability: if a user is on a smartphone with 99% reliability, they can’t tell the difference between 99.99% and 99.999% reliability.

### Managing Risk

Reliability isn’t linear in cost. It can easily cost 100x more to get one additional increment of reliability. Goal: make systems reliable enough, but not too reliable!
The costliness has two dimensions:

- Cost associated with redundant machine/compute resources.
- Cost of building out features for reliability as opposed to "normal" features.

### Measuring Service Risk

Standard practice: identify metrics to represent the property of a system to optimize. For most services: **unplanned downtime** (the service availability, measured un number of "nines").

- **Time based availability = uptime / (uptime + downtime)** (problematic for a globally distributed service. What does uptime really mean?).
- **Aggregate availability = successful request / total requests** (not all requests are equal, but aggregate availability is an ok first order approximation).

### Risk Tolerance of Services

- Work with Product Owner to translate business objectives into explicit objectives.
- Identify risk tolerance of consumer and infrastructure services (target level of availability, types of failures, costs).
- Ex: consumer serving data from Bigtable need low latency and high reliability when teams using bigtable as a backing store for offline analysis need more throughput than reliability.

### Motivation for Error Budgets

An error budget provides a common incentive that allows both product development and SRE to focus on finding the right balance between innovation and reliability.

## 4. Service Level Objectives

### Service Level Terminology

- **Indicators**: (SLI) a carefully defined quantitative measure of some aspect of the level of service that is provided (request latency, error rate, system throughput, availability).
- **Objectives**: (SLO) a target value or range of values for a service level that is measured by an SLI (SLI <= SLO or lower SLO <= SLI <= upper SLO).
- **Agreements**: (SLA) an explicit or implicit contract with your users that includes consequences of meeting (or missing) the SLOs they contain.

### Indicators in Practice

**What do you and your users care about ?**

- Too many indicators and its hard to pay attention / too few indicators and you might ignore important behavior.
- Different classes of services should have different indicators.
- User-facing: availability, latency, throughput.
- Storage: latency, availability, durability.
- Big data: throughput, end-to-end latency.
- All systems care about correctness.

Metric aggregation:

- Use **distributions over averages** in most cases (ex: to avoid hiding tail latencies).
- User studies show that people usually prefer **slower average with better tail latency**.
- Standardize on common definitions: aggregation intervals, regions, measurements frequency, how data is acquired etc.

### Objectives in Practice

**Defining Objectives:**

- Specify multiple SLO targets:
  - 90% of _GET RPC_ calls will complete in < 1ms
  - 99% of _GET RPC_ calls will complete in < 10ms
  - 99.9% of _GET RPC_ calls will complete in < 100ms
- Define separate objective for different workload:
  - 95% of clients A (A care avout bulk processing) _SET RPC_ calls will complete in < 1s
  - 99% of clients B (B cares about latency) _SET RPC_ calls with payload < 1kb will complete in < 10ms

**Choosing targets:**

- Don’t pick target based on current performance (current performance may require heroic effort).
- Keep it simple
- Avoid absolutes (it's unreasonable to talk about "infinite" scale or "always" available)
- Have a few SLOs as possible (just enough to provide good coverage)
- Perfection can wait (can always redefine SLOs over time)
- SLOs set expectations (keep a safety margin and don't overachieve)

### Agreements in Practice

Crafting an SLA requires business and legal teams to pick appropriate consequences and penalties for a breach. The SRE role is to help them understand the likelihood and difficulty of meeting the SLOs containedd in the SLA. Be conservative in what your advertise to users.

## 5. Eliminating Toil

### Toil Defined

- **Manual**, including manually running a script that automates some task.
- **Repetitive**: performing the same task more than twice.
- **Automatable**, except for tasks that need human judgment.
- **Tactical**: interrupt-driven and reactive like handling a pager alert.
- **No enduring value**: is the service in the same state once a task is finished ?
- **O(n) with service growth**: is the task scaling linearly with service size, traffic volume, etc. ?

### What Qualifies as Engineering

- **Software Engineering**: writing or modifying code, in addition to any associated design and documentation work.
- **System Engineeing**: configuring production systems, modifying configurations or documentating systems.
- **Toil**: work directly tied to running a service that is repetitive, manual, etc.
- **Overhead**: administrative work not tied directly to a running service (HR, team meeting etc.).

### Is Toil Always Bad ?

Predictable and repetitive tasks can be quite calming (low risk, low stress, quick win..), but too much toil is bad:

- **Carreer Stagnation**, if you spend yoo little time on projects.
- **Low morale**: too much toil leads to burnout, boredom and discontent.
- **Creates confusion**: confuse people about the SRE engineering nature.
- **Slows progress** and reduce team velocity.
- **Sets precedent**: the more toil you accept to do, the more you will be given by other teams.
- **Promotes attrition**: team members will start looking for a more rewarding job.
- **Causes breach of faith**: new hires will feel cheated, bad for morale.

## 6. Monitoring Distributed Systems

### Definitions

- **Monitoring**: collecting, processing, aggregating and displaying real-time quantitative data about a system.
- **White-box monitoring**: monitoring based on metrics exposed by the internals of a system.
- **Black-box monitoring**: monitoring externally visible behavior as a user would see it.
- **Dashboard**: an application that provides a summary view of a service's core metrics.
- **Alert**: a notification intended to be read by a human, classified as `tickets`, `email alerts`, `pages`.
- **Root cause**: a defect in a software or system that, if repaired, instills confidence that it won't happen again in the same way.
- **Node and machine**: used interchangeably to indicate a single instance of a running kernek in either a physical server, virtual machine or container.
- **Push**: any change to a service's running software or it's configuration.

### Why Monitor ?

- **Analyzing long-term trends**
- **Comparing over time or experiment groups**
- **Alerting**
- **Building dashboards**
- **Conducting ad hoc retrospective analysis**

### The Four Golden Signals

- **Latency**: The time is takes to service a requests (or an error).
- **Traffic**: How much demand is being placed on the system.
- **Errors**: The rate of requests that fail (explicitly or implicitly).
- **Saturation**: How "full" the service is.

### Recommandations

- **Symptoms vs Causes**: the monitoring system should address two questions: `What's broken?` (symptom) and `Why?` (cause).
- **Black-Box vs White-Box**: use black-box for paging (alert on symptoms) and white-box for debugging (finding the cause).
- **Worry about your tail**: system based uppon the mean of some quantity hides distributions and outliers, use histograms/quantiles instead.
- **Choose an appropriate resolution for measurements**: different aspects of a system should be measured with different level of granularity.
- **As simple as possible, not simpler** (and as a standalone system to avoid complexity).

## 7. The Evolution of Automation at Google

### The Value of Automation

- **Consistency**, the primary value of Automation.
- **A platform** that can be extended and centralizes mistakes.
- **Faster Repairs** that reduces Mean Time To Repair (MTTR)
- **Faster Actions**
- **Time savings**

### A Hierarchy of Automation Classes

1. **No automation**: Database master is failed over manually between locations.
2. **Externally maintained system-specific automation**: An SRE has a failover script in his or her home directory.
3. **Externally maintained generic automation**: The SRE adds database support to a "generic failover" script that everyone uses.
4. **Internally maintained automation**: The database ships with its own failover script.
5. **Systems that don't need automation**: The database notice problems, and automatically fails over without human intervention.

## 8. Release Engineering

### The Role of a Release Engineer

- Work with SWEs and SREs to define how software is released
- Area of expertise: source code management, compilers, build configuration languages, automated build tools, package managers, installers.

### Philosophy

- **Self-Service Model**: At scale, teams must be self-sufficient, build tools and best practices so release become automatic.
- **High Velocity**: Vary between teams, could be "push on green" and deploy every build, could be hourly builds and deploys, etc.
- **Hermetic Builds**: Build tools must allow consistency and repeatability, same version = same result.
- **Enforcement of Policies and Procedures**: create gated procedures with human intervention for code change, release creation, release deployment etc.

### Continous Build and Deployment

- **Building**
- **Branching**
- **Testing**
- **Packaging**
- **Deployment**

## 9. Simplicity

- **Stability vs Agility**: Reliable systems can increase agility and reliable rollouts make it easier to link changes to bugs.
- **The virtue of boring**: See [No Silver Bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet) about Essential vs Acidental complexity. SREs should push back when accidental complexity is introduced.
- **Code is a liability**: remove dead code or other bloat
- **Minimal APIs**: Smaller APIs are easier to test and more reliable.
- **Modularity**: API versioning and as with code, avoid misc/util binaries/systems.
- **Releases**: Small releases are easier to measure

## 10. Practical Alerting from Time-Series Data

### Borgmon

- Similar-ish to Prometheus.
- **Common data exposition format enables mass data collection**.
- Data is used for both dashboards and alerts.
- Formalized a legacy data format, "varz", which allowed metrics to be viewed via HTTP (`http://foo:80/varz`).
- Adding a metric only requires a single declaration in code: low user-cost to add new metric.
- Borgmon fetches `/varz` from each target periodically.
- `/varz` also includes synthetic data like health check, if name was resolved, etc.

### Time Series Arena

- Data is stored in-memory and regularly checkpointed to disk.
- The data points have the form `(timestamp, value)` and are stored in chronological lists called **time-series**.
- Each time-series is named by a unique set of **labels**, of the form `name=value`.
- Fixed sized block of memory with a GC that expires oldest entries when the arena is full.
- Conceptually a 2D array with time on one axis and items on the other axis.
- 24 bytes for a data point -> 1M unique time series for 12 hours at 1 minute intervals = 17 GB

### Borgmon rules

- Simple **algebraic expressions** that compute time-series from other time-series.
- Rules can query the history of a single time-series (the time axis).
- Rules can query differemt subset of labels from many time-series at once (the space axis).
- Rules can apply many **mathematical operations**.
- Rules are evaluated in parallel on a threadpool where possible.

### Counters vs. gauges

- **Counters** are non-decreasing.
- **Gauges** can take any value.
- Counters preferred to gauges because gauges can lose information depending on sampling interval.

### Altering

- Borgmon rules can trigger alerts.
- Have a minimum duration to prevent **flapping**.
- Minimum duration is usually set to two multiple duration cycles so that missed collections don’t trigger an alert.
- An AlertManager is responsible for routing notifications to the correct destination.

Alertmanager config:

- **Inhibit** certain alerts when others are active
- **Deduplicate** alerts from multiple borgmon
- **Fan-in or fan-out** alerts based on their labelsets.

### Prober

- Black-box monitoring that monitors what the user sees.
- Can be queried with varz or directly send alerts to Altertmanager.

### Configuration

- Separation between definition of rules and targets being monitored

## 11. Being on-call

Typical response time:

- 5 minutes for user-facing or other time-critical tasks.
- 30 minutes for less time-sensitive stuff.

Response times linked to SLOs:

- 99.99% for a quarter is 13 minutes of downtime; clearly can’t have response time above 13 minutes
- Services with looser SLOs can have response times in the 10s of minutes

Primary vs secondary on-call rotation:

- Work distribution varies by team.
- In some teams, the secondary rotation will be the backup of the primary rotation.
- In other teams, the secondary rotation will handle non-urgent / non-paging events while the primary rotation handles pages.

Balanced on-call:

- **Quantity**: percent of time on-call (50% of SRE time goes into engineering. Of the remainder, no more than 25% should be spent on-call).
- **Quality**: number of incidents that occur while on call. On average, dealing with an incident (incl root-cause analysis, remediation, writing postmortem, fixing bug, etc.) takes 6 hours. More than 2 incidents in a 12-hour on-call shift would be bad.

## 12. Effective Troubleshooting

### Theory

- Effective troubleshooting depends on 2 factors: a **solid knowledge of the system** and an understanding on **how to troubleshoot generatically**.
- Process: Problem report -> Triage -> Examine -> Diagnose -> Test / Treat (loop back to `Examine` ) -> Cure

**Common pitfalls**:

- Looking at symptoms that aren't relevant or misunderstanding the meaning of system metrics
- Misunderstanding how to change the system to test hypothesis
- Coming up with improbable theories or latching on causes of past problems

### Practice

- **Problem report**: should tell the **expected** behavior, the **actual** behavior and how to **reproduce** the behavior.
- **Triage**: the response to the report should be appropriate for the problem's impact. Do not try to find a root cause as quickly as possible but **try to make the system work as well as it can**.
- **Examine**: what each component in the system is doing. Use metrics and logs, instrument a client etc.
- **Diagnose**: **divide and conquer** with system's components, ask "what", "where" and "why" the system is doing, check what touched it last (systems have some king of inertia).
- **Test** and **Treat**: Use experimental method to rule out hypothesis and find the root cause, consider the obvious first, take notes, be **careful with side effects** when testing (ex: verbose logging may increase latency).
- **Cure**: and prove that a given factor caused a problem (hard in practice, reproducing in production may notbe an option), write a postmortem.
