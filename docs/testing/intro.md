---
title: Introduction to Testing Distributed Systems
sidebar_position: 1
author: Sam Bacha
id: intro
---

# Testing Distributed Systems 

> Working Name: ts-disco / *TSDISCO*

The following are types of tests one can perform on a distributed system: 

* **Functional Testing** is conducted to test whether a system performs as it was specified or in accordance with formal requirements
* **Performance Testing** tests the reliability and responsiveness of a system under different types of conditions and scenarios
* **Penetration Testing** tests the system for security vulnerabilities
* **End-to-End Testing** is used to determine whether a system’s process flow functions as expected
* **Fuzzing** is used to test how a system responds to unexpected, random, or invalid data or inputs


### Motivation

This design spec aims to specify and produce a versatile testing platform designed to automate the tests listed above, making it faster and simpler to conduct them on distributed systems where it was traditionally difficult to do so.

**End-to-End tests** can be designed by applying exit code checks for process completion, success, or failure in tasks and phases.

**Performance tests** can be conducted by analyzing data from tests that apply a variety of network conditions and combinations thereof.

**Functional tests** can use a combination of tasks, phases, supplemental services and sidecars, and network conditions, among other tools. 

:::note

These processes and tools are further described in this documentation.

:::

### On Failures

- software.  
- configuration failures.  
- liveness failures.  

:::info

Question: should certain failures be traded-off in favor of a liveness failure?

:::

