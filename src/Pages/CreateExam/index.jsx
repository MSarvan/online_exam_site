import React, { useState } from "react";
import "./createexam.scss";
import { useNavigate } from "react-router-dom";
import { useExamContext } from "../../Context/ExamContext";
import Question from "../../Components/Question";

const CreateExam = () => {
  const { qns, setQns, examName, setExamName, fields, setFields } =
    useExamContext;
  const [divCount, setDivCount] = useState(0);
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setQns([...qns, fields]);
    setDivCount(divCount + 1);
    if (fields?.question) {
      console.log(fields, "fields");
    }
  };

  const handleSubmit = () => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
      navigate("/");
    }, 3000);
  };

  // const renderDivs = () => {
  //   const divs = [];
  //   for (let i = 0; i < divCount; i++) {
  //     divs.push(
  //       <div className="question-container" key={i}>
  //         <div className="question">
  //           <div>{i + 1}.</div>
  //           <div className="qn-txt">
  //             <input
  //               type="text"
  //               placeholder="Enter your question.."
  //               onChange={(e) =>
  //                 setQns((prevQns) => [...prevQns, { ...obj, question: e.target.value }])
  //                 // setQns([...qns, { ...obj, ["question"]: e.target.value }])
  //               }
  //             />
  //           </div>
  //         </div>
  //         <div className="options">
  //           <div className="each-option">
  //             <div>A.</div>
  //             <div className="option-txt">
  //               <input
  //                 type="text"
  //                 placeholder="Enter option A.."
  //                 onChange={(e) =>
  //                   setQns([...qns, { ...obj, ["option_a"]: e.target.value }])
  //                 }
  //               />
  //             </div>
  //           </div>
  //           <div className="each-option">
  //             <div>B.</div>
  //             <div className="option-txt">
  //               <input
  //                 type="text"
  //                 placeholder="Enter option B.."
  //                 onChange={(e) =>
  //                   setQns([...qns, { ...obj, ["option_b"]: e.target.value }])
  //                 }
  //               />
  //             </div>
  //           </div>
  //           <div className="each-option">
  //             <div>C.</div>
  //             <div className="option-txt">
  //               <input
  //                 type="text"
  //                 placeholder="Enter option C.."
  //                 onChange={(e) =>
  //                   setQns([...qns, { ...obj, ["option_c"]: e.target.value }])
  //                 }
  //               />
  //             </div>
  //           </div>
  //           <div className="each-option">
  //             <div>D.</div>
  //             <div className="option-txt">
  //               <input
  //                 type="text"
  //                 placeholder="Enter option D.."
  //                 onChange={(e) =>
  //                   setQns([...qns, { ...obj, ["option_d"]: e.target.value }])
  //                 }
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="answer">
  //           <input
  //             type="text"
  //             placeholder="Enter the correct answer.."
  //             onChange={(e) =>
  //               setQns([...qns, { ...obj, ["answer"]: e.target.value }])
  //             }
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  //   return divs;
  // };

  return (
    <div className="createexam">
      <div className={isloading ? "overlay" : ""}></div>
      <div className="exam-title">
        <input
          type="text"
          placeholder="Enter the name of the Exam.."
          // onChange={(e) => setExamName(e.target.value)}
          // value={examName}
        />
      </div>

      {qns?.map((e, i) => {
        return <Question />;
      })}

      <div className="button-container">
        <button
          className="buttons"
          onClick={handleButtonClick}
          // style={{ pointerEvents: examName ? "" : "none" }}
        >
          Add Question
        </button>
        <button className="buttons" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {isloading && (
        <div className="loader">
          <img
            src="https://cdn.dribbble.com/users/1238709/screenshots/4069900/media/5c33ad04385941a4968196a7445294eb.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  );
};

export default CreateExam;
