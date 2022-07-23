---
title: Introduction
sidebar_position: 1
---

### Preface

The goal of scaling leads to the only consideration of what is successful being defined by if they have millions (or, indirectly, billions) of users.

This has led us to the thinking that _every_ project needs to be designed for millions of users at the very least. Sub-second telemetry for all the data collected, another explosion, giving rise to data analytics for everyone, not just Business Intelligence (BI) for large companies. There is a point of diminishing returns that is often ignored.

What do you do as an "architect"/"practitioner" or engineer on a team? Your small group can't design and build every piece to support these scaling demands while the sword of Damocles hangs over you in the form of potential pivots while flashes of fleeting missed opportunities stream before you.

As an industry, we are inevitably forced to make these choices. Either you're a leader and make your Faustian bargain, or you're in the general mass of developers being whipped and driven to the gates of Hell.

**There is a third option**: turn that appearance of a disadvantage into an advantage. **Embrace the principle of Least Functionality and Least Privilege and orient yourself towards a security-first posture.**

Only you, dear reader, can decide the turns this tragic story will take, and I should exaggerate what you forgive in this telling perchance.

## The Viable Ethereum Node Operators Model (VENOM)

The Viable Ethereum Node Operators Model is an implementation of the Viable Systems Model for decentralized blockchain networks.

It prioritizes and emphasizes:

-   Autonomy
-   Viability
-   Stability

## Reading this documentation

-   Guides, for broad hands-on understanding and connections to other learning resources
-   Tutorials, intended to teach a particular process or project
-   Cookbooks, collections of tips and tricks
-   Reference, full manuals and technical coverage
-   Pedias, for encyclopedic description

*   If information is more encyclopedic (with a similar scope and tone to pages on Wikipedia), a page would be considered a medium.
*   If information is less encyclopedic and more similar to a compendium, study guide, or bibliographic guide, a page would be considered a guide.
*   If information is more about direct instruction to achieve a specific task, a page would be considered a tutorial.
*   If a page is more just a set of tips and tricks (less instructive than a tutorial), it would be a cookbook.
*   If a page is a detailed reference (like a man page or full software manual), it would fit under references.

### Style

Example:
The verb 'own' can be stative. If 'owning' describes a state, change the sentence structure and use the base form of the verb.

## Network Variety in Ethereum

Variety grows exponentially with the size of organisations and major
systems, creating vast amounts of complexity with regards to its
interactions. Some real-world systems have levels of variety which are
effectively infinite. However, our perceptions attenuate (“filter-out”)
any variety which is irrelevant to what we are trying to observe.

-   Operations - elements that do things. (Infrastructure & Software)
-   Management - elements that control operations. (Protocol) & Governance)
-   Environment - the surroundings within which the other elements function.(Price and Ethereum Main Network)

In reaching a viable state, defined terms and sub-systems must be
formalized and specified. This section of the documentation is an effort in
trying to formalize such goals, objectives and key results that can be
achieved when a systems-based approach is combined with formal design
and mechanisms to achieve said goals.

## Eth Beacon Node API

This documentation currently provides references to this versioned API

> v2.3.0 - Eth2Spec v1.1.0

#### Beacon

Set of endpoints to query the beacon chain.

#### Config

Endpoints to query chain configuration, specification, and fork schedules.

#### Debug

Set of endpoints to debug chain and shouldn't be exposed publicly.

#### Events

Set of endpoints for event subscription.

#### Node

Endpoints to query node-related information

#### Validator

Endpoints intended for validator clients
