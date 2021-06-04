import { useState, useEffect } from "react";

let gloabalState = {};

let listeners = [];

let actions = {};

// Custom Hook
export const useStore = (shouldListen = true) => {
  const setState = useState(gloabalState)[1];

  // Dispatching an action and setting new state and
  // also informing ( updating the state value ) within
  // our listeners or reducers

  const dispatch = (actionsName, payload) => {
    const newState = actions[actionsName](gloabalState, payload);
    gloabalState = {
      ...gloabalState,
      ...newState,
    };

    for (const listener of listeners) {
      listener(gloabalState);
    }
  };

  // Adding Listeners / Reducer when component mount and removing when unmount.
  useEffect(() => {
    if (shouldListen) {
    listeners.push(setState);
    }
    return () => {
        if (shouldListen) {
      listeners = listeners.filter((li) => li !== setState);
        }
    };
  }, [setState, shouldListen]);

  return [gloabalState, dispatch];
};

// We can update the state and our action by using this
// const and we have to pass the action

export const initStore = (userActions, initState) => {
  if (initState) {
    gloabalState = {
      ...gloabalState,
      ...initState,
    };
  }
  actions = {
    ...actions,
    ...userActions,
  };
};
