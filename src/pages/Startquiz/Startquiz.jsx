import React from "react";
import "./Startquiz.css";

function Startquiz() {
  return (
    <div className="start-quiz-box">
      <input className="name-input" placeholder="Please enter your username" />
      <button className="start-quiz-btn">Start Quiz!</button>
    </div>
  );
}

export default Startquiz;
