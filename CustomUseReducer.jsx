/** This is a custom hook based on useReducer react api
 * Inspired by strategy design pattern (Its not strategy!!)
 * I'm going to use it in my future projects
 * Use for complex forms or components they have a lot of states
 */
import { useReducer } from "react";
const actionReducer = (state, action) => {
  return {
    ...state,
    ...action,
  };
};

export const useStates = (initialState) => {
  const [state, setState] = useReducer(actionReducer, initialState);
  const handleChange = (type) => {
    setState(type);
  };
  return {
    state,
    setState: handleChange,
  };
};
