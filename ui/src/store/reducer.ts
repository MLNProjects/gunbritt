import createStore from "./store";
import produce from "immer";
import * as types from "./type";

// How to use store
// https://gist.github.com/SeedyROM/af582797077471270df4c9dcbb18b305#file-examplewithprovider-tsx

interface InitialState {
  readonly idToken: string | null;
  readonly email: string | null;
  readonly refreshToken: string | null;
  readonly expiresIn: string | null;
  readonly userId: string | null;
}
interface Action {
  type: string;
  payload?: any;
}

const initialState: InitialState = {
  idToken: null,
  email: null,
  refreshToken: null,
  expiresIn: null,
  userId: null
};

const reducer = (state: InitialState, action: Action) => {
  return produce(state, draft => {
    switch (action.type) {
      case types.SET_TOKEN_AND_USERID:
        draft.idToken = action.payload.idtoken;
        draft.email = action.payload.email;
        draft.refreshToken = action.payload.refreshToken;
        draft.expiresIn = action.payload.expiresIn;
        draft.userId = action.payload.userId;
        break;
      default:
        return draft;
    }
  });
};

const { Context, Provider, Consumer } = createStore(reducer, initialState);

export { Context, Provider, Consumer };
