---
title: benchmarking
id: testing-benchmarks
summary: Preliminary Benchmarking Plan
section: 2
---

# Performance Test Plan

:::note

A Sample of a Performance Testing Plan

:::

## Overview

> State the testing plan and objectives

The network is segmented into X number of sub-networks. Every ~10 minutes, validators are randomly assigned to a sub-network, so the stress point is observing and testing the ability of validators to subscribe to new topics and send/receive messages about this new topic in an adequate amount of time.

### Test Utilities

> T.B.D

### Test Procedure

Per test case:

1.  Build network
2.  Provision nodes
3.  Configure network conditions between nodes according to specified test case
4.  Configure actions and behavior between nodes according to specified test case
5.  Output performance data in CSV format
6.  Aggregate data, parse, & present data
7.  Push data to appropriate repo
8.  Reset environment

Additional details pertaining to the test setup and procedure can be found within the [source code test repo](https://github.com/ethresearch/sharding-p2p-poc/tree/master/test) or referenced in [this document](https://notes.ethereum.org/xCbNDb3qQjmvHGnMEMt_HA?view).

## Performance Metrics

| Value                    | Description                                                                                                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscription Time        | The length of time it takes for a node to subscribe to a topic, or in otherwords, join a shard, and begin receiving and broadcasting messages pertaining to that topic. |
| Discovery Time           | The length of time it takes for a node to become aware of its peers within their subscribed shard.                                                                      |
| Message Propagation Time | (Broadcast time) The length of time it takes for a message, once broadcast, to be received by a majority (99%) of peers within the shard.                               |
