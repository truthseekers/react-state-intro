import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [textField, setTextField] = useState("");
  const [firstName, setFirstName] = useState("");

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
        <button onClick={increaseCount}>count + 1</button>
        <button onClick={decreaseCount}>count - 1</button>

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
