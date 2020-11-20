import {
  all,
  takeLatest,
  takeEvery,
  call,
  put,
  fork,
  select,
} from "redux-saga/effects";

import actions from "./actions";
import Web3 from "web3";

import axios from "axios";
import BigNumber from "bignumber.js";

import { TOKEN_ABI, ABI_VAULT, ABI_VAULT_ETH } from "../../helpers/constant";
import { FDI_VAULT, ADDR_ETH_VAULT } from "../../helpers/fdiVault/constants";
import { PYLON_VAULT } from "../../helpers/pylonVault/constants";

// import {
//   MASTER_VAMPIRE_ADDRESS,
//   MASTER_VAMPIRE_ABI,
//   TOKEN_ABI,
//   NERDLING_POOL,
// } from '../../helper/constants'
// import { add } from 'numeral'

/**
 * Load Web3.js
 */
const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      // Use Mist/MetaMask's provider.
      const web3 = window.web3;
      // console.log("Injected web3 detected.");
      resolve(web3);
    }
    // Fallback to localhost; use dev console port by default...
    else {
      const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
      const web3 = new Web3(provider);
      // console.log("No web3 instance injected, using Local web3.");
      resolve(web3);
    }
  });

// Helpers *********************************************************************************
const lookUpPrices = async function (id_array) {
  let ids = id_array.join("%2C");
  let res = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=" +
      ids +
      "&vs_currencies=usd"
  );
  return res.json();
};

const getBalanceAsync = async (instance, address) => {
  return await instance.methods
    // .balanceOf('0xbf26925f736e90e1715ce4e04cd9c289dd1bc002')
    .balanceOf(address)
    .call()
    .then((data) => {
      // console.log('balance data', address, data)
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getDecimalAsync = async (instance) => {
  return await instance.methods
    .decimals()
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getAllowanceAsync = async (instance, owner, sender) => {
  return await instance.methods
    // .allowance('0xbf26925f736e90e1715ce4e04cd9c289dd1bc002', sender)
    .allowance(owner, sender)
    .call()
    .then((data) => {
      // console.log('allowance', data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getTotalSupplyAsync = async (instance) => {
  return await instance.methods
    .totalSupply()
    .call()
    .then((data) => {
      // console.log('total supply async', data);
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getReservesAsync = async (instance) => {
  return await instance.methods
    .getReserves()
    .call()
    .then((data) => {
      // console.log('reserves async', data)
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getAvailableRewardAmountAsync = async (instance, address) => {
  return await instance.methods
    .availableRewardAmount(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getDepositBalancesAsync = async (instance, address) => {
  return await instance.methods
    .depositBalances(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getRewardBalancesAsync = async (instance, address) => {
  return await instance.methods
    .rewardBalances(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const getTotalDepositAsync = async (instance) => {
  return await instance.methods
    .totalDeposit()
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const approveAsync = async (instance, web3, amount, address, spender) => {
  console.log(
    "before approve gas amount",
    new BigNumber(amount).toFixed().toString()
  );
  console.log("before approve gas instance", instance);
  const gasLimit = await instance.methods
    .approve(
      spender,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    )
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  console.log("approve gas limit", gasLimit);

  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  // console.log('approve**********************')
  // console.log('instance', instance)
  // console.log('spender', spender)
  // console.log('amount', amount)
  // console.log('address', address)

  return await instance.methods
    .approve(
      spender,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const depositEthAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .deposit()
    .estimateGas({
      from: address,
      value: web3.utils.toWei(amount.toString(), "ether"),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  console.log(gasLimit * 1.1);

  console.log("ETH amount", amount);
  return await instance.methods
    .deposit()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
      value: web3.utils.toWei(amount.toString(), "ether"),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const depositAsync = async (instance, tokenAddress, web3, amount, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const tokenAbi = TOKEN_ABI;
  const tokenInstance = new web3.eth.Contract(tokenAbi, tokenAddress);
  const decimal = await getDecimalAsync(tokenInstance);

  console.log("Deposit Amount", new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString())
  const gasLimit = await instance.methods
    .deposit(
      new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString()
    )
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return await instance.methods
    .deposit(
      new BigNumber(amount).times(new BigNumber(10).pow(decimal)).toString()
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const depositAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .depositAll()
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return await instance.methods
    .depositAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const withdrawAsync = async (instance, tokenAddress, web3, amount, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const tokenAbi = TOKEN_ABI;
  const tokenInstance = new web3.eth.Contract(tokenAbi, tokenAddress);
  const decimal = await getDecimalAsync(tokenInstance);

  const gasLimit = await instance.methods
    .withdraw(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(decimal))
        .toFixed()
        .toString()
    )
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return await instance.methods
    .withdraw(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(decimal))
        .toFixed()
        .toString()
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const withdrawAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .withdrawAll()
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return await instance.methods
    .withdrawAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const claimRewardAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .claimReward(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(18))
        .toFixed()
        .toString()
    )
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    })

    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return await instance.methods
    .claimReward(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(18))
        .toFixed()
        .toString()
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const sendRewardAsync = async (instance, web3, amount, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .sendReward(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(18))
        .toFixed()
        .toString()
    )
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  console.log(
    new BigNumber(amount).times(new BigNumber(10).pow(18)).toFixed().toString()
  );

  return await instance.methods
    .sendReward(
      new BigNumber(amount)
        .times(new BigNumber(10).pow(18))
        .toFixed()
        .toString()
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

const claimRewardAllAsync = async (instance, web3, address) => {
  const response = await axios.get(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10),
  };

  const gasLimit = await instance.methods
    .claimRewardAll()
    .estimateGas({ from: address })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  console.log("gasLimit", gasLimit);
  return await instance.methods
    .claimRewardAll()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: Math.floor(gasLimit * 1.1),
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export function* getWeb3Instance() {
  yield takeEvery(actions.GET_WEB3_INSTANCE, function* ({ payload }) {
    const { callback } = payload;
    console.log("web3", "web3");
    try {
      const web3 = yield call(getWeb3);
      if (web3) {
        callback(true);
      }
    } catch (e) {
      callback(false);
      return
    }
  });
}

export function* getBalance() {
  yield takeEvery(actions.GET_BALANCE, function* ({ payload }) {
    const { tokenAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }

    if (tokenAddress != "") {
      const abi = TOKEN_ABI;
      const instance = new web3.eth.Contract(abi, tokenAddress);
      // const instance = new web3.eth.Contract(abi, "0x201850680b79bbeff4e00684248b237a77bded0c")
      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);

      const balance = yield call(getBalanceAsync, instance, accounts[0])
      const decimal = yield call(getDecimalAsync, instance)
      console.log(balance)
      // const bal = (BigNumber(balance).div(Math.pow(10, decimal))).toFixed(decimal)
      const bal = new BigNumber(balance).div(new BigNumber(10).pow(decimal))
      console.log(bal.toFixed())
      callback(bal.toFixed())
    } else {
      const accounts = yield call(web3.eth.getAccounts);

      console.log("ETH");
      const balance = yield call(web3.eth.getBalance, accounts[0]);

      // const balance = web3.eth.getBalance(accounts[0])
      console.log("ETH Balance", accounts[0], balance)
      // const bal = (balance / Math.pow(10, 18)).toFixed(18)
      const bal = new BigNumber(balance).div(new BigNumber(10).pow(18))
      console.log("eth balance", bal.toFixed())
      callback(bal.toFixed())
    }
  });
}

export function* getAllowance() {
  yield takeEvery(actions.GET_ALLOWANCE, function* ({ payload }) {
    const { vaultAddress, tokenAddress, callback } = payload;
    console.log(1);
    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }
    console.log(2);

    if (tokenAddress != "") {
      const abi = TOKEN_ABI;
      const instance = new web3.eth.Contract(abi, tokenAddress);
      // const instance = new web3.eth.Contract(abi, "0x201850680b79bbeff4e00684248b237a77bded0c")

      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);
      console.log("Accounts", accounts);
      const allowance = yield call(
        getAllowanceAsync,
        instance,
        accounts[0],
        vaultAddress
      );

      console.log("Allowance Value", allowance);

      // const decimal = yield call(getDecimalAsync, instance)
      // const allowanceVal = allowance / Math.pow(10, decimal)
      // console.log("Allowance Value in display", allowanceVal)
      callback(allowance);
    }
  });
}

export function* getAvailableRewardAmount() {
  yield takeEvery(actions.GET_AVAILABLE_REWARD_AMOUNT, function* ({ payload }) {
    const { vaultAddress, tokenAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    const accounts = yield call(web3.eth.getAccounts);

    const availableRewardAmount = yield call(
      getAvailableRewardAmountAsync,
      instance,
      accounts[0]
    );

    const tokenAbi = TOKEN_ABI;
    const tokenInstance = new web3.eth.Contract(tokenAbi, tokenAddress);
    const decimal = yield call(getDecimalAsync, tokenInstance);

    // const availableRewardAmountVal =
      // availableRewardAmount / Math.pow(10, decimal);
    const availableRewardAmountVal = new BigNumber(availableRewardAmount).div(new BigNumber(10).pow(decimal));
    callback(availableRewardAmountVal.toFixed());
  });
}

export function* getDepositBalances() {
  yield takeEvery(actions.GET_DEPOSIT_BALANCE, function* ({ payload }) {
    const { vaultAddress, tokenAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    const accounts = yield call(web3.eth.getAccounts);

    const depositBalances = yield call(
      getDepositBalancesAsync,
      instance,
      accounts[0]
    );

    if (tokenAddress != "") {
      const tokenInstance = new web3.eth.Contract(TOKEN_ABI, tokenAddress)
      const decimal = yield call(getDecimalAsync, tokenInstance)
      // const depositBalancesVal = (depositBalances / Math.pow(10, decimal)).toFixed(decimal)
      const depositBalancesVal = new BigNumber(depositBalances).div(new BigNumber(10).pow(decimal))
      callback(depositBalancesVal.toFixed());
    } else {
      // const depositBalancesVal = (depositBalances / Math.pow(10, 18)).toFixed(18)
      const depositBalancesVal = new BigNumber(depositBalances).div(new BigNumber(10).pow(18))
      callback(depositBalancesVal.toFixed());
    }
  });
}

export function* getRewardBalances() {
  yield takeEvery(actions.GET_REWARD_BALANCE, function* ({ payload }) {
    const { vaultAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    const accounts = yield call(web3.eth.getAccounts);

    const rewardBalances = yield call(
      getRewardBalancesAsync,
      instance,
      accounts[0]
    );

    // const decimal = yield call(getDecimalAsync, instance)
    // const rewardBalancesVal = (rewardBalances / Math.pow(10, 18)).toFixed(18)
    const rewardBalancesVal = new BigNumber(rewardBalances).div(new BigNumber(10).pow(18))
    callback(rewardBalancesVal.toFixed());
  });
}

export function* getTotalDeposit() {
  yield takeEvery(actions.GET_TOTAL_DEPOSIT, function* ({ payload }) {
    const { vaultAddress, tokenAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(0) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    // const accounts = yield call(web3.eth.getAccounts)

    const totalDepositAmount = yield call(getTotalDepositAsync, instance);

    if (tokenAddress != "") {
      const tokenInstance = new web3.eth.Contract(TOKEN_ABI, tokenAddress)
      const decimal = yield call(getDecimalAsync, tokenInstance)
      // const totalDepositAmountVal = (totalDepositAmount / Math.pow(10, decimal)).toFixed(decimal)
      // console.log(totalDepositAmount)
      const totalDepositAmountVal = new BigNumber(totalDepositAmount).div(new BigNumber(10).pow(decimal))
      callback(totalDepositAmountVal.toFixed());
    } else {
      // const totalDepositAmountVal = (totalDepositAmount / Math.pow(10, 18)).toFixed(18)
      const totalDepositAmountVal = new BigNumber(totalDepositAmount).div(new BigNumber(10).pow(18))
      callback(totalDepositAmountVal.toFixed());
    }
  });
}

export function* approveToken() {
  yield takeLatest(actions.APPROVE_TOKEN, function* ({ payload }) {
    const { tokenAddress, vaultAddress, callback } = payload;

    console.log("before web3");
    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false)
      return
    }
    
    const abi = TOKEN_ABI;
    const instance = new web3.eth.Contract(abi, tokenAddress);
    console.log("after instance web3");
    // const instance = new web3.eth.Contract(abi, "0x201850680b79bbeff4e00684248b237a77bded0c")

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts);
    console.log("aaccount", accounts);
    // Check balance
    const tokenBalance = yield call(getBalanceAsync, instance, accounts[0]);
    console.log("tokenBalance - approve token", tokenBalance);

    // approve with max balance
    const approveResult = yield call(
      approveAsync,
      instance,
      web3,
      tokenBalance,
      accounts[0],
      vaultAddress
    );
    console.log(approveResult);
    callback(approveResult.status);
  });
}

export function* depositToken() {
  yield takeLatest(actions.DEPOSIT_TOKEN, function* ({ payload }) {
    const { vaultAddress, tokenAddress, amount, callback } = payload;
    console.log("test", payload);
    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }

    if (vaultAddress != ADDR_ETH_VAULT) {
      const abi = ABI_VAULT;

      const instance = new web3.eth.Contract(abi, vaultAddress);
      console.log("instance", instance);
      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);

      const depositResult = yield call(
        depositAsync,
        instance,
        tokenAddress,
        web3,
        amount,
        accounts[0]
      );

      console.log("DepositResult ", depositResult);
      callback(depositResult.status);
    } else {
      const abi = ABI_VAULT_ETH;

      const instance = new web3.eth.Contract(abi, vaultAddress);
      console.log("instance", instance);
      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);

      const depositResult = yield call(
        depositEthAsync,
        instance,
        web3,
        amount,
        accounts[0]
      );
      console.log("DepositResultEth ", depositResult);
      callback(depositResult.status);
    }
  });
}

export function* depositAllToken() {
  yield takeLatest(actions.DEPOSIT_TOKEN_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }

    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts);

    const depositAllResult = yield call(
      depositAllAsync,
      instance,
      web3,
      accounts[0]
    );
    console.log(depositAllResult);
    callback(depositAllResult.status);
  });
}

export function* withdrawToken() {
  yield takeLatest(actions.WITHDRAW_TOKEN, function* ({ payload }) {
    const { vaultAddress, tokenAddress, amount, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts);

    const withdrawResult = yield call(
      withdrawAsync,
      instance,
      tokenAddress,
      web3,
      amount,
      accounts[0]
    );
    console.log(withdrawResult);
    callback(withdrawResult.status);
  });
}

export function* withdrawAllToken() {
  yield takeLatest(actions.WITHDRAW_TOKEN_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts);

    const withdrawAllResult = yield call(
      withdrawAllAsync,
      instance,
      web3,
      accounts[0]
    );
    console.log(withdrawAllResult);
    callback(withdrawAllResult.status);
  });
}

export function* claimReward() {
  yield takeLatest(actions.CLAIM_REWARD, function* ({ payload }) {
    const { vaultAddress, amount, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }
    const abi = ABI_VAULT;
    const instance = new web3.eth.Contract(abi, vaultAddress);

    // Get Wallet Account
    const accounts = yield call(web3.eth.getAccounts);

    const claimRewardResult = yield call(
      claimRewardAsync,
      instance,
      web3,
      amount,
      accounts[0]
    );

    console.log(claimRewardResult);
    callback(claimRewardResult.status);
  });
}

export function* claimRewardAll() {
  yield takeLatest(actions.CLAIM_REWARD_ALL, function* ({ payload }) {
    const { vaultAddress, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }

    if (vaultAddress != ADDR_ETH_VAULT) {
      const abi = ABI_VAULT;
      const instance = new web3.eth.Contract(abi, vaultAddress);

      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);

      const claimRewardAllResult = yield call(
        claimRewardAllAsync,
        instance,
        web3,
        accounts[0]
      );
      console.log(claimRewardAllResult);
      callback(claimRewardAllResult.status);
    } else {
      const abi = ABI_VAULT_ETH;
      const instance = new web3.eth.Contract(abi, vaultAddress);

      const accounts = yield call(web3.eth.getAccounts);

      const claimRewardAllResult = yield call(
        claimRewardAllAsync,
        instance,
        web3,
        accounts[0]
      );
      console.log(claimRewardAllResult);
      callback(claimRewardAllResult.status);
    }
  });
}

export function* sendRewardAmount() {
  yield takeLatest(actions.SEND_REWARD_AMOUNT, function* ({ payload }) {
    console.log("Payload", payload);
    const { vaultAddress, amount, callback } = payload;

    let web3;
    try {
      web3 = yield call(getWeb3);
    } catch(e) {
      callback(false) 
      return
    }

    if (vaultAddress != ADDR_ETH_VAULT) {
      const abi = ABI_VAULT;
      const instance = new web3.eth.Contract(abi, vaultAddress);

      // Get Wallet Account
      const accounts = yield call(web3.eth.getAccounts);

      const sendRewardResult = yield call(
        sendRewardAsync,
        instance,
        web3,
        amount,
        accounts[0]
      );
      console.log(sendRewardResult);
      callback(sendRewardResult.status);
    } else {
      const abi = ABI_VAULT_ETH;
      const instance = new web3.eth.Contract(abi, vaultAddress);

      const accounts = yield call(web3.eth.getAccounts);

      const sendRewardResult = yield call(
        sendRewardAsync,
        instance,
        web3,
        amount,
        accounts[0]
      );
      console.log(sendRewardResult);
      callback(sendRewardResult.status);
    }
  });
}

export function* getEthPrice() {
  yield takeLatest(actions.GET_ETH_PRICE, function* () {
    let data = yield call(lookUpPrices, ["ethereum"]);

    yield put({
      type: actions.GET_ETH_PRICE_SUCCESS,
      ethPrice: parseFloat(data.ethereum.usd),
    });
  });
}

export default function* rootSaga() {
  yield all([
    fork(getBalance),
    fork(getAllowance),
    fork(getAvailableRewardAmount),
    fork(getDepositBalances),
    fork(getRewardBalances),
    fork(getTotalDeposit),
    fork(approveToken),
    fork(depositToken),
    fork(depositAllToken),
    fork(withdrawToken),
    fork(withdrawAllToken),
    fork(claimReward),
    fork(claimRewardAll),
    fork(sendRewardAmount),
    fork(getEthPrice),
    fork(getWeb3Instance),
  ]);
}
