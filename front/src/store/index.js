import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers";

export const Store = React.createContext();
export const Dispatch = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // NOTE: we are splitting the store and action providers as suggested by
  // https://kentcdodds.com/blog/how-to-optimize-your-context-value
  // This prevents unnecessary re-renders where components only use Action context
  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{props.children}</Dispatch.Provider>
    </Store.Provider>
  );
}

// NOTE: Exporting our Store and Action contexts as hooks for convenience
// https://kentcdodds.com/blog/how-to-use-react-context-effectively
// Naming these useStore and useAppActions to avoid clash with native useState
export function useStore() {
  const context = React.useContext(Store);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

export function useDispatch() {
  const context = React.useContext(Dispatch);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a StoreProvider");
  }
  return context;
}
