import React from "react";
import "./homepage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
        <h1>Welcome to Online Exam Portal</h1>
      <div className="homepage-container">
        <Link to={'/create'} className='buttons'>Create Exam</Link>
        <Link to={'/attend'} className='buttons'>Attend Exam</Link>
        <Link to={'/answers'} className='buttons'>Answer</Link>
      </div>
    </div>
  );
};

export default HomePage;
