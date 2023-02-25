import React from "react";
import "./createexam.scss";

const CreateExam = () => {
  return (
    <div className="createexam">
      <div className="exam-title">
        <input type="text" placeholder="Enter the name of the Exam.." />
      </div>
      <div className="question-container">
        <div className="question">
          <div>1.</div>
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
          <input type="text" placeholder="Enter the correct answer.."/>
        </div>
      </div>

      <div className="question-container">
        <div className="question">
          <div>1.</div>
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
          <input type="text" placeholder="Enter the correct answer.."/>
        </div>
      </div>

      <div className="question-container">
        <div className="question">
          <div>1.</div>
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
          <input type="text" placeholder="Enter the correct answer.."/>
        </div>
      </div>
      <div className="button-container">
        <button className="buttons">Add Question</button>
        <button className="buttons">Submit</button>
      </div>
    </div>
  );
};

export default CreateExam;
