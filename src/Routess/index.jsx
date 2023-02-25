import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Answer from "../Pages/Answers";
import AttendExam from "../Pages/AttendExam";
import CreateExam from "../Pages/CreateExam";
import HomePage from "../Pages/HomePage";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateExam />} />
      <Route path="/attend" element={<AttendExam />} />
      <Route path="/answers" element={<Answer />} />
    </Routes>
  );
};

export default Routess;
