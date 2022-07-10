---
title: Types of Calls
sidebar_position: 5
description: EVM Call types
---


### Types of calls

There are two types of calls in an EVM smart contract:

- **Internal calls** Internal calls are referred to function calls within a smart contract. An example is that we have two defined function A and B, and somewhere in A we save our context and change our execution flow to the beginning of B.
- **External calls** Or cross-contract calls. A and B are defined in different deployed EVM contract and A calls B in its context.
Internal call conventions
Up to ETH 1.5, there is no link and jump EVM opcode for easy handling of subroutines(even though some discussions are on-going). So we have to manually handle subroutine calls. Here are the calling conventions for an internal calls:

current subroutine's frame pointer is saved at stack, at memory location $fp - 32 where $fp is the subroutine call's frame pointer.
arguments are all pushed on stack, along with the return address. Argument with smaller index number occupies a stack slot on top of another argument with a larger index number. For example, when we want to do a function call: func abc(x, y, z), here is the arrangement of the arguments:

<pre>
               +-----------+
               |Return Addr|
               +-----------+
               |     X     |
               +-----------+
               |     Y     |
               +-----------+
 Current FP    |     Z     |
+------------> +-----------+
               |  Old FP   |
               +-----------+
               |   .....   |
               +-----------+    
 </pre>              
> Note: Putting the return address on top of the stack is because it is easier to compute the location, but this will result in more stack manipulation overhead for the subroutine calls. We will improve this design in a later version.

A subroutine's return value is stored on stack top. Note: currently we only support one return value. In the future we will improve it by supporting multiple return values.
