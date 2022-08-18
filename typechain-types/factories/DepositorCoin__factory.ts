/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { DepositorCoin, DepositorCoinInterface } from "../DepositorCoin";

const _abi = [
  {
    inputs: [],
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
        name: "value256",
        type: "uint256",
      },
    ],
    name: "Deposit",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "deposit",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f4465706f7369746f72436f696e000000000000000000000000000000000000008152506040518060400160405280600381526020017f5354430000000000000000000000000000000000000000000000000000000000815250816001908051906020019062000096929190620000f9565b508060029080519060200190620000af929190620000f9565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200020e565b8280546200010790620001d8565b90600052602060002090601f0160209004810192826200012b576000855562000177565b82601f106200014657805160ff191683800117855562000177565b8280016001018555821562000177579182015b828111156200017657825182559160200191906001019062000159565b5b5090506200018691906200018a565b5090565b5b80821115620001a55760008160009055506001016200018b565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001f157607f821691505b60208210811415620002085762000207620001a9565b5b50919050565b61170c806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806347e7ef241161008c57806395d89b411161006657806395d89b41146102285780639dc29fac14610246578063a9059cbb14610262578063dd62ed3e14610292576100cf565b806347e7ef24146101aa57806370a08231146101da5780638da5cb5b1461020a576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce5671461017057806340c10f191461018e575b600080fd5b6100dc6102c2565b6040516100e99190610f48565b60405180910390f35b61010c60048036038101906101079190611003565b610350565b604051610119919061105e565b60405180910390f35b61012a6104b1565b6040516101379190611088565b60405180910390f35b61015a600480360381019061015591906110a3565b6104b7565b604051610167919061105e565b60405180910390f35b6101786106fe565b6040516101859190611112565b60405180910390f35b6101a860048036038101906101a39190611003565b610707565b005b6101c460048036038101906101bf9190611003565b6107a5565b6040516101d1919061105e565b60405180910390f35b6101f460048036038101906101ef919061112d565b61086d565b6040516102019190611088565b60405180910390f35b610212610885565b60405161021f9190611169565b60405180910390f35b6102306108ab565b60405161023d9190610f48565b60405180910390f35b610260600480360381019061025b9190611003565b610939565b005b61027c60048036038101906102779190611003565b6109d7565b604051610289919061105e565b60405180910390f35b6102ac60048036038101906102a79190611184565b6109ec565b6040516102b99190611088565b60405180910390f35b600180546102cf906111f3565b80601f01602080910402602001604051908101604052809291908181526020018280546102fb906111f3565b80156103485780601f1061031d57610100808354040283529160200191610348565b820191906000526020600020905b81548152906001019060200180831161032b57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156103c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b890611297565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049f9190611088565b60405180910390a36001905092915050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561057c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057390611303565b60405180910390fd5b82816105889190611352565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040516106e19190611088565b60405180910390a36106f4858585610a11565b9150509392505050565b60006012905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610797576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e906113d2565b60405180910390fd5b6107a18282610c1f565b5050565b600081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107f691906113f2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f5548c837ab068cf56a2c2479df0882a4922fd203edb7517321831d95078c5f628460405161085b9190611088565b60405180910390a36001905092915050565b60036020528060005260406000206000915090505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600280546108b8906111f3565b80601f01602080910402602001604051908101604052809291908181526020018280546108e4906111f3565b80156109315780601f1061090657610100808354040283529160200191610931565b820191906000526020600020905b81548152906001019060200180831161091457829003601f168201915b505050505081565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146109c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c090611494565b60405180910390fd5b6109d38282610d67565b5050565b60006109e4338484610a11565b905092915050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7990611526565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610b09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b00906115b8565b60405180910390fd5b8281610b159190611352565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ba791906113f2565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef85604051610c0b9190611088565b60405180910390a360019150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8690611624565b60405180910390fd5b80600080828254610ca091906113f2565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cf691906113f2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d5b9190611088565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dce906116b6565b60405180910390fd5b80600080828254610de89190611352565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e3e9190611352565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ea39190611088565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ee9578082015181840152602081019050610ece565b83811115610ef8576000848401525b50505050565b6000601f19601f8301169050919050565b6000610f1a82610eaf565b610f248185610eba565b9350610f34818560208601610ecb565b610f3d81610efe565b840191505092915050565b60006020820190508181036000830152610f628184610f0f565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f9a82610f6f565b9050919050565b610faa81610f8f565b8114610fb557600080fd5b50565b600081359050610fc781610fa1565b92915050565b6000819050919050565b610fe081610fcd565b8114610feb57600080fd5b50565b600081359050610ffd81610fd7565b92915050565b6000806040838503121561101a57611019610f6a565b5b600061102885828601610fb8565b925050602061103985828601610fee565b9150509250929050565b60008115159050919050565b61105881611043565b82525050565b6000602082019050611073600083018461104f565b92915050565b61108281610fcd565b82525050565b600060208201905061109d6000830184611079565b92915050565b6000806000606084860312156110bc576110bb610f6a565b5b60006110ca86828701610fb8565b93505060206110db86828701610fb8565b92505060406110ec86828701610fee565b9150509250925092565b600060ff82169050919050565b61110c816110f6565b82525050565b60006020820190506111276000830184611103565b92915050565b60006020828403121561114357611142610f6a565b5b600061115184828501610fb8565b91505092915050565b61116381610f8f565b82525050565b600060208201905061117e600083018461115a565b92915050565b6000806040838503121561119b5761119a610f6a565b5b60006111a985828601610fb8565b92505060206111ba85828601610fb8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061120b57607f821691505b6020821081141561121f5761121e6111c4565b5b50919050565b7f45524332303a6170706f726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611281602283610eba565b915061128c82611225565b604082019050919050565b600060208201905081810360008301526112b081611274565b9050919050565b7f45524332303a7472616e7366657220616d6f756e742065786365656465640000600082015250565b60006112ed601e83610eba565b91506112f8826112b7565b602082019050919050565b6000602082019050818103600083015261131c816112e0565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061135d82610fcd565b915061136883610fcd565b92508282101561137b5761137a611323565b5b828203905092915050565b7f445043203a6f6e6c79206f776e65722063616e206d696e740000000000000000600082015250565b60006113bc601883610eba565b91506113c782611386565b602082019050919050565b600060208201905081810360008301526113eb816113af565b9050919050565b60006113fd82610fcd565b915061140883610fcd565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561143d5761143c611323565b5b828201905092915050565b7f4450433a6f6e6c79206f776e65722063616e206275726e000000000000000000600082015250565b600061147e601783610eba565b915061148982611448565b602082019050919050565b600060208201905081810360008301526114ad81611471565b9050919050565b7f45524332303a207472616e736665722066726f6d207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611510602183610eba565b915061151b826114b4565b604082019050919050565b6000602082019050818103600083015261153f81611503565b9050919050565b7f45524332303a7472616e7366657220616d6f756e74206578636565647320626160008201527f6c616e6365000000000000000000000000000000000000000000000000000000602082015250565b60006115a2602583610eba565b91506115ad82611546565b604082019050919050565b600060208201905081810360008301526115d181611595565b9050919050565b7f4552433230203a6d696e7420746f207a65726f20616464726573730000000000600082015250565b600061160e601b83610eba565b9150611619826115d8565b602082019050919050565b6000602082019050818103600083015261163d81611601565b9050919050565b7f4552433230203a6275726e2066726f6d2020746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006116a0602283610eba565b91506116ab82611644565b604082019050919050565b600060208201905081810360008301526116cf81611693565b905091905056fea2646970667358221220f26dfa533f903543758cd7076311d1625885d166bb7cd5529aa51da37c98819b64736f6c634300080c0033";

type DepositorCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DepositorCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DepositorCoin__factory extends ContractFactory {
  constructor(...args: DepositorCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DepositorCoin> {
    return super.deploy(overrides || {}) as Promise<DepositorCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DepositorCoin {
    return super.attach(address) as DepositorCoin;
  }
  override connect(signer: Signer): DepositorCoin__factory {
    return super.connect(signer) as DepositorCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DepositorCoinInterface {
    return new utils.Interface(_abi) as DepositorCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DepositorCoin {
    return new Contract(address, _abi, signerOrProvider) as DepositorCoin;
  }
}