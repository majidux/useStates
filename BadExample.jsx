import React, { useState } from "react";

const BadExample = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleName = ({ target: { value } }) => {
    setName(value);
  };
  const handleSurname = ({ target: { value } }) => {
    setSurname(value);
  };
  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePhone = ({ target: { value } }) => {
    setPhone(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const handleRePassword = ({ target: { value } }) => {
    setRePassword(value);
  };
  return (
    <>
      BadExample
      <input name="name" type="text" value={name} onChange={handleName} />
      <input name="surname" value={surname} onChange={handleSurname} />
      <input name="email" type="text" value={email} onChange={handleEmail} />
      <input name="phone" type="text" value={phone} onChange={handlePhone} />
      <input name="password" value={password} onChange={handlePassword} />
      <input name="rePassword" value={rePassword} onChange={handleRePassword} />
    </>
  );
};

export default BadExample;
