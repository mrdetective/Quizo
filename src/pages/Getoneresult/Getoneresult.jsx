import React from "react";
import "./Getoneresult.css";

function Getoneresult() {
  return (
    <div className="get-one-result-box">
      <label>Enter username</label>
      <input className="username-input" placeholder="Enter username" />
      <label>Enter quiz date</label>
      <input className="date-input" type="date" />
      <label>Enter quiz time</label>
      <input className="time-input" type="time" />
      <button className="get-one-result">Get result</button>
    </div>
  );
}

export default Getoneresult;
