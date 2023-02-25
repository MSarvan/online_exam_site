import React from "react";
import { useExamContext } from "../Context/ExamContext";

const Question = () => {
  const { qns, setQns, fields, setFields } = useExamContext;

  return (
    <div className="question-container">
      <div className="question">
        <div>1.</div>
        <div className="qn-txt">
          <input
            type="text"
            placeholder="Enter your question.."
            onChange={(e) =>
              setFields({ ...fields, question: e.target.value })
            }
          />
        </div>
      </div>
      <div className="options">
        <div className="each-option">
          <div>A.</div>
          <div className="option-txt">
            <input
              type="text"
              placeholder="Enter option A.."
              onChange={(e) =>
                setFields({ ...fields, option_a: e.target.value })
              }
            />
          </div>
        </div>
        <div className="each-option">
          <div>B.</div>
          <div className="option-txt">
            <input
              type="text"
              placeholder="Enter option B.."
              onChange={(e) =>
                setFields({ ...fields, option_b: e.target.value })
              }
            />
          </div>
        </div>
        <div className="each-option">
          <div>C.</div>
          <div className="option-txt">
            <input
              type="text"
              placeholder="Enter option C.."
              onChange={(e) =>
                setFields({ ...fields, option_c: e.target.value })
              }
            />
          </div>
        </div>
        <div className="each-option">
          <div>D.</div>
          <div className="option-txt">
            <input
              type="text"
              placeholder="Enter option D.."
              onChange={(e) =>
                setFields({ ...fields, option_d: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div className="answer">
        <input
          type="text"
          placeholder="Enter the correct answer.."
          onChange={(e) =>
            setFields({ ...fields, answer: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default Question;
