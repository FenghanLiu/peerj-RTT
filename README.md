## A novel privacy protection method of residents’ travel trajectories based on Federated Blockchain and InterPlanetary File System in Smart City

We provide two folders, the specific project contents are located in the RTT folder, and the Installation tools contain the installation packages we need.

### Preliminary Preparation

- Interplanetary File System (IPFS)

- Hyperledger Fabric

- Docker

- Docker Compose

- Node.js

- NPM

- NVM

We have provided download packages for IPFS and NVM in the installation tools folder, and the rest are available for download at the following addresses

**Docker and Docker Compose**

Project website: https://docs.docker.com/install/linux/docker-ce/ubuntu/ (Docker)\
Project website: https://docs.docker.com/compose/install/ (Docker Compose)

**Node.js, NPM**

Project website: https://nodejs.org/en/ (Node.js)\
Project website: https://www.npmjs.com/ (NPM)



**Hyperledger Fabric**

Project website: https://www.hyperledger.org/projects/fabric

（The version of Hyperledger Fabric used is 1.4.0）

### Running the project

- Initiating network deployment chain code

  Start Network
  
  Install the chain code: copy the chain code into the peer node This is executed in the project directory
  
  Install the chain code on the peer node
  
  Instantiate the chain code on the peer node

```
./byfn.sh up
```
  
 ```
docker cp -a PTTChaincodes/ cli:/opt/gopath/src/github.com/hyperledger/fabric/peer

docker exec -it cli peer chaincode install -l "node" -n airmed -p /opt/gopath/src/github.com/hyperledger/fabric/peer/PTTChaincodes/chaincode -v v1

docker exec -it cli peer chaincode instantiate -C mychannel -l "node" -n airmed -v v1 -c '{"Args":[]}' -o orderer.example.com:7050 --tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem
```
- Start Datastore
  
```
docker-compose up
```

- The command to empty the original database containes

```
docker-compose down -v
```

- Start ipfs

```
ipfs daemon &
```

- Run the  process

```
./init.sh
```

- Test tools
  
  Tape Installation and Deployment: https://github.com/Hyperledger-TWGC/tape
  Caliper Installation and Deployment: https://hyperledger.github.io/caliper/v0.5.0/fabric-tutorial/tutorials-fabric-existing/
  




