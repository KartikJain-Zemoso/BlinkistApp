import React, { useState } from "react";
import Inputform from "./InputForm";

const ExpenseForm = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });
  //   const handleInputChange = (e) => {
  //     setInputData({
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  console.log(inputData);
  return (
    <div>
      <Inputform inputData={inputData} onChange={setInputData} />
    </div>
  );
};

export default ExpenseForm;
