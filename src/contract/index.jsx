export const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_handle",
				"type": "string"
			}
		],
		"name": "updateHandle",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "userHandle",
						"type": "string"
					}
				],
				"internalType": "struct appUserHandles.OwnerHandle",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_checkAddress",
				"type": "address"
			}
		],
		"name": "checkAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "handles",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "userHandle",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]