import React from "react";

export default function Answers(props) {
  //   const [answers, setAnswers] = React.useState(props.answers)
  const { dark } = props;

  const capital = (str) => {
    const val = str[0].toUpperCase();
    const rest = str.substring(1);
    return val + rest;
  };

  function style(selected, end, right) {
    if (end) {
      if (selected && !right) {
        return "bg-red-200 opacity-30";
      }
      if (right) return "bg-green-300 border-none";

      if (!selected && !right) {
        return "bg-white opacity-30";
      }
    } else {
      return selected
        ? "bg-indigo-300 text-blue-800"
        : props.dark
        ? "bg-gray-500"
        : "bg-gray-100";
    }
  }

  const render = props.answers.map((answe, index) => {
    return (
      <button
        key={index}
        onClick={() => props.handleClick(answer.text, props.id)}
        className={`${style(
          answer.isSelected,
          props.end,
          answer.isRight
        )} rounded-lg border${answer.isSelected ? "-none" : ""} ${
          dark
            ? "border-blue-200 text-blue-200"
            : "border-blue-900 text-blue-900"
        } button-select  font-semibold`}
      >
        {" "}
        {capital(answer.text)}
      </button>
    );
  });

  return (
    <div key={props.key}>
      <p
        className={`${
          dark ? "text-blue-200" : "text-blue-900"
        } font-bold text-xl text-center py-3`}
      >
        {" "}
        {props.question}{" "}
      </p>
      <div className="button-container">{render}</div>
    </div>
  );
}
