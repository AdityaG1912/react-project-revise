import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    if (!(counter === 20)) {
      const count = counter + 1;
      setCounter(count);
    }
  };
  const removeValue = () => {
    if (!(counter === 0)) {
      const count = counter - 1;
      setCounter(count);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value : {counter} </h3>
      <br></br>
      <button onClick={addValue}>Add Value</button>
      <hr></hr>
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
