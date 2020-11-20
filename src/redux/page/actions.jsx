const actions = {
  GET_WEB3_INSTANCE: "GET_WEB3_INSTANCE",
  GET_ALLOWANCE: "GET_ALLOWANCE",
  GET_STAKED: "GET_STAKED",
  GET_BALANCE: "GET_BALANCE",
  GET_PENDING: "GET_PENDING",
  GET_AVAILABLE_REWARD_AMOUNT: "GET_AVAILABLE_REWARD_AMOUNT",
  GET_DEPOSIT_BALANCE: "GET_DEPOSIT_BALANCE",
  GET_REWARD_BALANCE: "GET_REWARD_BALANCE",
  GET_TOTAL_DEPOSIT: "GET_TOTAL_DEPOSIT",

  APPROVE_TOKEN: "APPROVE_TOKEN",
  DEPOSIT_TOKEN: "DEPOSIT_TOKEN",
  DEPOSIT_TOKEN_ALL: "DEPOSIT_TOKEN_ALL",
  WITHDRAW_TOKEN: "WITHDRAW_TOKEN",
  WITHDRAW_TOKEN_ALL: "WITHDRAW_TOKEN_ALL",
  HARVEST_TOKEN: "HARVEST_TOKEN",
  DRAIN_TOKEN: "DRAIN_TOKEN",

  CLAIM_REWARD: "CLAIM_REWARD",
  CLAIM_REWARD_ALL: "CLAIM_REWARD_ALL",
  SEND_REWARD_AMOUNT: "SEND_REWARD_AMOUNT",

  GET_ETH_PRICE: "GET_ETH_PRICE",
  GET_ETH_PRICE_SUCCESS: "GET_ETH_PRICE_SUCCESS",

  GET_TOTAL_SUPPLY: "GET_TOTAL_SUPPLY",

  GET_TVL: "GET_TVL",

  getWeb3Instance: (callback) => ({
    type: actions.GET_WEB3_INSTANCE,
    payload: { callback },
  }),
  getEthPrice: () => ({
    type: actions.GET_ETH_PRICE,
  }),

  getTotalSupply: (tokenAddress, callback) => ({
    type: actions.GET_TOTAL_SUPPLY,
    payload: { tokenAddress, callback },
  }),

  getAvailableRewardAmount: (vaultAddress, tokenAddress, callback) => ({
    type: actions.GET_AVAILABLE_REWARD_AMOUNT,
    payload: { vaultAddress, tokenAddress, callback },
  }),

  getDepositBalaces: (vaultAddress, tokenAddress, callback) => ({
    type: actions.GET_DEPOSIT_BALANCE,
    payload: { vaultAddress, tokenAddress, callback },
  }),

  getRewardBalances: (vaultAddress, callback) => ({
    type: actions.GET_REWARD_BALANCE,
    payload: { vaultAddress, callback },
  }),

  getTotalDeposit: (vaultAddress, tokenAddress, callback) => ({
    type: actions.GET_TOTAL_DEPOSIT,
    payload: { vaultAddress, tokenAddress, callback },
  }),

  getBalance: (tokenAddress, callback) => ({
    type: actions.GET_BALANCE,
    payload: { tokenAddress, callback },
  }),

  getAllowance: (vaultAddress, tokenAddress, callback) => ({
    type: actions.GET_ALLOWANCE,
    payload: { vaultAddress, tokenAddress, callback },
  }),

  getStaked: (pid, callback) => ({
    type: actions.GET_STAKED,
    payload: { pid, callback },
  }),

  getPending: (pid, callback) => ({
    type: actions.GET_PENDING,
    payload: { pid, callback },
  }),

  approveToken: (tokenAddress, vaultAddress, callback) => ({
    type: actions.APPROVE_TOKEN,
    payload: { tokenAddress, vaultAddress, callback },
  }),

  depositToken: (vaultAddress, tokenAddress, amount, callback) => ({
    type: actions.DEPOSIT_TOKEN,
    payload: { vaultAddress, tokenAddress, amount, callback },
  }),

  depositAllToken: (vaultAddress, callback) => ({
    type: actions.DEPOSIT_TOKEN_ALL,
    payload: { vaultAddress, callback },
  }),

  withdrawToken: (vaultAddress, tokenAddress, amount, callback) => ({
    type: actions.WITHDRAW_TOKEN,
    payload: { vaultAddress, tokenAddress, amount, callback },
  }),

  withdrawAllToken: (vaultAddress, callback) => ({
    type: actions.WITHDRAW_TOKEN_ALL,
    payload: { vaultAddress, callback },
  }),

  claimReward: (vaultAddress, amount, callback) => ({
    type: actions.CLAIM_REWARD,
    payload: { vaultAddress, amount, callback },
  }),

  claimRewardAll: (vaultAddress, callback) => ({
    type: actions.CLAIM_REWARD_ALL,
    payload: { vaultAddress, callback },
  }),

  sendReward: (vaultAddress, amount, callback) => ({
    type: actions.SEND_REWARD_AMOUNT,
    payload: { vaultAddress, amount, callback },
  }),

  harvestToken: (pid, callback) => ({
    type: actions.HARVEST_TOKEN,
    payload: { pid, callback },
  }),

  drainToken: (pid, callback) => ({
    type: actions.DRAIN_TOKEN,
    payload: { pid, callback },
  }),

  getTvl: (
    farm,
    ethPrice,
    nerdlingPrice,
    derivedEth0,
    decimals0,
    derivedEth1,
    decimals1,
    poolAddress,
    adapterAddress,
    adapterAbi,
    callback
  ) => ({
    type: actions.GET_TVL,
    payload: {
      farm,
      ethPrice,
      nerdlingPrice,
      derivedEth0,
      decimals0,
      derivedEth1,
      decimals1,
      poolAddress,
      adapterAddress,
      adapterAbi,
      callback,
    },
  }),
};

export default actions;
