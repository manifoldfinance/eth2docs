---
title: Setting up
description: Inital clean setup
---

## Overview

via cURL
```bash
curl -sfL https://raw.githubusercontent.com/alajmo/sake/main/install.sh | sh
sake completion bash
```

via Homebrew
```bash
brew tap alajmo/sake
brew install sake
sake completion bash
```

### Quickstart

```console
usr:~ $ sake init

Initialized sake in /tmp/sake
- Created sake.yaml

Following servers were added to sake.yaml

 Server    | Host
-----------+---------
 localhost | 0.0.0.0
```

### Commands

```console
# List all servers
usr:~ $ sake list servers

 Server    | Host
-----------+---------
 localhost | 0.0.0.0
````

#### List all tasks
```console
usr:~ $ sake list tasks

 Task | Description
------+-------------
 ping | Pong
```

#### Run Task
```console
usr:~ $ sake run ping --all

TASK ping: Pong ************

0.0.0.0 | pong
```

#### Count number of files in each servers in parallel
```console
usr:~ $ sake exec --all --output table --parallel 'find . -type f | wc -l'

 Server    | Output
-----------+--------
 localhost | 1
```

### Recipes 

::: info More Recipes

See [sakecli.com/recipes](https://sakecli.com/recipes)

:::

