import Web3 from "web3";

import Play from '../abis/Play.json'
import {
  web3Loaded,
  web3AccountLoaded,
  playLoaded,
} from "./actions";

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(window.ethereum);
  dispatch(web3Loaded(web3));
  return web3;
};

export const loadAccount = async (dispatch, web3) => {
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];
  dispatch(web3AccountLoaded(account));
  return account;
};

export const loadPlay = async (web3, networkId, dispatch) => {
  try {
    const play = new web3.eth.Contract(Play.abi, Play.networks[networkId].address)
    dispatch(playLoaded(play))
    return play
  } catch (error) {
    console.log("Play Contract not Deployed")
    return null
  }
}

