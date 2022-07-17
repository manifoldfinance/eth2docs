---
title: Kiln Spec v2.1 
tags: ['test network', 'kiln', 'beacon chain', 'ethereum']
source: https://hackmd.io/@n0ble/kiln-spec
author: n0ble
---

# Kiln Spec v2.1

> Excerpt
>  Kiln Spec v2.1  ***Kiln spec v2.1 released on March 10. See [v2.1 change set](#v2.1-change-set) fo


**Kiln spec v2.1 released on March 10. See [v2.1 change set](https://hackmd.io/@n0ble/kiln-spec#v2.1-change-set) for details.**_


-   [Kiln Spec v2.1](https://hackmd.io/@n0ble/kiln-spec#Kiln-Spec-v21 "Kiln Spec v2.1")
    -   [Spec versions](https://hackmd.io/@n0ble/kiln-spec#Spec-versions "Spec versions")
        -   [v2.1 change set](https://hackmd.io/@n0ble/kiln-spec#v21-change-set "v2.1 change set")
        -   [v2 change set](https://hackmd.io/@n0ble/kiln-spec#v2-change-set "v2 change set")
    -   [Consensus layer](https://hackmd.io/@n0ble/kiln-spec#Consensus-layer "Consensus layer")
    -   [Execution layer](https://hackmd.io/@n0ble/kiln-spec#Execution-layer "Execution layer")

This document defines the version of the Merge specification that is considered to be implemented for Kiln🔥🧱 – the last Merge sprint before launching pre-production testnets. Kiln aims to move client implementations into the production readiness stage.

## Spec versions

The following is Kiln Spec v2.1:

| Specification | Release / Commit | Reference |
| --- | --- | --- |
| Consensus spec | `v1.1.10` + `PR#2844` | [`v1.1.10`](https://github.com/ethereum/consensus-specs/tree/v1.1.10/specs/bellatrix) + [`#2844`](https://github.com/ethereum/consensus-specs/pull/2844) |
| Consensus spec tests | `v1.1.10` | [`v1.1.10`](https://github.com/ethereum/consensus-spec-tests/tree/v1.1.10) |
| EIP-3675 | `d896145678bd65d3eafd8749690c1b5228875c39` | [`d8961456`](https://github.com/ethereum/EIPs/blob/d896145678bd65d3eafd8749690c1b5228875c39/EIPS/eip-3675.md) |
| EIP-4399 | `6fe18dc5cc287c5ed690c29b4092a0a2f8873be4` | [`6fe18dc5`](https://github.com/ethereum/EIPs/blob/6fe18dc5cc287c5ed690c29b4092a0a2f8873be4/EIPS/eip-4399.md) |
| Engine API | `v1.0.0-alpha.8` | [`v1.0.0-alpha.8`](https://github.com/ethereum/execution-apis/blob/v1.0.0-alpha.7/src/engine/specification.md) |

_Note_: There might be minor updates to this specification during the sprint. The updates will be reflected by bumping the Kiln spec number (e.g. to v2), bumping the version of the respective document in this table, and announcing in the [Interop](https://discord.gg/3aFPzzU9) channel on Discord. Stay tuned.

### v2.1 change set

**Date**: March 10, 2022

| Specification | Changes | Comments |
| --- | --- | --- |
| Engine API | updated to [`v1.0.0-alpha.8`](https://github.com/ethereum/execution-apis/releases/tag/v1.0.0-alpha.8) |  |
| Consensus spec | PR [#2844](https://github.com/ethereum/consensus-specs/pull/2844) | Optimistically import any post-merge block |

### v2 change set

**Date**: February 22, 2022

| Specification | Changes | Comments |
| --- | --- | --- |
| Engine API | updated to [`v1.0.0-alpha.7`](https://github.com/ethereum/execution-apis/releases/tag/v1.0.0-alpha.7) |  |
| EIP-4399 | updated to [`6fe18dc5`](https://github.com/ethereum/EIPs/blob/6fe18dc5cc287c5ed690c29b4092a0a2f8873be4/EIPS/eip-4399.md) | PR [#4836](https://github.com/ethereum/EIPs/pull/4836) |
| Engine API | PR [#180](https://github.com/ethereum/execution-apis/pull/180) | Renaming related to EIP-4399 update |
| Consensus spec | PR [#2835](https://github.com/ethereum/consensus-specs/pull/2835) | Renaming related to EIP-4399 update |

_Note_: Renamings introduced by PRs [#180](https://github.com/ethereum/execution-apis/pull/180) and [#2835](https://github.com/ethereum/consensus-specs/pull/2835) into Engine API and Consensus specs respectively are part of the Kiln v2 specification and must be implemented alongside with other v2 changes. These renamings are considered for inclusion in the next releases of Engine API and Consensus specs.

## Consensus layer

Changes to Consensus layer spec introduced in Kiln v1:

-   Optimistic Sync [#2770](https://github.com/ethereum/consensus-specs/pull/2770), [#2820](https://github.com/ethereum/consensus-specs/pull/2820)
-   Rename “Merge” -> “Bellatrix” [#2774](https://github.com/ethereum/consensus-specs/pull/2774)
-   Rename `execute_payload` to `notify_new_payload` [#2817](https://github.com/ethereum/consensus-specs/pull/2817)
-   Rename `receipt_root` -> `receipts_root` [#2808](https://github.com/ethereum/consensus-specs/pull/2808)

## Execution layer

Changes to Execution layer spec introduced in Kiln v1:

-   Extend semantics of `executePayload` and `forkchoiceUpdated` methods [#165](https://github.com/ethereum/execution-apis/pull/165)
-   Replace terminal block error with `INVALID_TERMINAL_BLOCK` status [#170](https://github.com/ethereum/execution-apis/pull/170)
-   Refine message ordering. Take 2 [#148](https://github.com/ethereum/execution-apis/pull/148)

_Note:_ Authentication for engine api [#167](https://github.com/ethereum/execution-apis/pull/167) is a pending change to the Engine API and will be added in a subsequent version of the Kiln specification.
