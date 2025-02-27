import type { BaseTranslation } from '../i18n-types';

const en: BaseTranslation = {
	meta: {
		title: 'MVM Bridge',
		description: 'The best cross-chain bridge.',
		keywords: {
			crossChainBridge: 'Cross-Chain Bridge',
			bitcoin: 'Bitcoin',
			bridge: 'Bridge',
			ethereumBridge: 'Ethereum Bridge',
			mobileCoinMetaMask: 'MobileCoin MetaMask'
		}
	},
	error: {
		tips: 'Error'
	},
	assets: 'Assets',
	transactions: 'Transactions',
	swap: 'Swap',
	swapForGas: 'Swap for Gas',
	explorer: 'Explorer',
	audit: 'Audit',
	docs: 'Docs',
	logout: {
		title: 'Disconnect',
		description: 'Are you sure want to Disconnect?'
	},
	yes: 'Yes',
	cancel: 'Cancel',
	deposit: 'Deposit',
	depositNetwork: 'Deposit Network',
	depositFrom: 'Deposit from {0:string}',
	withdraw: 'Withdraw',
	searchBar: {
		title: 'Search',
		placeholder: 'Name, Symbol or Address'
	},
	selectAnAsset: 'Select an Asset',
	depositModal: {
		title: 'Deposit {0:string}',
		qrCode: 'QR Code',
		tips1: 'Deposit will arrive {0:number} block confirmation.',
		tips2: 'Min deposit: 0.00000001 {0:string}.'
	},
	withdrawModal: {
		l1Gas: 'L1 Gas: ',
		l2Gas: 'L2 Gas: ',
		l1GasTip: 'L1 Gas fee paid to miners',
		l2GasTip: 'L2 Gas fee payment MVM node '
	},
	successful: 'Successful',
	from: 'From',
	to: 'To',
	address: 'Address',
	memo: 'Memo',
	allTransactions: 'All Transactions',
	fee: 'Fee',
	balanceOf: 'Balance: {0:string} {1:string}',
	copied: 'Copied',
	swapPage: {
		tips: {
			price: 'Price:',
			minReceived: 'Min Received:',
			fee: 'Fee:',
			priceImpact: 'Price Impact:',
			warning: 'Lack of liquidity, please decrease swap amount',
			success: 'Successful swap'
		},
		faq: {
			description1: 'How does it work?',
			description2:
				'MVM Bridge provides a cross-chain convert service through 4swap and MixPay, which delivers lower fees, faster transaction speed, and better trading liquidity.',
			description3: '4swap',
			description4:
				'A decentralized protocol for automated liquidity provision offers over 140 pairs with a TVL of over $100M. Please visit ',
			description5: ' for additional information.',
			description6: 'MixPay',
			description7:
				'A decentralized Web3 payment protocol connects the most liquid exchanges, such as Binance, Huobi, and Gate, to convert almost any cryptocurrency. For more info, please visit ',
			description8: '.'
		}
	},
	login: {
		title: 'Login',
		connectBrowserWalletDescription: 'Connect using browser wallet',
		connectWalletConnectDescription: 'Connect using WalletConnect',
		pleaseInstallMetaMaskFirst: 'Please install MetaMask first'
	},
	max: 'Max',
	apps: {
		quill: {
			description: 'Quill is building a value net on the Web3 for both authors and readers.'
		},
		leaf: {
			description: 'A decentralized financial network, implement a derivatives liquidity protocol.'
		},
		rings: {
			description: 'An algorithmic, autonomous interest rate protocol.'
		},
		fourSwap: {
			description: 'A fully decentralized protocol for automated liquidity provision.'
		},
		trident: {
			description: 'The most simple and easy-to-use NFTs marketplace in the world.'
		},
		optionDance: {
			description:
				'We reinvented options trading for investors, everyone can trade options like the gurus.'
		}
	},
	tokenNA: 'N/A',
	tokenName: 'Token Name',
	tokenSymbol: 'Token Symbol',
	depositConfirmations: 'Deposit Confirmations',
	addToMetaMask: 'Add token to MetaMask',
	swapForGasPage: {
		tip: 'ETH is used to pay for transaction fees',
		providedTip: 'This service is provided by Crypto Gas Station',
		itemTip: 'Available for {0:number} transactions',
		customAmount: 'Custom amount'
	},
	amount: 'Amount',
	pending: 'Pending({0:number})',
	confirmations: '{0:number}/{1:number} Confirmations',
	connectWallet: 'Connect Wallet'
};

export default en;
