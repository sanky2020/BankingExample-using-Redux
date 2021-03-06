import React from "react";
import Bank from "./component/Bank";
import "../src/App.css";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector((state) => state.amount);

  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <p>
        Date : {date}, Time: {time}
      </p>
      <h1>Account Balance: {amount} INR</h1>

      <Bank />
    </div>
  );
}

export default App;

//npm i redux react-redux redux-thunk
