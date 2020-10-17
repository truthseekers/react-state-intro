import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [textField, setTextField] = useState("");
  const [firstName, setFirstName] = useState("");
  const [operator, setOperator] = useState("subtract");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleNameFieldChange = (event) => {
    setTextField(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstName(textField);
    setTextField("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>The current count is: {count}</h3>

        <form>
          <label>Choose an operator</label>
          <select
            value={operator}
            onChange={(event) => {
              setOperator(event.target.value);
            }}
          >
            <option value="add">+</option>
            <option value="multiply">*</option>
            <option value="subtract">-</option>
            <option value="divide">/</option>
          </select>
          <input type="number" value="" />
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Your Name"
              value={textField}
              onChange={handleNameFieldChange}
              name="name"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h3>Hello {firstName}! How are you today?</h3>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
