import React from "react";
import { push } from "next/router";
import Answers from "../../components/Answers";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const fetcher = async () => {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
  );
  const data = await response.json();
  return data;
};

function Quiz(props) {
  function decode(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const [quiz, setQuiz] = React.useState(props.quiz && props.quiz.results);

  const [end, setEnd] = React.useState(() => false);
  const [points, setPoints] = React.useState(() => 0);

  const [questions, setQuestions] = React.useState(() => {
    const tab = [];
    quiz &&
      quiz.map((unit) => {
        tab.push(decode(unit.question));
      });
    return tab;
  });

  const [answers, setAnswers] = React.useState(() => {
    const retour = [];
    const tabfin = [];
    const rightAnswers = [];
    let i = 0;
    quiz &&
      quiz.map((unit) => {
        rightAnswers.push(unit.correct_answer);
        retour.push([...unit.incorrect_answers, unit.correct_answer].sort());
      });
    retour.map((tab) => {
      const tabtemp = [];
      tab.map((val) => {
        const decoded = decode(val);
        tabtemp.push({
          text: decoded,
          isSelected: false,
          isRight: decoded === rightAnswers[i],
        });
      });
      tabfin.push(tabtemp);
      i++;
    });
    return tabfin;
  });

  console.log(answers);

  //verifier si aucun bouton n'a été séléctionné
  const noSelect = () => {
    let retour = [true, true, true, true, true];
    answers.map((answer, index) => {
      answer.map((answ) => {
        if (answ.isSelected) retour[index] = false;
      });
    });
    const retourBool =
      retour[0] || retour[1] || retour[2] || retour[3] || retour[4];
    return retourBool;
  };

  console.log(noSelect());

  function handleClick(text, id) {
    if (!end) {
      const tab = [];
      if (id === 0) {
        answers[0].map((answer) => {
          answer.text === text
            ? tab.push({ ...answer, isSelected: !answer.isSelected })
            : tab.push({ ...answer, isSelected: false });
        });
      }
      if (id === 1) {
        answers[1].map((answer) => {
          answer.text === text
            ? tab.push({ ...answer, isSelected: !answer.isSelected })
            : tab.push({ ...answer, isSelected: false });
        });
      }
      if (id === 2) {
        answers[2].map((answer) => {
          answer.text === text
            ? tab.push({ ...answer, isSelected: !answer.isSelected })
            : tab.push({ ...answer, isSelected: false });
        });
      }
      if (id === 3) {
        answers[3].map((answer) => {
          answer.text === text
            ? tab.push({ ...answer, isSelected: !answer.isSelected })
            : tab.push({ ...answer, isSelected: false });
        });
      }
      if (id === 4) {
        answers[4].map((answer) => {
          answer.text === text
            ? tab.push({ ...answer, isSelected: !answer.isSelected })
            : tab.push({ ...answer, isSelected: false });
        });
      }
      const retour = [];
      answers.map((answer, index) => {
        if (index === id) retour.push(tab);
        else retour.push(answer);
      });
      setAnswers(retour);
    }
  }

  function handleEnd() {
    if (noSelect()) {
      toast.error(
        "Please select one answer for each question before verifying."
      );
    } else {
      if (points === 0) {
        answers.map((answersi) => {
          answersi.map((answer) => {
            if (answer.isSelected && answer.isRight) {
              setPoints((prevPoints) => prevPoints + 1);
            }
          });
        });
        setEnd(true);
      }
    }
  }

  return (
    <div className={props.dark ? "bg-gray-900" : "bg-gray-200"}>
      {questions.map((question, index) => {
        return (
          <Answers
            end={end}
            question={question}
            handleClick={handleClick}
            answers={answers[index]}
            id={index}
            key={index}
            dark={props.dark}
          />
        );
      })}
      <div
        className={`flex ${
          end ? "justify-around" : "justify-center"
        } items-center mt-12 pb-6`}
      >
        {end && (
          <p className="text-xl font-semibold  text-blue-900">
            Score : {points}/5{" "}
          </p>
        )}
        {end ? (
           <a href="https://quiz-app-aymenmzz.vercel.app">
          //<Link href="/">
            <button
              className="px-16 py-3 rounded-lg text-white bg-blue-900 font-semibold"
              onClick={() => push("/")}
            >
              Restart
            </button>
          </a>
          //</Link>
        ) : (
          <button
            className="px-16 py-3 rounded-lg text-white bg-blue-900 font-semibold"
            onClick={handleEnd}
          >
            Verify
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://opentdb.com/api.php?amount=5&category=9&type=multiple"
//   );
//   const data = await response.json();
//   return { props: { quiz: data } };
// }

export default Quiz;
