import React from "react";
import "./Getallresults.css";

function Getallresults() {
  return (
    <div className="get-all-results-box">
      <input
        className="get-all-results-username-input"
        placeholder="Enter username"
        type="text"
      />
      <button className="get-all-results">Get all results!</button>
    </div>
  );
}

export default Getallresults;
