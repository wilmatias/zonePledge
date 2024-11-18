export interface AbiItem {
    constant?: boolean;
    inputs: { name: string; type: string; indexed?: boolean }[];
    name?: string;
    outputs?: { name: string; type: string }[];
    payable?: boolean;
    stateMutability?: string;
    type: string;
}

const abi: AbiItem[] = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "lawEnforcementRole",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "supplyController",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "oldOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "Pause",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "Unpause",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "AddressFrozen",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "AddressUnfrozen",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "FrozenAddressWiped",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "oldLawEnforcementRole",
                type: "address",
            },
            {
                indexed: true,
                name: "newLawEnforcementRole",
                type: "address",
            },
        ],
        name: "LawEnforcementRoleSet",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "SupplyIncreased",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "SupplyDecreased",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "oldSupplyController",
                type: "address",
            },
            {
                indexed: true,
                name: "newSupplyController",
                type: "address",
            },
        ],
        name: "SupplyControllerSet",
        payable: false,
        type: "event",
    },
    {
        constant: false,
        inputs: [],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                indexed: false,
                name: "_addr",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "_from",
                type: "address",
            },
            {
                indexed: false,
                name: "_to",
                type: "address",
            },
            {
                indexed: false,
                name: "_value",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "value",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                indexed: false,
                name: "_owner",
                type: "address",
            },
            {
                indexed: false,
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseApproval",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseApproval",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "freeze",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "unfreeze",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: true,
                name: "addr",
                type: "address",
            },
        ],
        name: "wipeFrozenAddress",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "newLawEnforcementRole",
                type: "address",
            },
        ],
        name: "setLawEnforcementRole",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "_newSupplyController",
                type: "address",
            },
        ],
        name: "setSupplyController",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "increaseSupply",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "decreaseSupply",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                indexed: false,
                name: "insecureSpender",
                type: "address",
            },
        ],
        name: "lawEnforcementWipe",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

export default abi;
