import { combineReducers } from "redux";

import {
  WEB3_LOADED,
  WEB3_ACCOUNT_LOADED,
  PLAY_LOADED
} from "./actions";

const web3 = (state = {}, action) => {
  switch (action.type) {
    case WEB3_LOADED:
      return { ...state, connection: action.connection };
    case WEB3_ACCOUNT_LOADED:
      return {
        ...state,
        account: action.account,
      };

    default:
      return state;
  }
};

const play = (state ={}, action) => {
  switch (action.type) {
    case PLAY_LOADED: 
    return {
      ...state,
      play: action.play
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  web3,
  play
});

export default rootReducer;
