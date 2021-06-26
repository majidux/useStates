# useStates

A custom hook based on useReducer and inspired by strategy design pattern for having multiple states


###### With npm:
```javascript
npm install --save use-states
```

###### With yarn:
```javascript
yarn add use-states
```


This is how you are going to use it : =>
```javascript
import { useStates } from "use-states";

const initialState = {
  name: "",
};

const Example = () => {
  const [state, setState] = useStates<any>(initialState);
  const { name } = state;
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
