/** This is login page that show how to use it */

import React from "react";
import { login } from "./utils";
import "./style.css";
import { useStrategy } from "./CustomUseReducer";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

export default function LoginUseReducer() {
  /** Use this hook like normal useState
   * Destructor two argument state and dispatch
   * Dispatch is going to work just like redux dispatch and change the state
   */
  const { state, dispatch } = useStrategy(initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    /** You need to pass an object includes type (work as case in switch:case redux reducer)
     * and payload which includes your states (exactly works like redux dispatch)
     */
    dispatch({
      type: "login",
      payload: {
        isLoading: true,
        error: "",
      },
    });
    try {
      await login({ username, password });
      dispatch({
        type: "success",
        payload: { isLoggedIn: true, isLoading: false },
      });
    } catch (error) {
      dispatch({
        type: "error",
        payload: {
          error: "Incorrect username or password!",
          isLoggedIn: false,
          isLoading: false,
          username: "",
          password: "",
        },
      });
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button
              onClick={() =>
                dispatch({
                  type: "logOut",
                  payload: { isLoggedIn: false, username: "", password: "" },
                })
              }
            >
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  payload: { username: e.currentTarget.value },
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  payload: { password: e.currentTarget.value },
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
