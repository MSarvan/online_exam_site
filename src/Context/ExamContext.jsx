import React, { createContext, useContext, useState } from "react";

export const ExamContext = createContext({});

export const ExamContextProvider = ({ children }) => {
  const [examName, setExamName] = useState("");
  const [qns, setQns] = useState([
    {
      question: "",
      option_a: "",
      option_b: "",
      option_c: "",
      option_d: "",
      answer: "",
    },
  ]);
  const [fields, setFields] = useState({
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    answer: "",
  });

  return (
    <ExamContext.Provider
      value={{
        examName,
        setExamName,
        qns,
        setQns,
        fields,
        setFields,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExamContext = () => useContext(ExamContext);
