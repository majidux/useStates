# useStates

A custom hook based on useReducer and inspired by strategy design pattern for having multiple states


This is how you are going to use : =>
```javascript
import { useStates } from "./CustomUseReducer";

const initialState = {
  name: "",
};

const GoodExample = () => {
  const [state, setState] = useStates(initialState);
  const { name, surname, email, phone, password, rePassword } = state;
  const onChange = ({ target: { name, value } }) => {
    setState(
      {
        [name]: value,
      },
      () => console.log("Callback function")
    );
  };
  return (
    <>
      <input name="name" type="text" value={name} onChange={onChange} />
    </>
  );
};
```
