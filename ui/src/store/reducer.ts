import createStore from "./store";

// How to use store
// https://gist.github.com/SeedyROM/af582797077471270df4c9dcbb18b305#file-examplewithprovider-tsx

interface InitialState {
  userID: string | null;
  expireToken: string | null;
}
interface Action {
  type: string;
}

const initialState: InitialState = {
  userID: null,
  expireToken: null
};

const reducer = (state: InitialState, action: any) => {
  console.log(state);
  switch (action.type) {
    case "add":
      return { userID: "testId", expireToken: "3600" };
    case "remove":
      return { userID: null, expireToken: null };
    default:
      return state;
  }
};

const { Context, Provider, Consumer } = createStore(reducer, initialState);

export { Context, Provider, Consumer };
