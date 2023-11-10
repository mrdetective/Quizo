import React from "react";
import "./Getresults.css";
import {useNavigate} from "react-router-dom";

function Getresults() {
  const navigate = useNavigate();
  return (
    <div className="results-type">
      <button
        className="get-one-result-btn"
        onClick={() => {
          navigate("/getoneresult");
        }}>
        Get one result!
      </button>
      <button
        className="get-all-results-btn"
        onClick={() => {
          navigate("/getallresults");
        }}>
        Get all results!
      </button>
    </div>
  );
}

export default Getresults;
