import React from "react";

const Inputform = (props) => {
  return (
    <>
      titile:
      <input
        type="text"
        name="title"
        onChange={(e) =>
          props.onChange({
            ...props.inputData,
            [e.target.name]: e.target.value,
          })
        }
      />{" "}
      <br />
      amount:
      <input
        type="text"
        name="amount"
        onChange={(e) =>
          props.onChange({
            ...props.inputData,
            [e.target.name]: e.target.value,
          })
        }
      />{" "}
      <br />
      date:
      <input
        type="date"
        name="date"
        onChange={(e) =>
          props.onChange({
            ...props.inputData,
            [e.target.name]: new Date(e.target.value),
          })
        }
      />{" "}
      <br />
    </>
  );
};

export default Inputform;
