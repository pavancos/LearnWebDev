import React, {useState,useReducer} from "react";
import ReactDOM from 'react-dom';

const reducer = (state, action) =>{
  switch(action.type){
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
};

const App = () =>{
  const [count,setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <div>
      <h1>useState</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));