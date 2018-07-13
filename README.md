# Api beta v1.0

Epocum's API v1.0 folder MAP and use's specification

## Table of Contents

*   [Introduction](#introduction)
*   [Folder map](#folder-map)
*   [Documentation](#documentation)
*   [Licence](#license)

## Introduction

The API 

We wrote all in Javascript and NodeJs.

## Folder map

This software suite is composed of the following components:

```
├── Epocum                <- Top-level
│   ├── API               <- API
│   ├── Dapp              <- Decentralized app
│   │   ├── assets        <- 
│   │   ├── css           <-
│   │   └── js        	  <-
│   │   └── plugins       <-
│   │   └── scss          <-
│   ├── node_modules      <- Node js dependencies folder
│   │   ├──.......
│   └── resource          <- External resource
    └── db                <- local mongodb blockchain
```
# Documentation

Epocum's API service enable users with local node installed to get information reguarding decentralized links and smartsharing contract generated from the same platform.

## API local endpoint

http://localhost:88

## API with NO parameter

/get_webchain
	
/get_smartchain

## API with END parameter

/getListConnectionsFromPost/:ipfsHash

/getNumConnectionsFromPost/:ipfsHash

/getCurrentTarget/:SmartSharingContractHash


The response are in json standard mode.

Example:

http://localhost:88/get_webchain

[{"_id":"xxxxxxxxxxxxxxx","ip":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","website":"https://www.somewebsite.com/","ipfs":"QmQxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","browser":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}]

## License

The Epocum software suite is licensed under the terms of the Apache License 2.0.
