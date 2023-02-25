import React, { useState } from "react";
import "./createexam.scss";

const CreateExam = () => {
  const [divCount, setDivCount] = useState(0);

  const handleButtonClick = () => {
    setDivCount(divCount + 1);
  };

  const renderDivs = () => {
    const divs = [];
    for (let i = 0; i < divCount; i++) {
      divs.push(
        <div className="question-container" key={i}>
          <div className="question">
            <div>{i+1}.</div>
            <div className="qn-txt">
              <input type="text" placeholder="Enter your question.." />
            </div>
          </div>
          <div className="options">
            <div className="each-option">
              <div>A.</div>
              <div className="option-txt">
                <input type="text" placeholder="Enter option A.." />
              </div>
            </div>
            <div className="each-option">
              <div>B.</div>
              <div className="option-txt">
                <input type="text" placeholder="Enter option B.." />
              </div>
            </div>
            <div className="each-option">
              <div>C.</div>
              <div className="option-txt">
                <input type="text" placeholder="Enter option C.." />
              </div>
            </div>
            <div className="each-option">
              <div>D.</div>
              <div className="option-txt">
                <input type="text" placeholder="Enter option D.." />
              </div>
            </div>
          </div>
          <div className="answer">
            <input type="text" placeholder="Enter the correct answer.." />
          </div>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="createexam">
      <div className="exam-title">
        <input type="text" placeholder="Enter the name of the Exam.." />
      </div>

      {renderDivs()}

      <div className="button-container">
        <button className="buttons" onClick={handleButtonClick}>
          Add Question
        </button>
        <button className="buttons">Submit</button>
      </div>
    </div>
  );
};

export default CreateExam;
