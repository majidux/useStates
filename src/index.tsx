/** This is a custom hook based on useReducer react api
 * Inspired by strategy design pattern (Its not strategy!!)
 * I'm going to use it in my future projects
 * Use for complex forms or components they have a lot of states
 * You can also add callback functions for asynchronous logics
 */

import {
  useReducer,
  useRef,
  useCallback,
  useEffect,
  SetStateAction,
} from "react";

type Callback<T> = (value?: T) => void;
type DispatchWithCallback<T> = (value: T, callback?: Callback<T>) => void;
const actionReducer = (state: any, action: any) => {
  return {
    ...state,
    ...action,
  };
};

export function useStates<T>(
  initialState: T | (() => T)
): [T, DispatchWithCallback<SetStateAction<T>>] {
  const [state, _setState] = useReducer(actionReducer, initialState);

  const callbackRef = useRef<Callback<T>>();
  const isFirstCallbackCall = useRef<boolean>(true);

  const setState = useCallback(
    (setStateAction: SetStateAction<T>, callback?: Callback<T>): void => {
      callbackRef.current = callback;
      _setState(setStateAction);
    },
    []
  );

  useEffect(() => {
    if (isFirstCallbackCall.current) {
      isFirstCallbackCall.current = false;
      return;
    }
    callbackRef.current?.(state);
  }, [state]);

  return [state, setState];
}
