export const stakingABI = [
    {
        "inputs": [],
        "name": "cancel_candidate_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "cancel_delegation_request",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidateCount",
                "type": "uint256"
            }
        ],
        "name": "cancel_leave_candidates",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cancel_leave_delegators",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "less",
                "type": "uint256"
            }
        ],
        "name": "candidate_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "more",
                "type": "uint256"
            }
        ],
        "name": "candidate_bond_more",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidate_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "candidate_delegation_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collator",
                "type": "address"
            }
        ],
        "name": "collator_nomination_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "candidateDelegationCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "delegatorDelegationCount",
                "type": "uint256"
            }
        ],
        "name": "delegate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "more",
                "type": "uint256"
            }
        ],
        "name": "delegator_bond_more",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            }
        ],
        "name": "delegator_delegation_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "execute_candidate_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "execute_delegation_request",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "candidateDelegationCount",
                "type": "uint256"
            }
        ],
        "name": "execute_leave_candidates",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "delegatorDelegationCount",
                "type": "uint256"
            }
        ],
        "name": "execute_leave_delegators",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "go_offline",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "go_online",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "is_candidate",
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
                "internalType": "address",
                "name": "delegator",
                "type": "address"
            }
        ],
        "name": "is_delegator",
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
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            }
        ],
        "name": "is_nominator",
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
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "is_selected_candidate",
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
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "candidateCount",
                "type": "uint256"
            }
        ],
        "name": "join_candidates",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidateCount",
                "type": "uint256"
            }
        ],
        "name": "leave_candidates",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "nominatorNominationCount",
                "type": "uint256"
            }
        ],
        "name": "leave_nominators",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "min_delegation",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "min_nomination",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collator",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collatorNominationCount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nominatorNominationCount",
                "type": "uint256"
            }
        ],
        "name": "nominate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "less",
                "type": "uint256"
            }
        ],
        "name": "nominator_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "more",
                "type": "uint256"
            }
        ],
        "name": "nominator_bond_more",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "nominator",
                "type": "address"
            }
        ],
        "name": "nominator_nomination_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "round",
                "type": "uint256"
            }
        ],
        "name": "points",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collator",
                "type": "address"
            }
        ],
        "name": "revoke_nomination",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "less",
                "type": "uint256"
            }
        ],
        "name": "schedule_candidate_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "less",
                "type": "uint256"
            }
        ],
        "name": "schedule_delegator_bond_less",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "candidateCount",
                "type": "uint256"
            }
        ],
        "name": "schedule_leave_candidates",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "schedule_leave_delegators",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "schedule_revoke_delegation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]