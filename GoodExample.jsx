import React from "react";

import { useStates } from "./CustomUseReducer";

const initialState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  password: "",
  rePassword: "",
};

const GoodExample = () => {
  const { state, dispatch } = useStates(initialState);
  const { name, surname, email, phone, password, rePassword } = state;
  const onChange = ({ target: { name, value } }) => {
    dispatch({
      payload: {
        [name]: value,
      },
    });
  };
  return (
    <>
      GoodExample
      <input name="name" type="text" value={name} onChange={onChange} />
      <input name="surname" type="text" value={surname} onChange={onChange} />
      <input name="email" type="text" value={email} onChange={onChange} />
      <input name="phone" type="text" value={phone} onChange={onChange} />
      <input name="password" value={password} onChange={onChange} />
      <input name="rePassword" value={rePassword} onChange={onChange} />
    </>
  );
};

export default GoodExample;
