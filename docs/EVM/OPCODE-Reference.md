---
title: EVM OPCODE Reference
sidebar_position: 3
tags: ['evm', 'opcodes', 'reference']
source: https://www.evm.codes/
author: evm.codes
---

# EVM Codes – A reference to Ethereum Virtual Machine Opcodes


> [see the source from evm.codes](https://www.evm.codes/)

---
STOP

0

Halts execution

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

## Notes

Exits the current [context](https://www.evm.codes/about) successfully.

When a call is executed on an address with no code and the EVM tries to read the code data, the default value is returned, 0, which corresponds to this instruction and halts the execution.

ADD

3

Addition operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first integer value to add.
2.  `b`: second integer value to add.

## Stack output

1.  `a + b`: integer result of the addition modulo 2256.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `20` |  | `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` | `0` |
| `2` | `10` |  |  | `2` | `1` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z0z0twwy2v32%200xsssszt%27~uuuuzv1%201y%2F%2F%20Example%20w%5CnvwPUSHuFFtwADDs~~%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

MUL

5

Multiplication operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first integer value to multiply.
2.  `b`: second integer value to multiply.

## Stack output

1.  `a * b`: integer result of the multiplication modulo 2256.

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `10` | `100` |
| `2` | `10` |  |

|  | Input | Output |
| --- | --- | --- |
| `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE` |
| `2` | `2` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z10z10twwy2v32%200xssssz2t%27~uuuuzv1%20y%2F%2F%20Example%20w%5CnvwPUSHuFFtwMULs~~%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SUB

3

Subtraction operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first integer value.
2.  `b`: integer value to subtract to the first.

## Stack output

1.  `a - b`: integer result of the subtraction modulo 2256.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `0` |  | `1` | `0` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |
| `2` | `10` |  |  | `2` | `1` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~10~1wyyz2~1~w%27~yPUSH1%20z%2F%2F%20Example%20y%5Cnw0ySUB%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

DIV

5

Integer division operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: integer numerator
2.  `b`: integer denominator.

## Stack output

1.  `a // b`: integer result of the integer division. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `1` |  | `1` | `1` | `0` |
| `2` | `10` |  |  | `2` | `2` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~10~10wyyz2~2~1w%27~yPUSH1%20z%2F%2F%20Example%20y%5CnwyDIV%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SDIV

5

Signed integer division operation (truncated)

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All values are treated as two’s complement signed 256-bit integers. Note the overflow semantic when −2255 is negated.

## Stack input

1.  `a`: integer numerator.
2.  `b`: integer denominator.

## Stack output

1.  `a // b`: integer result of the signed integer division. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `1` |  | `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE` | `2` |
| `2` | `10` |  |  | `2` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1vvszzy2wrFwrEs%27~uuuz%5Cny%2F%2F%20Example%20wt32%200xr~vt1%2010uFFFtzPUSHszSDIVr~~~%01rstuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

MOD

5

Modulo remainder operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: integer numerator.
2.  `b`: integer denominator.

## Stack output

1.  `a % b`: integer result of the integer modulo. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `1` |  | `1` | `17` | `2` |
| `2` | `3` |  |  | `2` | `5` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~3~10wyyz2~5~17w%27~yPUSH1%20z%2F%2F%20Example%20y%5CnwyMOD%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SMOD

5

Signed modulo remainder operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All values are treated as two’s complement signed 256-bit integers. Note the overflow semantic when −2255 is negated.

## Stack input

1.  `a`: integer numerator.
2.  `b`: integer denominator.

## Stack output

1.  `a % b`: integer result of the signed integer modulo. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `10` | `1` |
| `2` | `3` |  |

|  | Input | Output |
| --- | --- | --- |
| `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE` |
| `2` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1s3s10tzzy2wrDwr8t%27~uuuz%5Cny%2F%2F%20Example%20wv32%200xr~vzPUSHuFFFtzSMODsv1%20r~~~%01rstuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

ADDMOD

8

Modulo addition operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All intermediate calculations of this operation are not subject to the 2256 modulo.

## Stack input

1.  `a`: first integer value to add.
2.  `b`: second integer value to add.
3.  `N`: integer denominator.

## Stack output

1.  `(a + b) % N`: integer result of the addition followed by a modulo. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `4` |  | `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` | `1` |
| `2` | `10` |  |  | `2` | `2` |  |
| `3` | `8` |  |  | `2` | `2` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z8z10z10vwwy2z2z2u32%200xssssv%27~ttttzu1%20y%2F%2F%20Example%20w%5CnvwADDMODuwPUSHtFFs~~%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

MULMOD

8

Modulo multiplication operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All intermediate calculations of this operation are not subject to the 2256 modulo.

## Stack input

1.  `a`: first integer value to multiply.
2.  `b`: second integer value to multiply.
3.  `N`: integer denominator.

## Stack output

1.  `(a * b) % N`: integer result of the multiplication followed by a modulo. If the denominator is 0, the result will be 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `4` |  | `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` | `9` |
| `2` | `10` |  |  | `2` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |  |
| `3` | `8` |  |  | `3` | `12` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1v8v10v10twwy2v12usust%27~rrrrzwPUSHy%2F%2F%20Example%20w%5Cnvz1%20uz32%200xstwMULMODs~~~~rFF%01rstuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

EXP

10

Exponential operation

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: integer base.
2.  `exponent`: integer exponent.

## Stack output

1.  `a ** exponent`: integer result of the exponential operation modulo 2256.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `100` |  | `1` | `2` | `4` |
| `2` | `2` |  |  | `2` | `2` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~2~10wyyz2~2~2w%27~yPUSH1%20z%2F%2F%20Example%20y%5CnwyEXP%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 10
dynamic_gas = 50 * exponent_byte_size
```

The dynamic gas is simply a function of how many bytes we need to represent the exponent in [binary](https://en.wikipedia.org/wiki/Binary_number).

## Estimate your gas cost

Static gas + dynamic gas = 10

SIGNEXTEND

5

Extend length of two’s complement signed integer

| Since | Group |
| --- | --- |
| Frontier | Stop and Arithmetic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `b`: size in byte - 1 of the integer to sign extend.
2.  `x`: integer value to sign extend.

## Stack output

1.  `y`: integer result of the sign extend.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |  | `1` | `0` | `0x7F` |
| `2` | `0xFF` |  |  | `2` | `0x7F` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~xFywwz2~x7y%27~wPUSH1%200z%2F%2F%20Example%20yF~wSIGNEXTENDw%5Cn%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

LT

3

Less-than comparison

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: left side integer.
2.  `b`: right side integer.

## Stack output

1.  `a < b`: 1 if the left side is smaller, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `9` | `1` |  | `1` | `10` | `0` |
| `2` | `10` |  |  | `2` | `10` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1w~9yLTyyz2wwyLT%27~yPUSH1%20z%2F%2F%20Example%20y%5Cnw~10%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

GT

3

Greater-than comparison

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: left side integer.
2.  `b`: right side integer.

## Stack output

1.  `a > b`: 1 if the left side is bigger, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `1` |  | `1` | `10` | `0` |
| `2` | `9` |  |  | `2` | `10` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~9wyyz2~10w%27~yPUSH1%20z%2F%2F%20Example%20y%5Cnw~10yGT%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SLT

3

Signed less-than comparison

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All values are treated as two’s complement signed 256-bit integers.

## Stack input

1.  `a`: left side signed integer.
2.  `b`: right side signed integer.

## Stack output

1.  `a < b`: 1 if the left side is smaller, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` | `1` |  | `1` | `10` | `0` |
| `2` | `0` |  |  | `2` | `10` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z9v32%200xsssstwwy2z10z10t%27~uuuuzv1%20y%2F%2F%20Example%20w%5CnvwPUSHuFFtwSLTs~~%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SGT

3

Signed greater-than comparison

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

All values are treated as two’s complement signed 256-bit integers.

## Stack input

1.  `a`: left side signed integer.
2.  `b`: right side signed integer.

## Stack output

1.  `a > b`: 1 if the left side is bigger, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0` | `1` |  | `1` | `10` | `0` |
| `2` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |  |  | `2` | `10` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1v32%200xssssz9twwy2z10z10t%27~uuuuzv1%20y%2F%2F%20Example%20w%5CnvwPUSHuFFtwSGTs~~%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

EQ

3

Equality comparison

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: left side integer.
2.  `b`: right side integer.

## Stack output

1.  `a == b`: 1 if the left side is equal to the right side, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `1` |  | `1` | `10` | `0` |
| `2` | `10` |  |  | `2` | `5` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~10wyyz2~5w%27~yPUSH1%20z%2F%2F%20Example%20y%5Cnw~10yEQ%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

ISZERO

3

Simple not operator

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: integer.

## Stack output

1.  `a == 0`: 1 if `a` is 0, 0 otherwise.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `10` | `0` |  | `1` | `0` | `1` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27~1y1wzz~2yw%27~%2F%2F%20Example%20z%5CnyzPUSH1%20w0zISZERO%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

AND

3

Bitwise AND operation

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first binary value.
2.  `b`: second binary value.

## Stack output

1.  `a & b`: the bitwise AND result.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0xF` | `0xF` |  | `1` | `0xFF` | `0` |
| `2` | `0xF` |  |  | `2` | `0` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~xF~xwyyz2~~xFw%27~yPUSH1%200z%2F%2F%20Example%20y%5CnwFyAND%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

OR

3

Bitwise OR operation

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first binary value.
2.  `b`: second binary value.

## Stack output

1.  `a | b`: the bitwise OR result.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0xF0` | `0xFF` |  | `1` | `0xFF` | `0xFF` |
| `2` | `0xF` |  |  | `2` | `0xFF` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~~0yORyyz2~F~FyOR%27~yPUSH1%200xFz%2F%2F%20Example%20y%5Cn%01yz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

XOR

3

Bitwise XOR operation

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: first binary value.
2.  `b`: second binary value.

## Stack output

1.  `a ^ b`: the bitwise XOR result.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0xF0` | `0xFF` |  | `1` | `0xFF` | `0` |
| `2` | `0xF` |  |  | `2` | `0xFF` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~~0wyyz2~F~Fw%27~yPUSH1%200xFz%2F%2F%20Example%20y%5CnwyXOR%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

NOT

3

Bitwise NOT operation

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: binary value.

## Stack output

1.  `~a`: the bitwise NOT result.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `0` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27PUSH1%200%5CnNOT%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

BYTE

3

Retrieve single byte from word

| Since | Group |
| --- | --- |
| Frontier | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `i`: byte offset starting from the most significant byte.
2.  `x`: 32-byte value.

## Stack output

1.  `y`: the indicated byte at the least significant position. If the byte offset is out of range, the result is 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `31` | `0xFF` |  | `1` | `30` | `0xFF` |
| `2` | `0xFF` |  |  | `2` | `0xFF00` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~0xFF~31vyyz2w2%200xFF00~30v%27~w1%20z%2F%2F%20Example%20y%5CnwyPUSHvyBYTE%01vwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SHL

3

Left shift operation

| Since | Group |
| --- | --- |
| Constantinople | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Shift the bits towards the most significant one. The bits moved after the 256th one are discarded, the new bits are set to 0.

## Stack input

1.  `shift`: number of bits to shift to the left.
2.  `value`: 32 bytes to shift.

## Stack output

1.  `value << shift`: the shifted value. If `shift` is bigger than 255, returns 0.

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `1` | `2` |
| `2` | `1` |  |

|  | Input | Output |
| --- | --- | --- |
| `1` | `4` | `0xF000000000000000000000000000000000000000000000000000000000000000` |
| `2` | `0xFF00000000000000000000000000000000000000000000000000000000000000` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z1z1swwy2v32%200xFFuuuuutz4s%27~tttzv1%20y%2F%2F%20Example%20w%5CnvwPUSHu~~t00swSHL%01stuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SHR

3

Logical right shift operation

| Since | Group |
| --- | --- |
| Constantinople | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Shift the bits towards the least significant one. The bits moved before the first one are discarded, the new bits are set to 0.

## Stack input

1.  `shift`: number of bits to shift to the right.
2.  `value`: 32 bytes to shift.

## Stack output

1.  `value >> shift`: the shifted value. If `shift` is bigger than 255, returns 0.

## Examples

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `1` | `1` |  | `1` | `4` | `0xF` |
| `2` | `2` |  |  | `2` | `0xFF` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1~2~1wyyz2~0xFF~4w%27~yPUSH1%20z%2F%2F%20Example%20y%5CnwySHR%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SAR

3

Arithmetic (signed) right shift operation

| Since | Group |
| --- | --- |
| Constantinople | Comparison & Bitwise Logic Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Shift the bits towards the least significant one. The bits moved before the first one are discarded, the new bits are set to 0 if the previous most significant bit was 0, otherwise the new bits are set to 1.

## Stack input

1.  `shift`: number of bits to shift to the right.
2.  `value`: integer to shift.

## Stack output

1.  `value >> shift`: the shifted value.

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `1` | `1` |
| `2` | `2` |  |

|  | Input | Output |
| --- | --- | --- |
| `1` | `4` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |
| `2` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27y1z2z1twwy2v32%200xuuu0z4t%27~FFFFFFFzv1%20y%2F%2F%20Example%20w%5CnvwPUSHu~~~twSAR%01tuvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SHA3

30

Compute Keccak-256 hash

| Since | Group |
| --- | --- |
| Frontier | SHA3 |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `offset`: byte offset in the memory.
2.  `size`: byte size to read in the memory.

## Stack output

1.  `hash`: Keccak-256 hash of the given data in memory.

## Example

| Memory |
| --- |
| `0xFFFFFFFF` |

|  | Input | Output |
| --- | --- | --- |
| `1` | `0` | `0x29045A592007D0C246EF02C2223570DA9522D0CF0F73282C79A1BC8F0BB2C238` |
| `2` | `4` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27sPutkrequired%20valugin%20memoryj32%200xFFFFFFFFffffz0wMSTOREwwsCallkopcodez4z0wSHA3%27~0000000zj1%20w%5Cns%2F%2F%20k%20thgjwPUSHge%20f~~%01fgjkswz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
minimum_word_size = (size + 31) / 32

static_gas = 30
dynamic_gas = 6 * minimum_word_size + memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 30

ADDRESS

2

Get address of currently executing account

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `address`: the 20-byte address of the current account.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0x9bbfed6889322e016e0a02ee459d306fc19545d8` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27ADDRESS%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

BALANCE

100

Get balance of the given account

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `address`: 20-byte address of the account to check.

## Stack output

1.  `balance`: balance of the given account in [wei](https://www.investopedia.com/terms/w/wei.asp). Returns 0 if the account doesn't exist.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `0x9bbfed6889322e016e0a02ee459d306fc19545d8` | `125985` |

[Reproduce in playground](https://www.evm.codes/playground?callValue=125985&unit=Wei&codeType=Mnemonic&code=%27%2F%2F%20Read%20current%20contract%20balance%5CnADDRESS%5CnBALANCE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

The static cost is 0. If the accessed address is warm, the dynamic cost is 100. Otherwise the dynamic cost is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

ORIGIN

2

Get execution origination address

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `address`: the 20-byte address of the sender of the transaction. It can only be an account without code.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0xbe862ad9abfe6f22bcb087716c7d89a26051f74c` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27ORIGIN%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CALLER

2

Get caller address

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `address`: the 20-byte address of the caller account. This is the account that did the last call (except [delegate call](https://www.evm.codes/#F4)).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0xbe862ad9abfe6f22bcb087716c7d89a26051f74c` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27CALLER%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CALLVALUE

2

Get deposited value by the instruction/transaction responsible for this execution

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `value`: the value of the current call in [wei](https://www.investopedia.com/terms/w/wei.asp).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `123456789` |

[Reproduce in playground](https://www.evm.codes/playground?callValue=123456789&unit=Wei&codeType=Mnemonic&code=%27CALLVALUE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CALLDATALOAD

3

Get input data of current environment

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `i`: byte offset in the [calldata](https://www.evm.codes/about).

## Stack output

1.  `data[i]`: 32-byte value starting from the given offset of the [calldata](https://www.evm.codes/about). All bytes after the end of the [calldata](https://www.evm.codes/about) are set to 0.

## Examples

| Calldata |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

|  | Input | Output |
| --- | --- | --- |
| `1` | `0` | `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

|  | Input | Output |
| --- | --- | --- |
| `1` | `31` | `0xFF00000000000000000000000000000000000000000000000000000000000000` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&callData=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF&codeType=Mnemonic&code=%27~1w0yzz~2w31y%27~%2F%2F%20Example%20z%5CnyzCALLDATALOADwzPUSH1%20%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

CALLDATASIZE

2

Get size of input data in current environment

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `size`: byte size of the [calldata](https://www.evm.codes/about).

## Example

| Calldata |
| --- |
| `0xFF` |

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `1` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&callData=0xFF&codeType=Mnemonic&code=%27CALLDATASIZE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CALLDATACOPY

3

Copy input data in current environment to memory

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

For out of bound bytes, 0s will be copied.

## Stack input

1.  `destOffset`: byte offset in the [memory](https://www.evm.codes/about) where the result will be copied.
2.  `offset`: byte offset in the [calldata](https://www.evm.codes/about) to copy.
3.  `size`: byte size to copy.

## Examples

| Calldata |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `0` |
| `2` | `0` |  | `2` | `31` |
| `3` | `32` |  | `3` | `8` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

| Memory after input 1 then 2 |
| --- |
| `0xFF00000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&callData=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF&codeType=Mnemonic&code=%27z1~32~0ywwz2~8~31y%27~wPUSH1%20z%2F%2F%20Example%20y~0wCALLDATACOPYw%5Cn%01wyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
minimum_word_size = (size + 31) / 32

static_gas = 3
dynamic_gas = 3 * minimum_word_size + memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 3

CODESIZE

2

Get size of code running in current environment

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Each instruction occupies one byte. In the case of a [PUSH](https://www.evm.codes/#60) instruction, the bytes that need to be pushed are encoded after that, it thus increases the codesize accordingly.

## Stack output

1.  `size`: byte size of the [code](https://www.evm.codes/about).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `32` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27%2F%2F%20Add%20som~instructions%20to%20increas~th~cod~sizeyPUSH29%200yPOPyyCODESIZE%27~e%20y%5Cn%01y~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CODECOPY

3

Copy code running in current environment to memory

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

For out of bound bytes, 0s will be copied.

## Stack input

1.  `destOffset`: byte offset in the [memory](https://www.evm.codes/about) where the result will be copied.
2.  `offset`: byte offset in the [code](https://www.evm.codes/about) to copy.
3.  `size`: byte size to copy.

## Examples

| Code |
| --- |
| `0x7DFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F` |

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `0` |
| `2` | `0` |  | `2` | `31` |
| `3` | `32` |  | `3` | `8` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0x7DFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F` |

| Memory after input 1 then 2 |
| --- |
| `0x7F00000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7F` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27qPutwbeginning%20ofwcodXtowexpected%20valueZ30VxWWWWWZ32VyyqRemovewvalues%20fromwstackTTj1~32~0_j2~8~31_%27~Z1%20zFFFFFFy%5Cnw%20thXq%2F%2F%20jyyqExamplX_~0yCODECOPYZyPUSHXe%20WzzV%200TyPOP%01TVWXZ_jqwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
minimum_word_size = (size + 31) / 32

static_gas = 3
dynamic_gas = 3 * minimum_word_size + memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 3

GASPRICE

2

Get price of gas in current environment

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `price`: gas price in [wei](https://www.investopedia.com/terms/w/wei.asp) per gas.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `10` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27GASPRICE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

EXTCODESIZE

100

Get size of an account’s code

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `address`: 20-byte address of the contract to query.

## Stack output

1.  `size`: byte size of the [code](https://www.evm.codes/about).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `0x43a61f3f4c73ea0d444c5c1c1a8544067a86219b` | `32` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27gCQYtha*cQ8%20GJ%20a_-deW7...p0KWJ6l5260206lF3NNNNN0p32KjjgCBm8mY-dVabovep41p0p0jCREATE%20gPutsmnew)addresLjjgThVaddres_iL%2C%20wVcan%20querymsizejEXTCODESIZE%27~JJJFp91%20m%20thVl000j%5Cng%2F%2F)-ntrac*_s%20Y-nstructor%20W9G0xVe%20QB_a%20NlllL_onmstackKjMSTOREJFFG32%20Breate9jPUSH8fwith.~~~-co*t%20)%20f%01)*-.89BGJKLNQVWY_fgjlmp~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

The static cost is 0. If the accessed address is warm, the dynamic cost is 100. Otherwise the dynamic cost is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

EXTCODECOPY

100

address

destOffset

offset

size

Copy an account’s code to memory

| Since | Group |
| --- | --- |
| Frontier | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

For out of bound bytes, 0s will be copied.

## Stack input

1.  `address`: 20-byte address of the contract to query.
2.  `destOffset`: byte offset in the [memory](https://www.evm.codes/about) where the result will be copied.
3.  `offset`: byte offset in the [code](https://www.evm.codes/about) to copy.
4.  `size`: byte size to copy.

## Examples

| Code |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0x43a61f3f4c73ea0d444c5c1c1a8544067a86219b` |  | `1` | `0x43a61f3f4c73ea0d444c5c1c1a8544067a86219b` |
| `2` | `0` |  | `2` | `0` |
| `3` | `0` |  | `3` | `31` |
| `4` | `32` |  | `4` | `8` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

| Memory after input 1 then 2 |
| --- |
| `0xFF00000000000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27jCNQthat%20cNZwith%20.9%20aGcodeK7qqqqqqqqqIWK96_5260206_F3JJJJJ0!W(C-gZwithgQcodBabove~41IIzCREATE%20jPutsgnew%20ZaddresGongstack(Cleargmemory%20forge*esIIWI!WL1!IVL2~8~31V%27~)1%20z%5Cnq999Fj%2F%2F%20g%20thB_000Zcontract%20WzMSTOREVIzDUP4zEXTCODECOPYQconstructor%20N-Ga%20L(E*BK).0xJ___I~0Gs%20Be%209FF.32%20-reate*xampl)zPUSH(zzj!~32%01!()*-.9BGIJKLNQVWZ_gjqz~_)

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
minimum_word_size = (size + 31) / 32

static_gas = 0
dynamic_gas = 3 * minimum_word_size + memory_expansion_cost + address_access_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about). If the accessed address is warm, `address_access_cost` is 100, otherwise it is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

RETURNDATASIZE

2

Get size of output data from the previous call from the current environment

| Since | Group |
| --- | --- |
| Byzantium | Environmental Information |

RETURNDATACOPY

3

Copy output data from the previous call to memory

| Since | Group |
| --- | --- |
| Byzantium | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

A sub context can be created with [CALL](https://www.evm.codes/#F1), [CALLCODE](https://www.evm.codes/#F2), [DELEGATECALL](https://www.evm.codes/#F4) or [STATICCALL](https://www.evm.codes/#FA).

## Stack input

1.  `destOffset`: byte offset in the [memory](https://www.evm.codes/about) where the result will be copied.
2.  `offset`: byte offset in the [return data](https://www.evm.codes/about) from the last executed sub [context](https://www.evm.codes/about) to copy.
3.  `size`: byte size to copy.

## Examples

| Return data |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `32` |
| `2` | `0` |  | `2` | `31` |
| `3` | `32` |  | `3` | `1` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

| Memory after input 1 then 2 |
| --- |
| `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27jCKVthat%20cK(wich%20return-32%20*Z7F7ggggggggggFJ_Z*6Q527*F6Q526020.!_Zq06020526029.00~64_Breatef(withfVcod)above~77JJzCREATE%20jPutsfnew%20(addres-onfstackBallfdeployed%20XJJJJzDUP584%200xg*zSTATICCALLBlearfstackzPOPzPOPBlearfmemoryJJ_J!_J~64_zG1!JJWG2~1~31!W%27~81%20z%5CnqQQQj%2F%2F%20g***f%20th)_zMSTOREZ832%200xXcontractWzRETURNDATACOPYzVconstructor%20Q000Kreate-a%20J~0GzjExampl)BzzjC8zPUSH.6QF3qqqq-s%20*FF)e%20(X%20!~32%01!()*-.8BGJKQVWXZ_fgjqz~_)

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   Reading offset equal of higher than [RETURNDATASIZE](https://www.evm.codes/#3D).

## Gas

```
minimum_word_size = (size + 31) / 32

static_gas = 3
dynamic_gas = 3 * minimum_word_size + memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 3

EXTCODEHASH

100

Get hash of an account’s code

| Since | Group |
| --- | --- |
| Constantinople | Environmental Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `address`: 20-byte address of the account.

## Stack output

1.  `hash`: hash of the chosen account's [code](https://www.evm.codes/about), or 0 if the account has no [code](https://www.evm.codes/about).

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `0x43a61f3f4c73ea0d444c5c1c1a8544067a86219b` | `0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27yClmthaWcl_%204%20FFZjYdeg3%200x63FFFFFFFF60005260046000F3q0~MSTORE~~yCfz_zmYdeZboveq13q0q0~CREATE%20yPutsznewVaddresjonzstack~~yGetzhash~EXTCODEHASH%27~%5Cnz%20the%20y%2F%2F%20qgVYntracWmYnstructor%20lfja%20js%20g~PUSH1freate_pwithZ%20aYcoWt%20V%20p%01VWYZ_fgjlmpqyz~_)

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

The static cost is 0. If the accessed address is warm, the dynamic cost is 100. Otherwise the dynamic cost is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

BLOCKHASH

20

Get the hash of one of the 256 most recent complete blocks

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `blockNumber`: block number to get the hash from. Valid range is the last 256 blocks (not including the current one). Current block number can be queried with [NUMBER](https://www.evm.codes/#43).

## Stack output

1.  `hash`: hash of the chosen block, or 0 if the block number is not in the valid range.

## Examples

|  | Input | Output |
| --- | --- | --- |
| `1` | `599423545` | `0x29045A592007D0C246EF02C2223570DA9522D0CF0F73282C79A1BC8F0BB2C238` |

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

COINBASE

2

Get the block’s beneficiary address

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `address`: miner's 20-byte address.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0x5B38Da6a701c568545dCfcB03FcB875f56beddC4` |

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

TIMESTAMP

2

Get the block’s timestamp

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `timestamp`: unix timestamp of the current block.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `1636704767` |

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

NUMBER

2

Get the block’s number

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `blockNumber`: current block number.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `1636704767` |

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

DIFFICULTY

2

Get the block’s difficulty

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `difficulty`: current [block difficulty](https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/#how-it-works).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `10995000000000000` |

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

GASLIMIT

2

Get the block’s gas limit

| Since | Group |
| --- | --- |
| Frontier | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `gasLimit`: [gas limit](https://ethereum.org/en/developers/docs/gas/#what-is-gas-limit).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0xffffffffffff` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27GASLIMIT%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

CHAINID

2

Get the chain ID

| Since | Group |
| --- | --- |
| Istanbul | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Here are some chain ids ([source](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/)):

| Id | Chain |
| --- | --- |
| 1 | Mainnet |
| 3 | Ropsten |
| 4 | Rinkeby |
| 5 | Goerli |
| 6 | Kotti |
| 61 | Classic |
| 63 | Mordor |
| 212 | Astor |
| 2018 | Dev |

## Stack output

1.  `chainId`: chain id of the network.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `1` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27CHAINID%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

SELFBALANCE

5

Get balance of currently executing account

| Since | Group |
| --- | --- |
| Istanbul | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Semantically equivalent of calling [BALANCE](https://www.evm.codes/#31) with [ADDRESS](https://www.evm.codes/#30) as parameter, but with a reduced gas cost.

## Stack output

1.  `balance`: balance of the current account in [wei](https://www.investopedia.com/terms/w/wei.asp).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `9` |

[Reproduce in playground](https://www.evm.codes/playground?callValue=9&unit=Wei&codeType=Mnemonic&code=%27SELFBALANCE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

BASEFEE

2

Get the base fee

| Since | Group |
| --- | --- |
| London | Block Information |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `baseFee`: [base fee](https://ethereum.org/en/developers/docs/gas/#base-fee) in [wei](https://www.investopedia.com/terms/w/wei.asp).

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `10` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27BASEFEE%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

POP

2

Remove item from stack

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `y`: a stack item.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `125985` |  |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27PUSH3%20125985%5CnPOP%27_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

MLOAD

3

Load word from memory

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `offset`: offset in the [memory](https://www.evm.codes/about) in bytes.

## Stack output

1.  `value`: the 32 bytes in [memory](https://www.evm.codes/about) starting at that offset. If it goes beyond its current size (see [MSIZE](https://www.evm.codes/#59)), writes 0s.

## Examples

| Memory |
| --- |
| `0x00000000000000000000000000000000000000000000000000000000000000FF` |

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0` | `0xFF` |  | `1` | `1` | `0xFF00` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27qPut%20thkstatkin%20memoryg32%200xfffffdFFv0zMSTOREw1v0jw2v1jz%27~dddz%5CnwzzqExamplkvg1%20q%2F%2F%20ke%20jzMLOADgzPUSHf~~d00%01dfgjkqvwz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 3
dynamic_gas = memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 6

MSTORE

3

Save word to memory

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `offset`: offset in the [memory](https://www.evm.codes/about) in bytes.
2.  `value`: 32-byte value to write in the [memory](https://www.evm.codes/about).

## Examples

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `1` |
| `2` | `0xFF` |  | `2` | `0xFF` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0x00000000000000000000000000000000000000000000000000000000000000FF` |

| Memory after input 1 then 2 |
| --- |
| `0x0000000000000000000000000000000000000000000000000000000000000000FF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1v0wyz2v1w%27~yPUSH1%20z%2F%2F%20Example%20y%5CnwyMSTOREyv~0xFF~%01vwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 3
dynamic_gas = memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 6

MSTORE8

3

Save byte to memory

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `offset`: offset in the [memory](https://www.evm.codes/about) in bytes.
2.  `value`: 1-byte value to write in the [memory](https://www.evm.codes/about) (the least significant byte of the 32-byte stack value).

## Examples

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `1` |
| `2` | `0xFFFF` |  | `2` | `0xFF` |

| Memory before |
| --- |
| `0` |

| Memory after input 1 |
| --- |
| `0xFF` |

| Memory after input 1 then 2 |
| --- |
| `0xFFFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1v2%200xFFFFy0w~z2y0xFFy1w%27~%5Cnz%2F%2F%20Example%20yv1%20w~MSTORE8~v~PUSH%01vwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 3
dynamic_gas = memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 6

SLOAD

100

Load word from storage

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `key`: 32-byte key in [storage](https://www.evm.codes/about).

## Stack output

1.  `value`: 32-byte value corresponding to that key. 0 if that key was never written before.

## Examples

| Storage key | Storage value |
| --- | --- |
| `0` | `46` |

|  | Input | Output |  |  | Input | Output |
| --- | --- | --- | --- | --- | --- | --- |
| `1` | `0` | `46` |  | `1` | `1` | `0` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27wSet%20up%20thrstatez46z0~SSTOREy1z0vy2z1v~%27~%5Cnz~PUSH1%20y~~wExamplrw%2F%2F%20v~SLOADre%20%01rvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

The static cost is 0. If the accessed address is warm, the dynamic cost is 100. Otherwise the dynamic cost is 2100. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: 'key' is cold?

YesNo

Static gas + dynamic gas = 100

SSTORE

100

Save word to storage

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `key`: 32-byte key in [storage](https://www.evm.codes/about).
2.  `value`: 32-byte value to store.

## Examples

|  | Input 1 |  |  | Input 2 |
| --- | --- | --- | --- | --- |
| `1` | `0` |  | `1` | `8965` |
| `2` | `0xFFFF` |  | `2` | `0xFF` |

| Storage key before | Storage value |
| --- | --- |
|  |  |

| Storage key after input 1 | Storage value |
| --- | --- |
| `0` | `0xFFFF` |

| Storage key after input 1 then 2 | Storage value |
| --- | --- |
| `0` | `0xFFFF` |
| `8965` | `0xFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27z1uFFv1%200w~z2uy8965w%27~%5Cnz%2F%2F%20Example%20yv2%20w~SSTORE~v~PUSHuy0xFF%01uvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Gas

## Definitions:

-   **value**: value from the stack input.
-   **current\_value**: current value of the storage slot.
-   **original\_value**: value of the storage slot before the current transaction.

```
static_gas = 0

if value == current_value
    if key is warm
        base_dynamic_gas = 100
    else
        base_dynamic_gas = 100
else if current_value == original_value
    if original_value == 0
        base_dynamic_gas = 20000
    else
        base_dynamic_gas = 2900
else
    base_dynamic_gas = 100
```

On top of the cost above, 2100 is added to `base_dynamic_gas` if the slot is cold. See section [access sets](https://www.evm.codes/about).

## Gas refunds

```
if value != current_value
    if current_value == original_value
        if original_value != 0 and value == 0
            gas_refunds += 4800
    else
        if original_value != 0
            if current_value == 0
                gas_refunds -= 4800
            else if value == 0
                gas_refunds += 4800
        if value == original_value
            if original_value == 0
                if key is warm
                    gas_refunds += 20000 - 100
                else
                    gas_refunds += 19900
            else
                if key is warm
                    gas_refunds += 5000 - 2100 - 100
                else
                    gas_refunds += 4900
```

See [gas refunds](https://www.evm.codes/about).

## Estimate your gas cost

State: current value in storage

State: original value before the current transaction

State: 'key' is cold?

YesNo

Static gas + dynamic gas = 100

JUMP

8

Alter the program counter

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

The program counter (PC) is a byte offset in the deployed [code](https://www.evm.codes/about). It indicates which instruction will be executed next. When an [ADD](https://www.evm.codes/#01) is executed, for example, the PC is incremented by 1, since the instruction is 1 byte. The [PUSH](https://www.evm.codes/#60) instructions are bigger than one byte, and so will increment the counter accordingly.

The **JUMP** instruction alters the program counter, thus breaking the linear path of the execution to another point in the deployed [code](https://www.evm.codes/about). It is used to implement functionalities like functions.

## Stack input

1.  `counter`: byte offset in the deployed [code](https://www.evm.codes/about) where execution will continue from. Must be a [JUMPDEST](https://www.evm.codes/#5B) instruction.

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27wWZjump%20overqinvalid%20and%20jusXgoYoqpushk4x0_%20%20%20x2%20%7Bprevious%20instruction%20occupies%202%20bytes%7DzINVALIDx3_DEST~4k1x5%27~%20wOffseXz%5Cnx%20~w%2F%2F%20qYhZkzPUSH1%20_zJUMPZe%20Y%20tXt%20%01XYZ_kqwxz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   `Counter` offset is not a [JUMPDEST](https://www.evm.codes/#5B). The error is generated even if the JUMP would not have been done.

JUMPI

10

Conditionally alter the program counter

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

The program counter (PC) is a byte offset in the deployed [code](https://www.evm.codes/about). It indicates which instruction will be executed next. When an [ADD](https://www.evm.codes/#01) is executed, for example, the PC is incremented by 1, since the instruction is 1 byte. The [PUSH](https://www.evm.codes/#60) instructions are bigger than one byte, and so will increment the counter accordingly.

The **JUMPI** instruction may alter the program counter, thus breaking the linear path of the execution to another point in the deployed [code](https://www.evm.codes/about). It is used to implement functionalities like loops and conditions.

## Stack input

1.  `counter`: byte offset in the deployed [code](https://www.evm.codes/about) where execution will continue from. Must be a [JUMPDEST](https://www.evm.codes/#5B) instruction.
2.  `b`: the program counter will be altered with the new value only if this value is different from 0. Otherwise, the program counter is simply incremented and the next instruction will be executed.

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27qFirstk%20noYjump%2C%20secondkw0%20XRY0w10z2~h4~W_z5w12z7~h9~Z0gINVALIDK11gZ2w_z13%27~%20%7Bprevious%20instruction%20occupiR%202%20bytR%7DgzXseYwgWq%2F%2F%20k%20example%20doRhQI%20%20Kg%5Cn_1%20ZQDESTz1Yt%20X%20qOffWPUSH_ResQJUMPK%20z%01KQRWXYZ_ghkqwz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   `Counter` offset is not a [JUMPDEST](https://www.evm.codes/#5B). The error is generated only if the JUMP would have been done.

PC

2

Get the value of the program counter prior to the increment corresponding to this instruction

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

The program counter (PC) is a byte offset in the deployed [code](https://www.evm.codes/about). It indicates which instruction will be executed next. When an [ADD](https://www.evm.codes/#01) is executed, for example, the PC is incremented by 1, since the instruction is 1 byte. The [PUSH](https://www.evm.codes/#60) instructions are bigger than one byte, and so will increment the counter accordingly.

## Stack output

1.  `counter`: PC of this instruction in the current program.

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27~0x~1xJUMPDESTzesq2x~3xPUSH1%201%20l4x~6%20%7Bpreviouminstructionmtakem2%20bytes%7D%27~PCwwwlz%20%2F%2F%20Offx%5Cnw%20%20qt%20ms%20lzseq%01lmqwxz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

MSIZE

2

Get the size of active memory in bytes

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

The [memory](https://www.evm.codes/about) is always fully accessible. What this instruction tracks is the highest offset that was accessed in the current execution. A first write or read to a bigger offset will trigger a [memory expansion](https://www.evm.codes/about), which will cost gas. The size is always a multiple of a word (32 bytes).

## Stack output

1.  `size`: current [memory](https://www.evm.codes/about) size in bytes (higher offset accessed until now + 1).

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27jInitiallygkufirst~1mkx39upart%20of%20third~3ms%27~mqPOPqjNow%20size%20is%20v%20%2F%2F%20uqMLOADvRead%20q%5Cnm%20wordkqPUSH1gjMSIZEvg%200%01gjkmquv~_)

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

GAS

2

Get the amount of available gas, including the corresponding reduction for the cost of this instruction

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack output

1.  `gas`: remaining gas (after this instruction).

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27GASyPUSH3%2021000zCosqof~transactionyGASLIMITzGaskhaqwjgivenko~context__zResulqis~amounqof%20gjused%20upko%20andbncluding~GASbnstruction%27~khe%20z%20%2F%2F%20y%5Cnqt%20k%20tjas%20b%20i_ySUB%01_bjkqyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

JUMPDEST

1

Mark a valid destination for jumps

| Since | Group |
| --- | --- |
| Frontier | Stack Memory Storage and Flow Operations |

## Notes

Mark a valid destination for [JUMP](https://www.evm.codes/#56) or [JUMPI](https://www.evm.codes/#57). This operation has no effect on machine state during execution.

PUSH1

3

Place 1 byte item on stack

| Since | Group |
| --- | --- |
| Frontier | Push Operations |

_Index 1 is top of the stack._

## Notes

The new value is put on top of the stack, incrementing all the other value indices. The values for a specific opcode thus have to be pushed in reverse order of the stack. For example, with [MSTORE](https://www.evm.codes/#52), the first value pushed would have to be `value`, and then `offset`.

## Stack output

1.  `value`: pushed value, aligned to the right (put in the lowest significant bytes).

## Example

|  |  |
| --- | --- |
| **Code** | `0x60FF6000` |
| **Text** | `PUSH1 FF PUSH1 00` |

|  | Input | Output |
| --- | --- | --- |
| `1` |  | `0x00` |
| `2` |  | `0xFF` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27~xFF%5Cn~%27~PUSH1%200%01~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Stack overflow.

PUSH2

3

Place 2 byte item on stack

PUSH3

3

Place 3 byte item on stack

PUSH4

3

Place 4 byte item on stack

PUSH5

3

Place 5 byte item on stack

PUSH6

3

Place 6 byte item on stack

PUSH7

3

Place 7 byte item on stack

PUSH8

3

Place 8 byte item on stack

PUSH9

3

Place 9 byte item on stack

PUSH10

3

Place 10 byte item on stack

PUSH11

3

Place 11 byte item on stack

PUSH12

3

Place 12 byte item on stack

PUSH13

3

Place 13 byte item on stack

PUSH14

3

Place 14 byte item on stack

PUSH15

3

Place 15 byte item on stack

PUSH16

3

Place 16 byte item on stack

PUSH17

3

Place 17 byte item on stack

PUSH18

3

Place 18 byte item on stack

PUSH19

3

Place 19 byte item on stack

PUSH20

3

Place 20 byte item on stack

PUSH21

3

Place 21 byte item on stack

PUSH22

3

Place 22 byte item on stack

PUSH23

3

Place 23 byte item on stack

PUSH24

3

Place 24 byte item on stack

PUSH25

3

Place 25 byte item on stack

PUSH26

3

Place 26 byte item on stack

PUSH27

3

Place 27 byte item on stack

PUSH28

3

Place 28 byte item on stack

PUSH29

3

Place 29 byte item on stack

PUSH30

3

Place 30 byte item on stack

PUSH31

3

Place 31 byte item on stack

PUSH32

3

Place 32 byte (full word) item on stack

DUP1

3

Duplicate 1st stack item

| Since | Group |
| --- | --- |
| Frontier | Duplication Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `value`: value to duplicate.

## Stack output

1.  `value`: duplicated value.
2.  `value`: original value.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `1` | `1` |
| `2` |  | `1` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27zSet%20styPUSH1%201~~zDuplicyDUP1%27~%5Cnz%2F%2F%20yate~%01yz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   Stack overflow.

DUP2

3

Duplicate 2nd stack item

DUP3

3

Duplicate 3rd stack item

DUP4

3

Duplicate 4th stack item

DUP5

3

Duplicate 5th stack item

DUP6

3

Duplicate 6th stack item

DUP7

3

Duplicate 7th stack item

DUP8

3

Duplicate 8th stack item

DUP9

3

Duplicate 9th stack item

DUP10

3

Duplicate 10th stack item

DUP11

3

Duplicate 11th stack item

DUP12

3

Duplicate 12th stack item

DUP13

3

Duplicate 13th stack item

DUP14

3

Duplicate 14th stack item

DUP15

3

Duplicate 15th stack item

DUP16

3

Duplicate 16th stack item

SWAP1

3

Exchange 1st and 2nd stack items

| Since | Group |
| --- | --- |
| Frontier | Exchange Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Stack input

1.  `a`: value to swap.
2.  `b`: value to swap.

## Stack output

1.  `b`: swapped value.
2.  `a`: swapped value.

## Example

|  | Input | Output |
| --- | --- | --- |
| `1` | `1` | `2` |
| `2` | `2` | `1` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27zet%20statey2y1~~zwap~SWAP1%27~%5Cnz%2F%2F%20Sy~PUSH1%20%01yz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

SWAP2

3

Exchange 1st and 3rd stack items

SWAP3

3

Exchange 1st and 4th stack items

SWAP4

3

Exchange 1st and 5th stack items

SWAP5

3

Exchange 1st and 6th stack items

SWAP6

3

Exchange 1st and 7th stack items

SWAP7

3

Exchange 1st and 8th stack items

SWAP8

3

Exchange 1st and 9th stack items

SWAP9

3

Exchange 1st and 10th stack items

SWAP10

3

Exchange 1st and 11th stack items

SWAP11

3

Exchange 1st and 12th stack items

SWAP12

3

Exchange 1st and 13th stack items

SWAP13

3

Exchange 1st and 14th stack items

SWAP14

3

Exchange 1st and 15th stack items

SWAP15

3

Exchange 1st and 16th stack items

SWAP16

3

Exchange 1st and 17th stack items

LOG0

375

Append log record with no topics

| Since | Group |
| --- | --- |
| Frontier | Logging Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

This instruction has no effect on the EVM state. See [here](https://ethereum.org/en/developers/docs/smart-contracts/anatomy/#events-and-logs).

## Stack input

1.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes.
2.  `size`: byte size to copy.

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Gas

```
static_gas = 375
dynamic_gas = 375 * topic_count + 8 * size + memory_expansion_cost
```

For LOG0, `topic_count` is 0. The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 375

LOG1

750

Append log record with one topic

LOG2

1125

offset

size

topic1

topic2

Append log record with two topics

| Since | Group |
| --- | --- |
| Frontier | Logging Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

This instruction has no effect on the EVM state. See [here](https://ethereum.org/en/developers/docs/smart-contracts/anatomy/#events-and-logs).

## Stack input

1.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes.
2.  `size`: byte size to copy.
3.  `topic1`: 32-byte value.
4.  `topic2`: 32-byte value.

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Dynamic gas

```
static_gas = 375
dynamic_gas = 375 * topic_count + 8 * size + memory_expansion_cost
```

For LOG2, `topic_count` is 2. The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 1125

LOG3

1500

offset

size

topic1

topic2

topic3

Append log record with three topics

LOG4

1875

offset

size

topic1

topic2

topic3

topic4

Append log record with four topics

| Since | Group |
| --- | --- |
| Frontier | Logging Operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

This instruction has no effect on the EVM state. See [here](https://ethereum.org/en/developers/docs/smart-contracts/anatomy/#events-and-logs).

## Stack input

1.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes.
2.  `size`: byte size to copy.
3.  `topic1`: 32-byte value.
4.  `topic2`: 32-byte value.
5.  `topic3`: 32-byte value.
6.  `topic4`: 32-byte value.

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Dynamic gas

```
static_gas = 375
dynamic_gas = 375 * topic_count + 8 * size + memory_expansion_cost
```

For LOG4, `topic_count` is 4. The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 1875

CREATE

32000

Create a new account with associated code

| Since | Group |
| --- | --- |
| Frontier | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Creates a new contract. Enters a new sub [context](https://www.evm.codes/about) of the calculated destination address and executes the provided initialisation code, then resumes the current context.

Should deployment succeed, the new account's [code](https://www.evm.codes/about) is set to the [return data](https://www.evm.codes/about) resulting from executing the initialisation code.

The destination address is calculated as the rightmost 20 bytes (160 bits) of the Keccak-256 hash of the rlp encoding of the sender address followed by its nonce. That is:

```
address = keccak256(rlp([sender_address,sender_nonce]))[12:]
```

Deployment can fail due to:

-   Insufficient value to send.
-   Sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD).
-   Insufficient gas to execute the initialisation code.
-   Call depth limit reached.

Note that these failures only affect the return value and do not cause the calling context to revert (unlike the error cases below).

## Stack input

1.  `value`: value in [wei](https://www.investopedia.com/terms/w/wei.asp) to send to the new account.
2.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the initialisation code for the new account.
3.  `size`: byte size to copy (size of the initialisation code).

## Stack output

1.  `address`: the address of the deployed contract, 0 if the deployment failed.

## Examples

[See in playground](https://www.evm.codes/playground?callValue=9&unit=Wei&codeType=Mnemonic&code=%27z0q0f9q9f0y4%20FFmslk3%200x63FFFFFFFF60005260046000F3jvMSTORE~13jjp%20%27~k%20z%2F%2F%20Createmnmccountgith%20ygeimnd%20v%5Cnqynoljj~pvCREATEm%20al%20codekvPUSH1j~0g%20wfpvvz%01fgjklmpqvyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Gas

```
code_deposit_cost = 200 * deployed_code_size

static_gas = 32000
dynamic_gas = memory_expansion_cost + deployment_code_execution_cost + code_deposit_cost
```

The `deployment_code_execution_cost` is the cost of whatever opcode is run to deploy the new contract. On top of that, there is an additional cost for storing the code of the new contract, shown as `code_deposit_cost`. The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The new contract address is added in the warm addresses. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Estimated deployment execution cost

Estimated deployed code size in bytes

Static gas + dynamic gas = 32000

CALL

100

gas

address

value

argsOffset

argsSize

retOffset

retSize

Message-call into an account

| Since | Group |
| --- | --- |
| Frontier | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Creates a new sub [context](https://www.evm.codes/about) and execute the [code](https://www.evm.codes/about) of the given account, then resumes the current one. Note that an account with no code will return success as true.

If the size of the [return data](https://www.evm.codes/about) is not known, it can also be retrieved after the call with the instructions [RETURNDATASIZE](https://www.evm.codes/#3D) and [RETURNDATACOPY](https://www.evm.codes/#3E) (since the Byzantium fork).

From the Tangerine Whistle fork, `gas` is capped at all but one 64th (`remaining_gas / 64`) of the remaining gas of the current context. If a call tries to send more, the `gas` is changed to match the maximum allowed.

## Stack input

1.  `gas`: amount of gas to send to the sub [context](https://www.evm.codes/about) to execute. The gas that is not used by the sub context is returned to this one.
2.  `address`: the account which [context](https://www.evm.codes/about) to execute.
3.  `value`: [value](https://www.evm.codes/#34) in [wei](https://www.investopedia.com/terms/w/wei.asp) to send to the account.
4.  `argsOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the [calldata](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
5.  `argsSize`: byte size to copy (size of the [calldata](https://www.evm.codes/about)).
6.  `retOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, where to store the [return data](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
7.  `retSize`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Stack output

1.  `success`: return 0 if the sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD), 1 otherwise.

## Examples

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27breate%20aYontracWthatYreateVaQexceptioQif%20firsWword%20ofj%20isq_17qx67Z035Z757FE5BZ052Z86018F3gzMSTORE~17~15gzCREATEy%20parameterskqgggX6vynqjkVsuccessgg~32X7v%27~_1%20z%5Cnyzzball%20with%20nov_2qxFFFFzCALLq%200k%2C%20returnjYalldatag~0b%2F%2F%20C_zPUSHZ600Y%20cXggzDUPWt%20Vs%20Qn%20%01QVWXYZ_bgjkqvyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) and the [value](https://www.evm.codes/#34) (stack index 2) is not 0 (since Byzantium fork).

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost + code_execution_cost + address_access_cost + positive_value_cost + value_to_empty_account_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The different costs are:

-   `code_execution_cost` is the cost of the called code execution (limited by the `gas` parameter).
-   If `address` is warm, then `address_access_cost` is 100, otherwise it is 2600. See section [access sets](https://www.evm.codes/about).
-   If `value` is not 0, then `positive_value_cost` is 9000. In this case there is also a call stipend that is given to make sure that a basic fallback function can be called. 2300 is thus removed from the cost, and also added to the `gas` input.
-   If `value` is not 0 and the `address` given points to an empty account, then `value_to_empty_account_cost` is 25000. An account is empty if its balance is 0, its nonce is 0 and it has no code.

## Estimate your gas cost

State: current memory size

State: 'address' is cold?

YesNo

State: is the called account empty?

YesNo

Static gas + dynamic gas = 100

CALLCODE

100

gas

address

value

argsOffset

argsSize

retOffset

retSize

Message-call into this account with alternative account’s code

| Since | Group |
| --- | --- |
| Frontier | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Creates a new sub [context](https://www.evm.codes/about) as if calling itself, but with the [code](https://www.evm.codes/about) of the given account. In particular the [storage](https://www.evm.codes/about) remains the same. Note that an account with no code will return success as true.

If the size of the [return data](https://www.evm.codes/about) is not known, it can also be retrieved after the call with the instructions [RETURNDATASIZE](https://www.evm.codes/#3D) and [RETURNDATACOPY](https://www.evm.codes/#3E) (since the Byzantium fork).

From the Tangerine Whistle fork, `gas` is capped at all but one 64th (`remaining_gas / 64`) of the remaining gas of the current context. If a call tries to send more, the `gas` is changed to match the maximum allowed.

## Stack input

1.  `gas`: amount of gas to send to the sub [context](https://www.evm.codes/about) to execute. The gas that is not used by the sub context is returned to this one.
2.  `address`: the account which [code](https://www.evm.codes/about) to execute.
3.  `value`: [value](https://www.evm.codes/#34) in [wei](https://www.investopedia.com/terms/w/wei.asp) to send to the account.
4.  `argsOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the [calldata](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
5.  `argsSize`: byte size to copy (size of the [calldata](https://www.evm.codes/about)).
6.  `retOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, where to store the [return data](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
7.  `retSize`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Stack output

1.  `success`: return 0 if the sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD), 1 otherwise.

## Examples

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27kCreatXa%20VvthavcreateNaWexceptioWif%20Zofjisb_17bx67Y054Y757FE5BY052Y86018F3JMSTORE~17~15JCREATzm0dddQ6qyykSevZiWthXcurrenvVt~1JSSTORz%27%3Am1dd~32Q7q%27~_1%20zEyykCall%20withjK0%20y%5Cnvt%20q_2bxFFFFyCALLCODEm%3Db%2C%20returnNk%2F%2F%20j%20storagXd~0b%200_yPUSHZfirsvKY600Xe%20Wn%20VcontracQdJDUPNs%20KslovJdy%01JKNQVWXYZ_bdjkmqvyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost + code_execution_cost + address_access_cost + positive_value_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The different costs are:

-   `code_execution_cost` is the cost of the called code execution (limited by the `gas` parameter).
-   If `address` is warm, then `address_access_cost` is 100, otherwise it is 2600. See section [access sets](https://www.evm.codes/about).
-   If `value` is not 0, then `positive_value_cost` is 9000. In this case there is also a call stipend that is given to make sure that a basic fallback function can be called. 2300 is thus removed from the cost, and also added to the `gas` input.

## Estimate your gas cost

State: current memory size

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

RETURN

0

Halt execution returning output data

| Since | Group |
| --- | --- |
| Frontier | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Exits the current [context](https://www.evm.codes/about) successfully.

## Stack input

1.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, to copy what will be the [return data](https://www.evm.codes/about) of this [context](https://www.evm.codes/about).
2.  `size`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Example

| `1` | Memory |
| --- | --- |
| `1` | `0xFF01` |

|  | Input |
| --- | --- |
| `1` | `0` |
| `1` | `2` |

| `1` | Calling context return data |
| --- | --- |
| `1` | `0xFF01` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27wSet%20the%20statev32%200xFF01uuuuuz0yMSTOREyywExamplez2z0yRETURN%27~000000zv1%20y%5Cnw%2F%2F%20vyPUSHu~~%01uvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 0

DELEGATECALL

100

gas

address

argsOffset

argsSize

retOffset

retSize

Message-call into this account with an alternative account’s code, but persisting the current values for sender and value

| Since | Group |
| --- | --- |
| Byzantium | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Creates a new sub [context](https://www.evm.codes/about) as if calling itself, but with the [code](https://www.evm.codes/about) of the given account. In particular the [storage](https://www.evm.codes/about), the current [sender](https://www.evm.codes/#33) and the current [value](https://www.evm.codes/#34) remain the same. Note that an account with no code will return success as true.

If the size of the [return data](https://www.evm.codes/about) is not known, it can also be retrieved after the call with the instructions [RETURNDATASIZE](https://www.evm.codes/#3D) and [RETURNDATACOPY](https://www.evm.codes/#3E) (since the Byzantium fork).

From the Tangerine Whistle fork, `gas` is capped at all but one 64th (`remaining_gas / 64`) of the remaining gas of the current context. If a call tries to send more, the `gas` is changed to match the maximum allowed.

## Stack input

1.  `gas`: amount of gas to send to the sub [context](https://www.evm.codes/about) to execute. The gas that is not used by the sub context is returned to this one.
2.  `address`: the account which [code](https://www.evm.codes/about) to execute.
3.  `argsOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the [calldata](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
4.  `argsSize`: byte size to copy (size of the [calldata](https://www.evm.codes/about)).
5.  `retOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, where to store the [return data](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
6.  `retSize`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Stack output

1.  `success`: return 0 if the sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD), 1 otherwise.

## Examples

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27kCreatXa%20VqthaqcreateNaWexceptioWif%20Zofjisd_17dx67Y054Y757FE5BY052Y86018F3QMSTORE~17~15QCREATzm0bbbJ5vyykSeqZiWthXcurrenqVt~1QSSTORz%27%3Am1bb~32J6v%27~_1%20zEyykCall%20withjK0%20y%5Cnv_2dxFFFFyDELEGATECALLqt%20m%3Dd%2C%20returnNk%2F%2F%20j%20storagXd%200b~0_yPUSHZfirsqKY600Xe%20Wn%20VcontracQbyNs%20KsloqJQDUP%01JKNQVWXYZ_bdjkmqvyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost + code_execution_cost + address_access_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The different costs are:

-   `code_execution_cost` is the cost of the called code execution (limited by the `gas` parameter).
-   If `address` is warm, then `address_access_cost` is 100, otherwise it is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

CREATE2

32000

Create a new account with associated code at a predictable address

| Since | Group |
| --- | --- |
| Constantinople | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Equivalent to [CREATE](https://www.evm.codes/#F0), except the salt allows the new contract to be deployed at a consistent, deterministic address.

Should deployment succeed, the account's [code](https://www.evm.codes/about) is set to the [return data](https://www.evm.codes/about) resulting from executing the initialisation code.

The destination address is calculated as follows:

```
initialisation_code = memory[offset:offset+size]
address = keccak256(0xff + sender_address + salt + keccak256(initialisation_code))[12:]
```

Deployment can fail due to:

-   A contract already exists at the destination address.
-   Insufficient value to transfer.
-   Sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD).
-   Insufficient gas to execute the initialisation code.
-   Call depth limit reached.

Note that these failures only affect the return value and do not cause the calling context to revert (unlike the error cases below).

## Stack input

1.  `value`: value in [wei](https://www.investopedia.com/terms/w/wei.asp) to send to the new account.
2.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the initialisation code of the new account.
3.  `size`: byte size to copy (size of the initialisation code).
4.  `salt`: 32-byte value used to create the new account at a deterministic address.

## Stack output

1.  `address`: the address of the deployed contract, 0 if the deployment failed.

## Examples

[See in playground](https://www.evm.codes/playground?callValue=9&unit=Wei&codeType=Mnemonic&code=%27z0NLjannoXrecVQfparameters%2C%20becausliXgeneratesfaddressLz9N~1_~9Zyyz0v4%20FFYskW3%200x63FFFFFFFF60005260046000F3~0yMSTORE~2~13q%27~W%20zjVanYccounXQ%20y%5Cnv%20weiYnd%20q_Zle%20k%20codej%2F%2F%20Cf%20thlsaml_~0~0ZyCREATE2Y%20aXt%20WyPUSH1VreatlQwithNvnokL_qyy%01LNQVWXYZ_fjklqvyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA).

## Gas

```
minimum_word_size = (size + 31) / 32
code_deposit_cost = 200 * deployed_code_size

static_gas = 32000
dynamic_gas = 6 * minimum_word_size + memory_expansion_cost + deployment_code_execution_cost + code_deposit_cost
```

The `deployment_code_execution_cost` is the cost of whatever opcode is run to deploy the new contract. On top of that, there is an additional cost for storing the code of the new contract, shown as `code_deposit_cost`. The difference with [CREATE](https://www.evm.codes/#F0) is an additional cost to hash the initialisation code before. The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The new contract address is added in the warm addresses. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Estimated deployment execution cost

Estimated deployed code size in bytes

Static gas + dynamic gas = 32000

STATICCALL

100

gas

address

argsOffset

argsSize

retOffset

retSize

Static message-call into an account

| Since | Group |
| --- | --- |
| Homestead | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Creates a new sub [context](https://www.evm.codes/about) and execute the [code](https://www.evm.codes/about) of the given account, then resumes the current one. Note that an account with no code will return success as true (1).

This instructions is equivalent to [CALL](https://www.evm.codes/#F1), except that it does not allow any state modifying instructions or sending ETH in the sub [context](https://www.evm.codes/about). The disallowed instructions are [CREATE](https://www.evm.codes/#F0), [CREATE2](https://www.evm.codes/#F5), [LOG0](https://www.evm.codes/#A0), [LOG1](https://www.evm.codes/#A1), [LOG2](https://www.evm.codes/#A2), [LOG3](https://www.evm.codes/#A3), [LOG4](https://www.evm.codes/#A4), [SSTORE](https://www.evm.codes/#55), [SELFDESTRUCT](https://www.evm.codes/#FF) and [CALL](https://www.evm.codes/#F1) if the [value](https://www.evm.codes/#34) sent is not 0.

If the size of the [return data](https://www.evm.codes/about) is not known, it can also be retrieved after the call with the instructions [RETURNDATASIZE](https://www.evm.codes/#3D) and [RETURNDATACOPY](https://www.evm.codes/#3E) (since the Byzantium fork).

From the Tangerine Whistle fork, `gas` is capped at all but one 64th (`remaining_gas / 64`) of the remaining gas of the current context. If a call tries to send more, the `gas` is changed to match the maximum allowed.

## Stack input

1.  `gas`: amount of gas to send to the sub [context](https://www.evm.codes/about) to execute. The gas that is not used by the sub context is returned to this one.
2.  `address`: the account which [context](https://www.evm.codes/about) to execute.
3.  `argsOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, the [calldata](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
4.  `argsSize`: byte size to copy (size of the [calldata](https://www.evm.codes/about)).
5.  `retOffset`: byte offset in the [memory](https://www.evm.codes/about) in bytes, where to store the [return data](https://www.evm.codes/about) of the sub [context](https://www.evm.codes/about).
6.  `retSize`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Stack output

1.  `success`: return 0 if the sub [context](https://www.evm.codes/about) [reverted](https://www.evm.codes/#FD), 1 otherwise.

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost + code_execution_cost + address_access_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

The different costs are:

-   `code_execution_cost` is the cost of the called code execution (limited by the `gas` parameter).
-   If `address` is warm, then `address_access_cost` is 100, otherwise it is 2600. See section [access sets](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 100

REVERT

0

Halt execution reverting state changes but returning data and remaining gas

| Since | Group |
| --- | --- |
| Byzantium | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

Stop the current context execution, revert the state changes (see [STATICCALL](https://www.evm.codes/#FA) for a list of state changing opcodes) and return the unused gas to the caller. It also reverts the gas refund to its value before the current context. If the execution is stopped with REVERT, the value 0 is put on the stack of the calling context, which continues to execute normally. The [return data](https://www.evm.codes/about) of the calling context is set as the given chunk of memory of this context.

## Stack input

1.  `offset`: byte offset in the [memory](https://www.evm.codes/about) in bytes. The return data of the calling context.
2.  `size`: byte size to copy (size of the [return data](https://www.evm.codes/about)).

## Example

| `1` | Memory |
| --- | --- |
| `1` | `0xFF01` |

|  | Input |
| --- | --- |
| `1` | `0` |
| `1` | `2` |

| `1` | Calling context return data |
| --- | --- |
| `1` | `0xFF01` |

[Reproduce in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27wSet%20the%20statev32%200xFF01uuuuuz0yMSTOREyywExamplez2z0yREVERT%27~000000zv1%20y%5Cnw%2F%2F%20vyPUSHu~~%01uvwyz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.

## Gas

```
static_gas = 0
dynamic_gas = memory_expansion_cost
```

The memory expansion cost explanation can be found [here](https://www.evm.codes/about).

## Estimate your gas cost

State: current memory size

Static gas + dynamic gas = 0

INVALID

NaN

Designated invalid instruction

| Since | Group |
| --- | --- |
| Homestead | System operations |

## Notes

Equivalent to any other opcode not present in this reference, but guaranteed to remain an invalid instruction. Equivalent to [REVERT](https://www.evm.codes/#FD) (since Byzantium fork) with 0,0 as stack parameters, except that all the gas given to the current context is consumed.

## Gas

All the remaining gas in this context is consumed.

## Estimate your gas cost

State: remaining gas in the current context

Static gas + dynamic gas = 0

SELFDESTRUCT

5000

Halt execution and register account for later deletion

| Since | Group |
| --- | --- |
| Frontier | System operations |

_Index 1 is top of the stack. See [PUSH](https://www.evm.codes/#60)._

## Notes

The current account is registered to be destroyed, and will be at the end of the current transaction. The transfer of the current balance to the given account cannot fail. In particular, the destination account code (if any) is not executed, or, if the account does not exist, the balance is still added to the given address.

## Stack input

1.  `address`: account to send the current balance to (see [BALANCE](https://www.evm.codes/#31) or [SELFBALANCE](https://www.evm.codes/#47) since Istanbul fork).

## Example

[See in playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27ureatekcvhagwrites%20inkslotq14bx64p1p055p052p5601BF3jzMSTORE~14~18jzCREATEzzuvries%20to%20modify%20state%2C%20failsjjjjzDUP5q2bxFFFFzSTATICCALL%27~q1%20z%5Cnvontracgtu%2F%2F%20CqzPUSHp600k%20a%20j~0gt%20b%200%01bgjkpquvz~_).

## Error cases

The state changes done by the current context are [reverted](https://www.evm.codes/#FD) in those cases:

-   Not enough gas.
-   Not enough values on the stack.
-   The current execution context is from a [STATICCALL](https://www.evm.codes/#FA) (since Byzantium fork).

## Gas

The static gas is 5000. If a positive balance is sent to an empty account, the dynamic gas is 25000. An account is empty if its balance is 0, its nonce is 0 and it has no code. Additionaly, if `address` is cold, there is an additional dynamic cost of 2600. See section [access sets](https://www.evm.codes/about). There is no additional cost otherwise.

## Estimate your gas cost

State: is the current account balance empty?

YesNo

State: is the beneficiary account empty?

YesNo

State: 'address' is cold?

YesNo

Static gas + dynamic gas = 5000
