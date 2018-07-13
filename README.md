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
├── Epocum              <- Top-level
│   ├── db              <- local mongodb blockchain
│   ├── Dapp        <- Decentralized app
│   │   ├── csharp        <- C# wrapper
│   │   ├── java          <- Java wrapper
│   │   └── python        <- Python wrapper
│   ├── resource              <- Utilities needed by the constraint solver
│   ├── constraint_solver <- Constraint solver
│   │   ├── csharp        <- C# wrapper
│   │   ├── java          <- Java wrapper
│   │   └── python        <- Python wrapper
│   ├── sat               <- Sat solver
│   │   ├── csharp        <- C# wrapper
│   │   ├── java          <- Java wrapper
│   │   └── python        <- Python wrapper
│   ├── bop               <- Boolean solver based on SAT
│   ├── linear_solver     <- Linear solver wrapper
│   │   ├── csharp        <- C# wrapper
│   │   ├── java          <- Java wrapper
│   │   └── python        <- Python wrapper
│   ├── glop              <- Linear solver
│   ├── lp_data           <- Data structures for linear models
│   ├── graph             <- Graph algorithms
│   │   ├── csharp        <- C# wrapper
│   │   ├── java          <- Java wrapper
│   │   └── python        <- Python wrapper
│   ├── flatzinc          <- FlatZinc interpreter
│   └── resource          <- External resource
```

## Installation

This software suite has been tested under:
- Microsoft Windows (64-bit).

## Documentation

The complete documentation for OR-Tools is available at:
https://developers.google.com/optimization/

## Contributing

The [CONTRIBUTING.md](CONTRIBUTING.md) file contains instructions on how to
submit the Contributor License Agreement before sending any pull requests (PRs).
Of course, if you're new to the project, it's usually best to discuss any
proposals and reach consensus before sending your first PR.

## License

The OR-Tools software suite is licensed under the terms of the Apache License 2.0.
<br>See [LICENSE-2.0](LICENSE-2.0.txt) for more information.
