---
title: How to run a node on Ropsten
---

# How to run a node on Ropsten

## Who is this guide for?
This guide is meant as a starting point for users with some experience running nodes and validators. It is not meant to be a beginners guide, chances are copying and running commands from here will not work, some tweaking might be needed. We see this as a guide for people making better guides :)

The mentioned better guides, especially for beginners can be found here:
- EthDocker: [Here](https://www.reddit.com/r/ethstaker/comments/uzl500/get_ready_for_ropsten_testnet_with_ethdocker/)
- Coming soon!

## What &#39;s new in Ropsten?
The client behaviour in Ropsten is almost identical to [Kiln](https://blog.ethereum.org/2022/03/14/kiln-merge-testnet/). We mainly see some minor changes to the API.
To recap the [changes in Kiln](https://hackmd.io/@n0ble/kiln-spec): The introduction of a separate Execution Endpoint API port as well as authentication for that port. The beacon node and execution nodes use JWT authentication to communicate with each other. To achieve this, we can either store the authentication token as a file or pass it as a CLI parameter. We will rely on the file method for this guide. If you &#39;re curious, you can find the specs [here](https://github.com/ethereum/execution-apis/blob/2d8fe82fcc4e63f82501eb41819cb1a222ad6007/src/engine/authentication.md).



## Which version/branch do I use?

Consensus layer

| client name | git branch | docker image |
| ----------- | ---------- | ------------ |
| Lighthouse |unstable| sigp/lighthouse:latest-unstable|       |
| Teku    | master | consensys/teku:develop |     
| Lodestar   | master | chainsafe/lodestar:next |   
| Nimbus   | unstable | statusim/nimbus-eth2:multiarch-v22.5.1    |  
| Prysm    |    develop     |   gcr.io/prysmaticlabs/prysm/beacon-chain:latest,gcr.io/prysmaticlabs/prysm/validator:latest | 


Execution layer

| client name | git branch | docker image |
| ----------- | ---------- | ------------ |
 | Geth     |   master  |  ethereum/client-go:latest        | 
| Nethermind    | master | nethermind/nethermind:latest|
| Erigon      |  alpha  | thorax/erigon:v2022.05.07 |
| Besu        |    main     |  hyperledger/besu:22.4.2-SNAPSHOT    |
       



## Preparation

- Download the configs from https://github.com/eth-clients/merge-testnets/tree/main/ropsten-beacon-chain
```
cd /tmp
git clone https://github.com/eth-clients/merge-testnets.git
cd /tmp/merge-testnets/ropsten-beacon-chain 
```
- Generate the JWT secret with `openssl rand -hex 32 | tr -d &#34;\n &#34;&gt;&#34;/tmp/jwtsecret &#34;`. This file needs to be passed to both the Execution Client and the Consensus Client.

## Run an Execution Layer Client
### Geth 

We need to download and install geth 

Pre-requisites: `git`, `make`, `go`, `gcc`.

(use geth branch `master` from github.com/ethereum/go-ethereum)
```
git clone -b master https://github.com/ethereum/go-ethereum.git
cd go-ethereum 
make geth
cd ..
```

```
./go-ethereum/build/bin/geth --ropsten \
     --datadir &#34;geth-datadir &#34;\
     --http --http.api=&#34;eth,web3,net &#34;--http.vhosts=&#34;*&#34;--http.corsdomain &#34;*&#34;\
     --ws --ws.api=&#34;eth,web3,net &#34;\
     --override.terminaltotaldifficulty 100000000000000000000000 \
     --authrpc.jwtsecret=/tmp/jwtsecret --authrpc.vhosts=&#34;*&#34;\
     console
```

If you do not specify a JWT secret, then geth will automatically generate one for you. You will then have to specify this secret in the Consensus Layer client.

Note: In case the CL does not specify a virtual host when making the request, it will be rejected by geth unless `--authrpc.vhosts=&#34;*&#34;` has been set. Allowing wildcard virtual host matching on the _authenticated_ port is not a security concern. 

### Nethermind

Clone and build the `master` branch of Nethermind

```
git clone --recursive https://github.com/NethermindEth/nethermind.git
cd nethermind/src/Nethermind
dotnet build Nethermind.sln -c Release
```
In the `nethermind/src/Nethermind/` folder

```
cd Nethermind.Runner
dotnet run -c Release -- --config ropsten --JsonRpc.Host=0.0.0.0 --JsonRpc.JwtSecretFile=/tmp/jwtsecret
```


### Erigon

```
git clone -b alpha https://github.com/ledgerwatch/erigon
cd erigon
make erigon rpcdaemon

./build/bin/erigon --chain=ropsten --datadir ropsten-devnet --authrpc.jwtsecret=/tmp/jwtsecret --http --http.api=engine,net,eth
```

After starting the client, you will be able to interact with the client using the following ports:

* localhost:8545: Web3 json rpc
* localhost:8550: Engine json rpc
* localhost:8551: Engine json rpc with json rpc authentication

### Besu

Support for ropsten is baked into the besu `main` branch.  If you want to use pre-built binaries, you can get the current [22.4.2 besu snapshot artifact](https://hyperledger.jfrog.io/ui/native/besu-binaries/besu/22.4.2-SNAPSHOT/), or use the docker image `hyperledger/besu:22.4.1`.  

Otherwise if you want to build from source, clone the repo and build besu:

```
git clone --recursive  https://github.com/hyperledger/besu.git
cd besu
./gradlew installDist # installs in build/install/besu
# Alternatively, using Docker: 
# ./gradlew distDocker # build and tags a docker image
```

To run besu as an execution client on ropsten:
```
build/install/besu/bin/besu     \
  --network=ropsten             \
  --rpc-http-enabled=true       \
  --rpc-http-host=&#34;0.0.0.0 &#34;\
  --rpc-http-cors-origins=&#34;*&#34;\
  --rpc-ws-enabled=true         \
  --sync-mode=&#34;X_SNAP &#34;\
  --data-storage-format=&#34;BONSAI &#34;\
  --Xmerge-support=true         \
  --rpc-ws-host=&#34;0.0.0.0 &#34;\
  --host-allowlist=&#34;*&#34;\
  --engine-rpc-enabled=true     \
  --engine-host-allowlist=&#34;*&#34;\
  --engine-jwt-enabled=true     \
  --engine-jwt-secret=&lt;path_to_your_JWT_secret_file &gt;```


## Run a Consensus Layer Client
### Lighthouse

Minimum requirement: `rustc 1.59.0`

Clone and build from source (use branch `unstable`)
```
git clone -b unstable https://github.com/sigp/lighthouse.git
cd lighthouse
make
cd ..
```
Start the client
```
lighthouse \
          --spec mainnet \
          --network ropsten \
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
          --jwt-secrets=&#34;/tmp/jwtsecret &#34;\
          --suggested-fee-recipient=&lt;enter-eth-address-here &gt;\
```

### Lodestar
Clone and build the client
```
git clone https://github.com/chainsafe/lodestar.git
cd lodestar
yarn install --ignore-optional
yarn run build
cd ..
```
Start the client 
```
cd lodestar
./lodestar beacon --rootDir=&#34;../lodestar-beacondata &#34;--network=ropsten --eth1.enabled=true --execution.urls=&#34;http://127.0.0.1:8551 &#34;--network.connectToDiscv5Bootnodes --network.discv5.enabled=true --jwt-secret=&#34;/tmp/jwtsecret &#34;--network.discv5.bootEnrs=&#34;enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk &#34;```

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
```
./teku/build/install/teku/bin/teku \
  --data-path &#34;datadir-teku &#34;\
  --network ropsten \
  --ee-endpoint http://localhost:8551 \
  --ee-jwt-secret-file &#34;/tmp/jwtsecret &#34;\
  --log-destination console \
  --validators-proposer-default-fee-recipient=&lt;Enter-eth-address-here &gt;\
```

### Prysm
Please ensure you have the latest version of the configs! (Specified in the preparation step)
```
git clone -b develop https://github.com/prysmaticlabs/prysm.git
cd prysm
bazel build //beacon-chain:beacon-chain
cd ..
```
Start the client
```
cd prysm
bazel run //beacon-chain -- \
--genesis-state=/tmp/merge-testnets/ropsten-beacon-chain/genesis.ssz \
--chain-config-file=/tmp/merge-testnets/ropsten-beacon-chain/config.yaml \
--datadir $db_path  \
--suggested-fee-recipient=&lt;Enter-eth-address-here &gt;\
--http-web3provider=http://localhost:8551  \
--bootstrap-node=enr:-Iq4QMCTfIMXnow27baRUb35Q8iiFHSIDBJh6hQM5Axohhf4b6Kr_cOCu0htQ5WvVqKvFgY28893DHAg8gnBAXsAVqmGAX53x8JggmlkgnY0gmlwhLKAlv6Jc2VjcDI1NmsxoQK6S-Cii_KmfFdUJL2TANL3ksaKUnNXvTCv1tLwXs0QgIN1ZHCCIyk
--jwt-secret=/tmp/jwtsecret
```

### Nimbus

Pre-requisites: `git`, `make`, `gcc`.


Clone and build from source (use branch `unstable`)
```
git clone --branch=unstable https://github.com/status-im/nimbus-eth2.git
cd nimbus-eth2
make update OVERRIDE=1
make nimbus_beacon_node
cd ..
```

Start the client
```
nimbus-eth2/build/nimbus_beacon_node \
    --network=ropsten \
    --web3-url=http://127.0.0.1:8551 \
    --rest \
    --metrics \
    --jwt-secret=&#34;/tmp/jwtsecret &#34;```
