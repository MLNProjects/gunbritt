import React, { Dispatch, Reducer } from "react";

const createStore = <S extends {}, A extends {}>(reducer: Reducer<S, A>, initialState: S) => {
  const contextValues: [S, Dispatch<A>] = [initialState, action => {}];

  const Context = React.createContext<[S, Dispatch<A>]>(contextValues);

  const Provider: React.FC = (props: any) => {
    const store = React.useReducer(reducer, initialState);

    return <Context.Provider value={store}>{props.children}</Context.Provider>;
  };

  return { Context, Provider, Consumer: Context.Consumer };
};

interface InitialState {
  userID: string | null;
  expireToken: string | null;
}

const initialState: InitialState = { userID: null, expireToken: null };
const reducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case "add":
      return state;
    default:
      return state;
  }
};

const { Context, Provider, Consumer } = createStore(reducer, initialState);

export { Context, Provider, Consumer };
