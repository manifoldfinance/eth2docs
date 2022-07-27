---
title: Getting started on the Kiln test network
sidebar_position: 2
description: A mid-level summary of getting started on the Kiln test network
---

# How to run a node on Kiln

> [source, https://notes.ethereum.org/@launchpad/kiln](https://notes.ethereum.org/@launchpad/kiln)

## Who is this guide for?

This guide is meant to be a starting location and its a mid level summary of the required steps. It is not meant to be a beginners guide, chances are copying and running commands from here will not work, some tweaking might be needed. We see this as a guide for people making better guides :)

The mentioned better guides, especially for beginners can be found here:

-   EthereumOnARM (Run any client on a raspberry pi or using an AWS AMI): [here](https://ethereum-on-arm-documentation.readthedocs.io/en/latest/kiln/kiln-testnet.html#)
-   EthDocker: [here](https://github.com/eth-educators/eth-docker/tree/merge)
-   Geth + Lighthouse: [here](https://github.com/remyroy/ethstaker/blob/main/merge-devnet.md)
-   Minimalist Geth + Teku: [here](https://github.com/chrishobcroft/TestingTheMerge/blob/main/geku.md)
-   Geth + Teku: [here](https://agstakingco.gitbook.io/kiln-testnet-ethereum-staking-guide/) (Outdated info)
-   Geth + Prysm: [here](https://hackmd.io/@prysmaticlabs/B1Q2SluWq)
-   Geth/Nethermind + Lodestar:[](https://hackmd.io/@philknows/By5qahdZc)

## What’s new in Kiln?

One of the newest features on Kiln is the introduction of a separate Execution Endpoint API port as well as authentication for the port. The beacon node and execution nodes use JWT authentication to communicate with each other. To achieve this, we can either store the authentication token as a file or pass it as a CLI parameter. We will rely on the file method for this guide. If you’re curious, you can find the specs [here](https://hackmd.io/@n0ble/kiln-spec).

## Which version/branch do I use?

Consensus layer

| client name | git branch | docker image |
| --- | --- | --- |
| Lighthouse | unstable | sigp/lighthouse:latest-unstable |
| Teku | master | consensys/teku:develop |
| Lodestar | master | chainsafe/lodestar:next |
| Nimbus | kiln-dev-auth | parithoshj/nimbus:merge-376e15a |
| Prysm | develop | [gcr.io/prysmaticlabs/prysm/beacon-chain:latest,gcr.io/prysmaticlabs/prysm/validator:latest](http://gcr.io/prysmaticlabs/prysm/beacon-chain:latest,gcr.io/prysmaticlabs/prysm/validator:latest) |

Execution layer

| client name | git branch | docker image |
| --- | --- | --- |
| Geth | master | parithoshj/geth:master |
| Nethermind | kiln | nethermindeth/nethermind:kiln\_0.11 |
| Erigon | devel | parithoshj/erigon:merge-280204b |
| Besu | main | hyperledger/besu:22.4.1 |

## Preparation

-   Download the configs from [https://github.com/eth-clients/merge-testnets/tree/main/kiln](https://github.com/eth-clients/merge-testnets/tree/main/kiln).

```bash
git clone https://github.com/eth-clients/merge-testnets.git
cd merge-testnets/kiln 
```

-   Generate the JWT secret with `openssl rand -hex 32 | tr -d "\n" > "/tmp/jwtsecret"`. This file needs to be passed to both the Execution Client and the Consensus Client.

## Run an Execution Layer Client

### Geth

We need to download and install geth

Pre-requisites: `git`, `make`, `go`, `gcc`.

(use geth branch `master` from [github.com/ethereum/go-ethereum](http://github.com/ethereum/go-ethereum))

```bash
git clone -b master https://github.com/ethereum/go-ethereum.git
cd go-ethereum 
make geth
cd ..
```

In the `kiln` folder

```bash
./go-ethereum/build/bin/geth init genesis.json  --datadir "geth-datadir"
./go-ethereum/build/bin/geth --datadir "geth-datadir" --http --http.api="engine,eth,web3,net,debug" --ws --ws.api="engine,eth,web3,net,debug" --http.corsdomain "*" --networkid=1337802 --syncmode=full --authrpc.jwtsecret=/tmp/jwtsecret --bootnodes "enode://c354db99124f0faf677ff0e75c3cbbd568b2febc186af664e0c51ac435609badedc67a18a63adb64dacc1780a28dcefebfc29b83fd1a3f4aa3c0eb161364cf94@164.92.130.5:30303" console
```

### Nethermind

Clone and build the `kiln` branch of Nethermind

```bash
git clone --recursive -b kiln https://github.com/NethermindEth/nethermind.git
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```

In the `kiln/nethermind/src/Nethermind/` folder

```bash
cd Nethermind.Runner
dotnet run -c Release -- --config kiln --JsonRpc.Host=0.0.0.0 --JsonRpc.JwtSecretFile=/tmp/jwtsecret
```

### EthereumJS

Please ensure you have `Node 12.x+` installed.

Clone and build from source

```bash
git clone --depth 1 --branch master https://github.com/ethereumjs/ethereumjs-monorepo.git
cd ethereumjs-monorepo
npm i
```

Start the client

```bash
cd packages/client
npm run client:start -- --datadir ethereumjs-datadir --gethGenesis ../../../genesis.json --saveReceipts --rpc --rpcport=8545 --ws --rpcEngine --rpcEnginePort=8551 --bootnodes=165.232.180.230:30303
```

This will create a secret in `ethereumjs-datadir/jwtsecret`, you will need to provide this secret to the CL client.

### Erigon

```bash
git clone https://github.com/ledgerwatch/erigon
cd erigon
make erigon rpcdaemon
## download genesis file
wget https://raw.githubusercontent.com/eth-clients/merge-testnets/main/kiln/genesis.json
## Initialize database
./build/bin/erigon init --datadir=kiln-devnet genesis.json
## run Erigon
./build/bin/erigon --datadir kiln-devnet  --bootnodes="enode://c354db99124f0faf677ff0e75c3cbbd568b2febc186af664e0c51ac435609badedc67a18a63adb64dacc1780a28dcefebfc29b83fd1a3f4aa3c0eb161364cf94@164.92.130.5:30303,enode://d41af1662434cad0a88fe3c7c92375ec5719f4516ab6d8cb9695e0e2e815382c767038e72c224e04040885157da47422f756c040a9072676c6e35c5b1a383cce@138.68.66.103:30303" --networkid=1337802 --http --http.api=engine,net,eth
```

After starting the client, you will be able to interact with the client using the following ports:

-   localhost:8545: Web3 json rpc
-   localhost:8550: Engine json rpc
-   localhost:8551: Engine json rpc with json rpc authentication
-   `jwt.hex` in the repository where you ran the rpcdaemon: verification key for JWT authentication

### Besu

Support for kiln is baked into the besu `main` branch. If you want to use pre-built binaries, you can get the current [22.4.1 besu snapshot artifact](https://hyperledger.jfrog.io/ui/native/besu-binaries/besu/22.4.1-SNAPSHOT/), or use the docker image `hyperledger/besu:22.1.2-SNAPSHOT`.

Otherwise if you want to build from source, clone the repo and build besu:

```bash
git clone --recursive  https://github.com/hyperledger/besu.git
cd besu
./gradlew installDist # installs in build/install/besu
# Alternatively, using Docker: 
# ./gradlew distDocker # build and tags a docker image
```

To run besu as an execution client on kiln:

```bash
build/install/besu/bin/besu   \
  --network=kiln              \
  --rpc-http-enabled=true     \
  --rpc-http-host="0.0.0.0"   \
  --rpc-http-cors-origins="*" \
  --rpc-ws-enabled=true       \
  --rpc-ws-host="0.0.0.0"     \
  --host-allowlist="*"        \
  --engine-host-allowlist="*" \
  --engine-jwt-enabled=true   \
  --engine-jwt-secret=<path_to_your_JWT_secret_file>
```

For EL/CL docker configurations, refer to [these examples](https://github.com/garyschulte/besugi.git)

## Run a Consensus Layer Client

### Lighthouse

Minimum requirement: `rustc 1.59.0`

Clone and build from source (use branch `unstable`)

```bash
git clone -b unstable https://github.com/sigp/lighthouse.git
cd lighthouse
make
cd ..
```

Start the client

```bash
lighthouse \
          --spec mainnet \
          --network kiln \
          --debug-level info \
          beacon_node \
          --datadir ./testnet-lh1 \
          --eth1 \
          --http \
          --http-allow-sync-stalled \
          --metrics \
          --merge \
          --execution-endpoints http://127.0.0.1:8551 \
          --enr-udp-port=9000 \
          --enr-tcp-port=9000 \
          --discovery-port=9000 \
          --jwt-secrets="/tmp/jwtsecret" \
          --suggested-fee-recipient=<enter-eth-address-here>
```

### Lodestar

Clone and build the client

```bash
git clone https://github.com/chainsafe/lodestar.git
cd lodestar
yarn install --ignore-optional
yarn run build
cd ..
```

Start the

```bash
cd lodestar
./lodestar beacon --rootDir="../lodestar-beacondata" --paramsFile="../config.yaml" --genesisStateFile="../genesis.ssz"  --eth1.enabled=true --execution.urls="http://127.0.0.1:8551" --network.connectToDiscv5Bootnodes --network.discv5.enabled=true --jwt-secret="/tmp/jwtsecret" --network.discv5.bootEnrs="enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk"
```

### Teku

Ensure Java 11 or above is installed (Ubuntu: `sudo apt install default-jre`).

```
git clone https://github.com/ConsenSys/teku.git
cd teku
./gradlew installDist
cd ..
```

The teku executable is now available in `./teku/build/install/teku/bin/teku`. You can also use the [pre-built distribution](https://artifacts.consensys.net/public/teku/raw/names/teku.tar.gz/versions/develop/teku-develop.tar.gz) or the `consensys/teku:develop` docker image.

Start the client

```bash
./teku/build/install/teku/bin/teku \
  --data-path "datadir-teku" \
  --network kiln \
  --p2p-discovery-bootnodes "enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk" \
  --ee-endpoint http://localhost:8551 \
  --Xee-version kilnv2 \
  --ee-jwt-secret-file "/tmp/jwtsecret" \
  --log-destination console \
  --validators-proposer-default-fee-recipient=<Enter-eth-address-here>
```

### [](https://notes.ethereum.org/@launchpad/kiln#Prysm "Prysm")Prysm

```bash
git clone -b develop https://github.com/prysmaticlabs/prysm.git
cd prysm
bazel build //beacon-chain:beacon-chain
cd ..
```

Start the client

```
cd prysm
bazel run //beacon-chain -- \
--genesis-state $genesis_state_path \
--datadir $db_path  \
--http-web3provider=$execution_server  \
--execution-provider=http://localhost:8551  \
--chain-config-file=$config_path \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```

### [](https://notes.ethereum.org/@launchpad/kiln#Nimbus "Nimbus")Nimbus

Pre-requisites: `git`, `make`, `gcc`.

Ensure that the websocket related flags (`--ws`) are present on your EL (e.g: Geth). Nethermind enables websockets by default.

Clone and build from source (use branch `kiln-dev-auth`)

```
git clone --branch=kiln-dev-auth https://github.com/status-im/nimbus-eth2.git
cd nimbus-eth2
make update OVERRIDE=1
make nimbus_beacon_node
cd ..
```

Start the client

```
nimbus-eth2/build/nimbus_beacon_node \
    --network=merge-testnets/kiln \
    --web3-url=ws://127.0.0.1:8551 \
    --rest \
    --metrics \
    --log-level=DEBUG \
    --terminal-total-difficulty-override=20000000000000 \
    --jwt-secret="/tmp/jwtsecret"
```
