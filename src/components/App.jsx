import React, { useEffect } from "react";
import { connect } from "react-redux";

import { accountSelector } from "../store/selectors";

import {
  loadWeb3,
  loadAccount,
  loadPlay
} from "../store/interactions";

const App = ({ dispatch, account }) => {
  useEffect(() => {
    loadBlockchain(dispatch);
  }, [dispatch]);

  const loadBlockchain = async (dispatch) => {
    // Modern dapp browsers...
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = loadWeb3(dispatch);
        const networkId = await web3.eth.net.getId();
        await loadAccount(dispatch, web3);
        const play = await loadPlay(web3, networkId, dispatch)
        if (!play) {
          window.alert(
            "Play smart contract not detected on the current network. Please select another network with Metamask"
          );
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }
    // Non-dapp browsers...
    else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  return (
        <div>
          <h1 className="font-bold text-green-500">Hello</h1>
        </div>
  );
};

const mapStateToProps = (state) => {
  return {
    account: accountSelector(state),
  };
};

export default connect(mapStateToProps)(App);
