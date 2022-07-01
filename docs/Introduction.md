---
slug: /
title: Introduction to Network Variety
sidebar_position: 0
author: Sam Bacha
author_url: https://github.com/sambacha
---

# Network Variety in Ethereum2 

> "The lethal variety attenuator is sheer ignorance."
>  - Stafford Beer

Variety grows exponentially with the size of organisations and major
systems, creating vast amounts of complexity with regards to its
interactions. Some real-world systems have levels of variety which are
effectively infinite. However, our perceptions attenuate (“filter-out”)
any variety which is irrelevant to what we are trying to observe.

Operations - elements that do things. (Infrastructure & Software)
Management - elements that control operations. (Protocol) & Governance)
Environment - the surroundings within which the other elements function.
(Price and Ethereum Main Network)

The VBSM is an implementation of the Viable Systems Model for
decentralized blockchain networks with an emphasis on autonomy,
viability, and stability

In reaching a viable state, defined terms and sub-systems must be
formalized and specified. This section of the documentation is an effort in
trying to formalize such goals, objectives and key results that can be
achieved when a systems-based approach is combined with formal design
and mechanisms to achieve said goals.

## Glossary

\[A\] Actuality: “What we are managing to do now, with existing
resources, under existing constraints.”

\[C\] Capability: “This is what we could be doing (still right now) with
existing resources, under existing constraints, if we really worked at
it.”

\[Po\] Potentiality: “This is what we ought to be doing by developing
our resources and removing constraints, although still operating within
the bounds of what is already known to be feasible.”

\[La\] Latency

\[Pr\] Productivity

\[Pf\] Performance

Where:

\[A\] is the % value of blocks used, for example with 943,121 that is
9%: 12 \[C\] is an estimated value, where determined by Management: 50
\[P\] is the amount of transactions determined by gasBlockLimit that is
possible on the network: 135 \[Pr\] is the value of C/A, giving us
Productivity

# Equations

Po/C=La C/A=Pr La \* Pr = Pf

# Sub Systems

## System 1

Concerned with all of the basic, primary operations of the organization,
which justify the existence of the system as a whole, and the management
of these operations.

## System 2

Deals with the inevitable problems which emerge as several autonomous, 
self-organizing operational parts interact. There will be
conflicts of interest that must be resolved. System 2 is there to
harmonize the interactions, to keep the peace, to deal with the
problems. Without System 2, the system would shake itself to pieces.

## System 3

Concerned with synergy. It looks at the entire interacting cluster of
operational units from its meta-systemic perspective and considers ways
to maximize its effectiveness through collaboration. System 3 ensures
the whole system works better than the operational parts working in
isolation. It represents all of the structures that are put in place by
senior leadership to dictate rules, rights, resources and
responsibilities within System 1, and also to provide an interface for
interaction with Systems 4 and 5. This system represents the broad view
of all the operations activities within the first system. In simple terms,
it is the everyday control of the organization which is exerted by
senior leaders. There is little variety in the activities which
occur within the third system.

## System 4

Ensures the whole system can adapt to a rapidly changing and sometimes
hostile environment. It scans the outside world in which it operates,
looks for threats and opportunities, undertakes research and
simulations, and proposes plans to guide the system through the various
possible pathways it could follow. Without System 4, the system would
be unable to cope with the complexity of the external environment in
which it operates. In essence, it is responsible for looking externally
from the organization or overall system, at the environment in which it
operates, and establishing which factors may impact operations, and how
it needs to adapt to remain viable and sustainable. There are
also channels leading each way between System 4 and System 3, as any
necessary changes must be implemented through flow down towards the
Control systems, but also System 3 must provide information regarding
the organization in its current form. This allows System 4 to formulate
a clear model containing both the organization and the environment,
which forms the basis of adaptive strategies.

## System 5

Provides closure to the whole system. It defines and develops the vision
and values of the system through policies. System 5 creates the
identity, the ethos, and the ground rules under which everyone operates. It
aligns the tasks of everyone in the organization.
 This is the system that holds the overall control, though not necessarily directly, as it
forms the culture and values of the organization, and thus dictates
policy decisions that control all of the below systems. This system
should always be maintained as separate from the control exerted by
System 3.

System 5 monitors the interaction between S3 and S4 to ensure all plans
are within policy guidelines. If not, it steps in and applies its
ultimate authority.

Systems 1, 2 and 3 between them make up the internal environment of the
viable system — the Inside and Now. The autonomous parts function in a
harmonizing internal environment which maximizes its effectiveness
through creating mutually supportive relationships.

# Sub-system Overview

System 1: Inside & Now (Operation) \[Autonomous, Sub System\]
Implementation (Network Utility, Topology(x)) System 2: Inside & Now
(Management) \[Meta System\] Coordination (Network Consensus,
Topology(y)) System 3: Inside & Now (Management) \[Meta System\] Control
(Primary DAO, Token Price, Defined Protocols and Regimes) System 4:
Tokenization (Management) \[Meta System\] Intelligence (Tokenization,
Certificate DAO) System 5: Rulebook (Management) \[Meta System\] Policy,
Organization Ethos, (Defined Policies and Arbitration, defined bounds)

**Defined modules for Sub System**

\[S1\] Demand for Transactions, Exchange Price, Network Utility/Demand +
\[S2\] Beacon Consensus
 + \[S3\]
Rulebook, Protocol Interactions (Defined Constraints on Human & Smart
Contract Interaction), Convergence + \[S4\] DAO, Tokenized Governance +
\[S5\] Rotating Governance Board, Weighted Governance, Rotation Periods
of Validators

**Terms of Definitions**


**Terramform**: \[x\] and \[y\] values **Validators Eligible**: Staked
to become Validators (\#totalnumber) **Validators Actual**: Accepted
Stake for Validators (\#number) **Node Network Client Specification
Consensus**: Clique, IBFT2 **PEM**: Parametric Exchange Mechanism (fixed-rate exchange for EDI transactions)

 **Rulebook**: Governance Articles
100-900 Board of Supervisory

\[S1\] = Terraform(y), Validators(actual) \[S2\] = client, consensus
p.o.a, Terraform(x) 
\[S3\] = pDAO, TokenPrice,
 \[S4\] = Tokenization, cDAO, Validators(eligible)

Signals between Systems 1 and 3 should be continuously monitored, and if
an emergency condition is detected, an emergency signal will be sent
directly to System 5.

## Terraform

Terraform language uses HCL (Hashicorp Configuration Language).
Terraform code is built around 2 key syntax constructs:

**Arguments.* 
    Arguments assign a value to a particular name:

**Blocks.**

A block is a container for other content

### Implementation

Think of this as the Infrastructure as Code values

`availability-zone` - The Availability Zone for the subnet.
`availability-zone-id` - The ID of the Availability Zone for the subnet.
`available-ip-address-count` - The number of IPv4 addresses in the
subnet that are available. `cidr-block` - The IPv4 CIDR block of the
subnet. `owner-id` - The ID of the AWS account that owns the subnet.
`state` - The state of the subnet (pending | available). `subnet-arn` -
The Amazon Resource Name (ARN) of the subnet. subnet-id - The ID of the
subnet.

``` json
{
    "bandwidth": "string",
    "connectionId": "string",
    "connectionName": "string",
    "connectionState": "string",
    "hasLogicalRedundancy": "string",
    "jumboFrameCapable": boolean,
    "lagId": "string",
    "loaIssueTime": number,
    "location": "string",
    "partnerName": "string",
    "providerName": "string",
    "region": "string",
}
```

## Terraform


> MODULES

## Network Topology

Available Regions

    "location": "string",
    "partnerName": "string",
    "region": "string",

**Regions**

Geographic locations

**Network Operators (nodes)**

> NETSOC

**Validators**

Network Operators who propose, validate and approve submitted transactions and blocks.

**Eligble Validators**

The total amount of validators eligible 

**Actual Validators**

The number of on-chain validators