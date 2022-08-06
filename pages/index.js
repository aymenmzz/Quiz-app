import React from "react";
import { push } from "next/router";

export default function Home({ dark }) {
  return (
    <div
      className={`flex flex-col items-center p-0 m-0 h-screen pt-64 ${
        dark ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      <h1
        className={`${
          dark ? "text-blue-200" : "text-blue-900"
        } font-bold text-3xl tracking-wider`}
        onClick={() => {
          increment();
        }}
      >
        Quizzical
      </h1>
      <p
        className={`${
          dark ? "text-blue-200" : "text-blue-900"
        } font-semibold my-5`}
      >
        The quiz that will expend your overall culture !
      </p>
      <button
        className="px-16 py-3 rounded-lg text-white bg-blue-900 font-semibold"
        onClick={() => push("/quiz")}
      >
        {" "}
        Start quiz
      </button>
    </div>
  );
}
