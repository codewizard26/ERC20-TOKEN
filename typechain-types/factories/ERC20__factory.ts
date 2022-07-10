/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015d5380380620015d583398181016040528101906200003791906200042a565b81600190805190602001906200004f929190620001dd565b50806002908051906020019062000068929190620001dd565b50620000843368056bc75e2d631000006200008c60201b60201c565b50506200065b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620000ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f69062000510565b60405180910390fd5b806000808282546200011291906200056b565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200016a91906200056b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d19190620005d9565b60405180910390a35050565b828054620001eb9062000625565b90600052602060002090601f0160209004810192826200020f57600085556200025b565b82601f106200022a57805160ff19168380011785556200025b565b828001600101855582156200025b579182015b828111156200025a5782518255916020019190600101906200023d565b5b5090506200026a91906200026e565b5090565b5b80821115620002895760008160009055506001016200026f565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002f682620002ab565b810181811067ffffffffffffffff82111715620003185762000317620002bc565b5b80604052505050565b60006200032d6200028d565b90506200033b8282620002eb565b919050565b600067ffffffffffffffff8211156200035e576200035d620002bc565b5b6200036982620002ab565b9050602081019050919050565b60005b838110156200039657808201518184015260208101905062000379565b83811115620003a6576000848401525b50505050565b6000620003c3620003bd8462000340565b62000321565b905082815260208101848484011115620003e257620003e1620002a6565b5b620003ef84828562000376565b509392505050565b600082601f8301126200040f576200040e620002a1565b5b815162000421848260208601620003ac565b91505092915050565b6000806040838503121562000444576200044362000297565b5b600083015167ffffffffffffffff8111156200046557620004646200029c565b5b6200047385828601620003f7565b925050602083015167ffffffffffffffff8111156200049757620004966200029c565b5b620004a585828601620003f7565b9150509250929050565b600082825260208201905092915050565b7f4552433230203a6d696e7420746f207a65726f20616464726573730000000000600082015250565b6000620004f8601b83620004af565b91506200050582620004c0565b602082019050919050565b600060208201905081810360008301526200052b81620004e9565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005788262000532565b9150620005858362000532565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005bd57620005bc6200053c565b5b828201905092915050565b620005d38162000532565b82525050565b6000602082019050620005f06000830184620005c8565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200063e57607f821691505b60208210811415620006555762000654620005f6565b5b50919050565b610f6a806200066b6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad91906109cc565b60405180910390f35b6100d060048036038101906100cb9190610a87565b61028e565b6040516100dd9190610ae2565b60405180910390f35b6100ee6103ef565b6040516100fb9190610b0c565b60405180910390f35b61011e60048036038101906101199190610b27565b6103f5565b60405161012b9190610ae2565b60405180910390f35b61013c61063c565b6040516101499190610b96565b60405180910390f35b61016c60048036038101906101679190610bb1565b610645565b6040516101799190610b0c565b60405180910390f35b61018a61065d565b60405161019791906109cc565b60405180910390f35b6101ba60048036038101906101b59190610a87565b6106eb565b6040516101c79190610ae2565b60405180910390f35b6101ea60048036038101906101e59190610bde565b610700565b6040516101f79190610b0c565b60405180910390f35b6001805461020d90610c4d565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610c4d565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f690610ccb565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103dd9190610b0c565b60405180910390a36001905092915050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828110156104ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b190610d37565b60405180910390fd5b82816104c69190610d86565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460405161061f9190610b0c565b60405180910390a3610632858585610725565b9150509392505050565b60006012905090565b60036020528060005260406000206000915090505481565b6002805461066a90610c4d565b80601f016020809104026020016040519081016040528092919081815260200182805461069690610c4d565b80156106e35780601f106106b8576101008083540402835291602001916106e3565b820191906000526020600020905b8154815290600101906020018083116106c657829003601f168201915b505050505081565b60006106f8338484610725565b905092915050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078d90610e2c565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561081d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081490610ebe565b60405180910390fd5b82816108299190610d86565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108bb9190610ede565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405161091f9190610b0c565b60405180910390a360019150509392505050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561096d578082015181840152602081019050610952565b8381111561097c576000848401525b50505050565b6000601f19601f8301169050919050565b600061099e82610933565b6109a8818561093e565b93506109b881856020860161094f565b6109c181610982565b840191505092915050565b600060208201905081810360008301526109e68184610993565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a1e826109f3565b9050919050565b610a2e81610a13565b8114610a3957600080fd5b50565b600081359050610a4b81610a25565b92915050565b6000819050919050565b610a6481610a51565b8114610a6f57600080fd5b50565b600081359050610a8181610a5b565b92915050565b60008060408385031215610a9e57610a9d6109ee565b5b6000610aac85828601610a3c565b9250506020610abd85828601610a72565b9150509250929050565b60008115159050919050565b610adc81610ac7565b82525050565b6000602082019050610af76000830184610ad3565b92915050565b610b0681610a51565b82525050565b6000602082019050610b216000830184610afd565b92915050565b600080600060608486031215610b4057610b3f6109ee565b5b6000610b4e86828701610a3c565b9350506020610b5f86828701610a3c565b9250506040610b7086828701610a72565b9150509250925092565b600060ff82169050919050565b610b9081610b7a565b82525050565b6000602082019050610bab6000830184610b87565b92915050565b600060208284031215610bc757610bc66109ee565b5b6000610bd584828501610a3c565b91505092915050565b60008060408385031215610bf557610bf46109ee565b5b6000610c0385828601610a3c565b9250506020610c1485828601610a3c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c6557607f821691505b60208210811415610c7957610c78610c1e565b5b50919050565b7f4552433a6170706f726f766520746f20746865207a65726f2061646472657373600082015250565b6000610cb560208361093e565b9150610cc082610c7f565b602082019050919050565b60006020820190508181036000830152610ce481610ca8565b9050919050565b7f45524332303a7472616e7366657220616d6f756e742065786365656465640000600082015250565b6000610d21601e8361093e565b9150610d2c82610ceb565b602082019050919050565b60006020820190508181036000830152610d5081610d14565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d9182610a51565b9150610d9c83610a51565b925082821015610daf57610dae610d57565b5b828203905092915050565b7f45524332303a207472616e736665722066726f6d207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e1660218361093e565b9150610e2182610dba565b604082019050919050565b60006020820190508181036000830152610e4581610e09565b9050919050565b7f45524332303a7472616e7366657220616d6f756e74206578636565647320626160008201527f6c616e6365000000000000000000000000000000000000000000000000000000602082015250565b6000610ea860258361093e565b9150610eb382610e4c565b604082019050919050565b60006020820190508181036000830152610ed781610e9b565b9050919050565b6000610ee982610a51565b9150610ef483610a51565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f2957610f28610d57565b5b82820190509291505056fea2646970667358221220ab1cfe86771f61f6b1ad88311f7eee9a7d06a40d05d2ad8c727cf5a90ae3f20464736f6c634300080b0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}