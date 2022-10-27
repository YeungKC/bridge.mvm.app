// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'zh'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	meta: {
		/**
		 * M​V​M​ ​B​r​i​d​g​e
		 */
		title: string
		/**
		 * T​h​e​ ​b​e​s​t​ ​c​r​o​s​s​-​c​h​a​i​n​ ​b​r​i​d​g​e​.
		 */
		description: string
		keywords: {
			/**
			 * C​r​o​s​s​-​C​h​a​i​n​ ​B​r​i​d​g​e
			 */
			crossChainBridge: string
			/**
			 * B​i​t​c​o​i​n
			 */
			bitcoin: string
			/**
			 * B​r​i​d​g​e
			 */
			bridge: string
			/**
			 * E​t​h​e​r​e​u​m​ ​B​r​i​d​g​e
			 */
			ethereumBridge: string
			/**
			 * M​o​b​i​l​e​C​o​i​n​ ​M​e​t​a​M​a​s​k
			 */
			mobileCoinMetaMask: string
		}
	}
	error: {
		/**
		 * E​r​r​o​r
		 */
		tips: string
	}
	/**
	 * A​s​s​e​t​s
	 */
	assets: string
	/**
	 * T​r​a​n​s​a​c​t​i​o​n​s
	 */
	transactions: string
	/**
	 * S​w​a​p
	 */
	swap: string
	/**
	 * S​w​a​p​ ​f​o​r​ ​G​a​s
	 */
	swapForGas: string
	/**
	 * E​x​p​l​o​r​e​r
	 */
	explorer: string
	/**
	 * A​u​d​i​t
	 */
	audit: string
	/**
	 * D​o​c​s
	 */
	docs: string
	logout: {
		/**
		 * L​o​g​ ​O​u​t
		 */
		title: string
		/**
		 * A​r​e​ ​y​o​u​ ​s​u​r​e​ ​w​a​n​t​ ​t​o​ ​l​o​g​o​u​t​?
		 */
		description: string
	}
	/**
	 * Y​e​s
	 */
	yes: string
	/**
	 * C​a​n​c​e​l
	 */
	cancel: string
	/**
	 * D​e​p​o​s​i​t
	 */
	deposit: string
	/**
	 * W​i​t​h​d​r​a​w
	 */
	withdraw: string
	searchBar: {
		/**
		 * S​e​a​r​c​h
		 */
		title: string
		/**
		 * N​a​m​e​,​ ​S​y​m​b​o​l​ ​o​r​ ​A​d​d​r​e​s​s
		 */
		placeholder: string
	}
	depositModal: {
		/**
		 * D​e​p​o​s​i​t​ ​t​o​ ​M​V​M
		 */
		title: string
		/**
		 * Q​R​ ​C​o​d​e
		 */
		qrCode: string
		/**
		 * D​e​p​o​s​i​t​ ​w​i​l​l​ ​a​r​r​i​v​e​ ​{​0​}​ ​b​l​o​c​k​ ​c​o​n​f​i​r​m​a​t​i​o​n​.
		 * @param {number} 0
		 */
		tips1: RequiredParams<'0'>
		/**
		 * M​i​n​ ​d​e​p​o​s​i​t​:​ ​0​.​0​0​0​0​0​0​0​1​ ​{​0​}​.
		 * @param {string} 0
		 */
		tips2: RequiredParams<'0'>
	}
	withdrawModal: {
		/**
		 * W​i​t​h​d​r​a​w​a​l​ ​f​e​e​:​ ​{​0​}​ ​{​1​}
		 * @param {string} 0
		 * @param {string} 1
		 */
		tips1: RequiredParams<'0' | '1'>
		/**
		 * G​a​s​ ​f​e​e​:​ ​{​0​}​ ​E​T​H
		 * @param {unknown} 0
		 */
		tips2: RequiredParams<'0'>
	}
	/**
	 * F​r​o​m
	 */
	from: string
	/**
	 * T​o
	 */
	to: string
	/**
	 * A​d​d​r​e​s​s
	 */
	address: string
	/**
	 * M​e​m​o
	 */
	memo: string
	/**
	 * A​l​l​ ​T​r​a​n​s​a​c​t​i​o​n​s
	 */
	allTransactions: string
	/**
	 * F​e​e
	 */
	fee: string
	/**
	 * B​a​l​a​n​c​e​:​ ​{​0​}​ ​{​1​}
	 * @param {string} 0
	 * @param {string} 1
	 */
	balanceOf: RequiredParams<'0' | '1'>
	/**
	 * C​o​p​i​e​d
	 */
	copied: string
	swapPage: {
		tips: {
			/**
			 * P​r​i​c​e​:
			 */
			price: string
			/**
			 * M​i​n​ ​R​e​c​e​i​v​e​d​:
			 */
			minReceived: string
			/**
			 * F​e​e​:
			 */
			fee: string
			/**
			 * P​r​i​c​e​ ​I​m​p​a​c​t​:
			 */
			priceImpact: string
			/**
			 * L​a​c​k​ ​o​f​ ​l​i​q​u​i​d​i​t​y​,​ ​p​l​e​a​s​e​ ​d​e​c​r​e​a​s​e​ ​s​w​a​p​ ​a​m​o​u​n​t
			 */
			warning: string
		}
		faq: {
			/**
			 * H​o​w​ ​d​o​e​s​ ​i​t​ ​w​o​r​k​?
			 */
			description1: string
			/**
			 * M​V​M​ ​B​r​i​d​g​e​ ​p​r​o​v​i​d​e​s​ ​a​ ​c​r​o​s​s​-​c​h​a​i​n​ ​c​o​n​v​e​r​t​ ​s​e​r​v​i​c​e​ ​t​h​r​o​u​g​h​ ​4​s​w​a​p​ ​a​n​d​ ​M​i​x​P​a​y​,​ ​w​h​i​c​h​ ​d​e​l​i​v​e​r​s​ ​l​o​w​e​r​ ​f​e​e​s​,​ ​f​a​s​t​e​r​ ​t​r​a​n​s​a​c​t​i​o​n​ ​s​p​e​e​d​,​ ​a​n​d​ ​b​e​t​t​e​r​ ​t​r​a​d​i​n​g​ ​l​i​q​u​i​d​i​t​y​.
			 */
			description2: string
			/**
			 * 4​s​w​a​p
			 */
			description3: string
			/**
			 * A​ ​d​e​c​e​n​t​r​a​l​i​z​e​d​ ​p​r​o​t​o​c​o​l​ ​f​o​r​ ​a​u​t​o​m​a​t​e​d​ ​l​i​q​u​i​d​i​t​y​ ​p​r​o​v​i​s​i​o​n​ ​o​f​f​e​r​s​ ​o​v​e​r​ ​1​4​0​ ​p​a​i​r​s​ ​w​i​t​h​ ​a​ ​T​V​L​ ​o​f​ ​o​v​e​r​ ​$​1​0​0​M​.​ ​P​l​e​a​s​e​ ​v​i​s​i​t​ 
			 */
			description4: string
			/**
			 *  ​f​o​r​ ​a​d​d​i​t​i​o​n​a​l​ ​i​n​f​o​r​m​a​t​i​o​n​.
			 */
			description5: string
			/**
			 * M​i​x​P​a​y
			 */
			description6: string
			/**
			 * A​ ​d​e​c​e​n​t​r​a​l​i​z​e​d​ ​W​e​b​3​ ​p​a​y​m​e​n​t​ ​p​r​o​t​o​c​o​l​ ​c​o​n​n​e​c​t​s​ ​t​h​e​ ​m​o​s​t​ ​l​i​q​u​i​d​ ​e​x​c​h​a​n​g​e​s​,​ ​s​u​c​h​ ​a​s​ ​B​i​n​a​n​c​e​,​ ​H​u​o​b​i​,​ ​a​n​d​ ​G​a​t​e​,​ ​t​o​ ​c​o​n​v​e​r​t​ ​a​l​m​o​s​t​ ​a​n​y​ ​c​r​y​p​t​o​c​u​r​r​e​n​c​y​.​ ​F​o​r​ ​m​o​r​e​ ​i​n​f​o​,​ ​p​l​e​a​s​e​ ​v​i​s​i​t​ 
			 */
			description7: string
			/**
			 * .
			 */
			description8: string
		}
	}
	login: {
		/**
		 * L​o​g​i​n
		 */
		title: string
		/**
		 * C​o​n​n​e​c​t​ ​u​s​i​n​g​ ​b​r​o​w​s​e​r​ ​w​a​l​l​e​t
		 */
		connectBrowserWalletDescription: string
		/**
		 * C​o​n​n​e​c​t​ ​u​s​i​n​g​ ​W​a​l​l​e​t​C​o​n​n​e​c​t
		 */
		connectWalletConnectDescription: string
		/**
		 * P​l​e​a​s​e​ ​i​n​s​t​a​l​l​ ​M​e​t​a​M​a​s​k​ ​f​i​r​s​t
		 */
		pleaseInstallMetaMaskFirst: string
	}
	/**
	 * M​a​x
	 */
	max: string
	apps: {
		quill: {
			/**
			 * W​r​i​t​e​ ​t​o​ ​E​a​r​n
			 */
			description: string
		}
		leaf: {
			/**
			 * A​ ​d​e​c​e​n​t​r​a​l​i​z​e​d​ ​f​i​n​a​n​c​i​a​l​ ​n​e​t​w​o​r​k​,​ ​i​m​p​l​e​m​e​n​t​ ​a​ ​d​e​r​i​v​a​t​i​v​e​s​ ​l​i​q​u​i​d​i​t​y​ ​p​r​o​t​o​c​o​l​.
			 */
			description: string
		}
		rings: {
			/**
			 * A​n​ ​a​l​g​o​r​i​t​h​m​i​c​,​ ​a​u​t​o​n​o​m​o​u​s​ ​i​n​t​e​r​e​s​t​ ​r​a​t​e​ ​p​r​o​t​o​c​o​l​.
			 */
			description: string
		}
		fourSwap: {
			/**
			 * 4​s​w​a​p​ ​i​s​ ​t​h​e​ ​a​u​t​o​m​a​t​e​d​ ​m​a​r​k​e​t​-​m​a​k​i​n​g​ ​t​r​a​d​i​n​g​ ​p​l​a​t​f​o​r​m​ ​o​f​ ​F​o​x​,​ ​s​i​m​i​l​a​r​ ​t​o​ ​U​n​i​s​w​a​p​.
			 */
			description: string
		}
	}
	/**
	 * N​/​A
	 */
	tokenNA: string
	/**
	 * T​o​k​e​n​ ​N​a​m​e
	 */
	tokenName: string
	/**
	 * T​o​k​e​n​ ​S​y​m​b​o​l
	 */
	tokenSymbol: string
	/**
	 * D​e​p​o​s​i​t​ ​C​o​n​f​i​r​m​a​t​i​o​n​s
	 */
	depositConfirmations: string
	/**
	 * A​d​d​ ​t​o​k​e​n​ ​t​o​ ​M​e​t​a​M​a​s​k
	 */
	addToMetaMask: string
	swapForGasPage: {
		/**
		 * E​T​H​ ​i​s​ ​u​s​e​d​ ​t​o​ ​p​a​y​ ​f​o​r​ ​t​r​a​n​s​a​c​t​i​o​n​ ​f​e​e​s
		 */
		tip: string
		/**
		 * T​h​i​s​ ​s​e​r​v​i​c​e​ ​i​s​ ​p​r​o​v​i​d​e​d​ ​b​y​ ​C​r​y​p​t​o​ ​G​a​s​ ​S​t​a​t​i​o​n
		 */
		providedTip: string
		/**
		 * A​v​a​i​l​a​b​l​e​ ​f​o​r​ ​{​0​}​ ​t​r​a​n​s​a​c​t​i​o​n​s
		 * @param {number} 0
		 */
		itemTip: RequiredParams<'0'>
	}
}

export type TranslationFunctions = {
	meta: {
		/**
		 * MVM Bridge
		 */
		title: () => LocalizedString
		/**
		 * The best cross-chain bridge.
		 */
		description: () => LocalizedString
		keywords: {
			/**
			 * Cross-Chain Bridge
			 */
			crossChainBridge: () => LocalizedString
			/**
			 * Bitcoin
			 */
			bitcoin: () => LocalizedString
			/**
			 * Bridge
			 */
			bridge: () => LocalizedString
			/**
			 * Ethereum Bridge
			 */
			ethereumBridge: () => LocalizedString
			/**
			 * MobileCoin MetaMask
			 */
			mobileCoinMetaMask: () => LocalizedString
		}
	}
	error: {
		/**
		 * Error
		 */
		tips: () => LocalizedString
	}
	/**
	 * Assets
	 */
	assets: () => LocalizedString
	/**
	 * Transactions
	 */
	transactions: () => LocalizedString
	/**
	 * Swap
	 */
	swap: () => LocalizedString
	/**
	 * Swap for Gas
	 */
	swapForGas: () => LocalizedString
	/**
	 * Explorer
	 */
	explorer: () => LocalizedString
	/**
	 * Audit
	 */
	audit: () => LocalizedString
	/**
	 * Docs
	 */
	docs: () => LocalizedString
	logout: {
		/**
		 * Log Out
		 */
		title: () => LocalizedString
		/**
		 * Are you sure want to logout?
		 */
		description: () => LocalizedString
	}
	/**
	 * Yes
	 */
	yes: () => LocalizedString
	/**
	 * Cancel
	 */
	cancel: () => LocalizedString
	/**
	 * Deposit
	 */
	deposit: () => LocalizedString
	/**
	 * Withdraw
	 */
	withdraw: () => LocalizedString
	searchBar: {
		/**
		 * Search
		 */
		title: () => LocalizedString
		/**
		 * Name, Symbol or Address
		 */
		placeholder: () => LocalizedString
	}
	depositModal: {
		/**
		 * Deposit to MVM
		 */
		title: () => LocalizedString
		/**
		 * QR Code
		 */
		qrCode: () => LocalizedString
		/**
		 * Deposit will arrive {0} block confirmation.
		 */
		tips1: (arg0: number) => LocalizedString
		/**
		 * Min deposit: 0.00000001 {0}.
		 */
		tips2: (arg0: string) => LocalizedString
	}
	withdrawModal: {
		/**
		 * Withdrawal fee: {0} {1}
		 */
		tips1: (arg0: string, arg1: string) => LocalizedString
		/**
		 * Gas fee: {0} ETH
		 */
		tips2: (arg0: unknown) => LocalizedString
	}
	/**
	 * From
	 */
	from: () => LocalizedString
	/**
	 * To
	 */
	to: () => LocalizedString
	/**
	 * Address
	 */
	address: () => LocalizedString
	/**
	 * Memo
	 */
	memo: () => LocalizedString
	/**
	 * All Transactions
	 */
	allTransactions: () => LocalizedString
	/**
	 * Fee
	 */
	fee: () => LocalizedString
	/**
	 * Balance: {0} {1}
	 */
	balanceOf: (arg0: string, arg1: string) => LocalizedString
	/**
	 * Copied
	 */
	copied: () => LocalizedString
	swapPage: {
		tips: {
			/**
			 * Price:
			 */
			price: () => LocalizedString
			/**
			 * Min Received:
			 */
			minReceived: () => LocalizedString
			/**
			 * Fee:
			 */
			fee: () => LocalizedString
			/**
			 * Price Impact:
			 */
			priceImpact: () => LocalizedString
			/**
			 * Lack of liquidity, please decrease swap amount
			 */
			warning: () => LocalizedString
		}
		faq: {
			/**
			 * How does it work?
			 */
			description1: () => LocalizedString
			/**
			 * MVM Bridge provides a cross-chain convert service through 4swap and MixPay, which delivers lower fees, faster transaction speed, and better trading liquidity.
			 */
			description2: () => LocalizedString
			/**
			 * 4swap
			 */
			description3: () => LocalizedString
			/**
			 * A decentralized protocol for automated liquidity provision offers over 140 pairs with a TVL of over $100M. Please visit 
			 */
			description4: () => LocalizedString
			/**
			 *  for additional information.
			 */
			description5: () => LocalizedString
			/**
			 * MixPay
			 */
			description6: () => LocalizedString
			/**
			 * A decentralized Web3 payment protocol connects the most liquid exchanges, such as Binance, Huobi, and Gate, to convert almost any cryptocurrency. For more info, please visit 
			 */
			description7: () => LocalizedString
			/**
			 * .
			 */
			description8: () => LocalizedString
		}
	}
	login: {
		/**
		 * Login
		 */
		title: () => LocalizedString
		/**
		 * Connect using browser wallet
		 */
		connectBrowserWalletDescription: () => LocalizedString
		/**
		 * Connect using WalletConnect
		 */
		connectWalletConnectDescription: () => LocalizedString
		/**
		 * Please install MetaMask first
		 */
		pleaseInstallMetaMaskFirst: () => LocalizedString
	}
	/**
	 * Max
	 */
	max: () => LocalizedString
	apps: {
		quill: {
			/**
			 * Write to Earn
			 */
			description: () => LocalizedString
		}
		leaf: {
			/**
			 * A decentralized financial network, implement a derivatives liquidity protocol.
			 */
			description: () => LocalizedString
		}
		rings: {
			/**
			 * An algorithmic, autonomous interest rate protocol.
			 */
			description: () => LocalizedString
		}
		fourSwap: {
			/**
			 * 4swap is the automated market-making trading platform of Fox, similar to Uniswap.
			 */
			description: () => LocalizedString
		}
	}
	/**
	 * N/A
	 */
	tokenNA: () => LocalizedString
	/**
	 * Token Name
	 */
	tokenName: () => LocalizedString
	/**
	 * Token Symbol
	 */
	tokenSymbol: () => LocalizedString
	/**
	 * Deposit Confirmations
	 */
	depositConfirmations: () => LocalizedString
	/**
	 * Add token to MetaMask
	 */
	addToMetaMask: () => LocalizedString
	swapForGasPage: {
		/**
		 * ETH is used to pay for transaction fees
		 */
		tip: () => LocalizedString
		/**
		 * This service is provided by Crypto Gas Station
		 */
		providedTip: () => LocalizedString
		/**
		 * Available for {0} transactions
		 */
		itemTip: (arg0: number) => LocalizedString
	}
}

export type Formatters = {}
