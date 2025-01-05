import { Link, useParams } from "react-router-dom";
import Results from "../Results";
import { useEffect, useState } from "react";

import "../../styles/Survey.css";

function Survey() {
  let { questionNumber } = useParams();
  questionNumber = Number(questionNumber);
  let nextQuestion = questionNumber + 1;
  let prevQuestion = questionNumber === 1 ? 1 : questionNumber - 1;
  const [questions, setQuestion] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/survey").then((response) =>
      response
        .json()
        .then(({ surveyData }) => setQuestion(surveyData))
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div className="survey-page">
      {questionNumber === 10 ? (
        <Results />
      ) : (
        <div>
          <h1>Questions {questionNumber}</h1>
          <p>{questions[questionNumber]}</p>
          <div className="link-wrapper">
            <Link to={`/survey/${prevQuestion}`} onClick={() => {}}>
              Previous
            </Link>
            <span> </span>
            <Link to={`/survey/${nextQuestion}`}>Next</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Survey;
