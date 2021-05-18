export const WEB3_LOADED = "WEB3_LOADED";
export const WEB3_ACCOUNT_LOADED = "WEB3_ACCOUNT_LOADED";
export const PLAY_LOADED = "PLAY_LOADED"

export const web3Loaded = (connection) => {
  return {
    type: WEB3_LOADED,
    connection,
  };
};

export const web3AccountLoaded = (account) => {
  return {
    type: WEB3_ACCOUNT_LOADED,
    account,
  };
};

export const playLoaded = (play) => {
  return {
    type: PLAY_LOADED,
    play
  }
}

