import React from "react";
import "./Landing.css";
import {useNavigate} from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  return (
    <div className="start-menu">
      <button
        className="get-results-btn"
        onClick={() => {
          navigate("/getresults");
        }}>
        Get Results!
      </button>
      <button
        className="play-quiz-btn"
        onClick={() => {
          navigate("/startquiz");
        }}>
        Play Quiz!
      </button>
    </div>
  );
}

export default Landing;
