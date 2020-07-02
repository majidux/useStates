import { useReducer } from "react";
export function actionReducer(state, action) {
  return {
    ...state,
    ...action.payload,
  };
}

export function useStrategy(initialState) {
  const [state, setState] = useReducer(actionReducer, initialState);
  const handleChange = (type) => {
    setState(type);
  };
  return {
    state,
    dispatch: handleChange,
  };
}
