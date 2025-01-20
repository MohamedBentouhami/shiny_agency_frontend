import { Link, useParams } from "react-router-dom";
import Results from "../Results";

import "../../styles/Survey.css";
import { Loader } from "../../utils/loader/Atoms";
import { useFetch } from "../../utils/Hooks";
import { useState } from "react";

function Survey() {
  let { questionNumber } = useParams();
  questionNumber = Number(questionNumber);
  let nextQuestion = questionNumber + 1;
  let prevQuestion = questionNumber === 1 ? 1 : questionNumber - 1;

  const { data, isLoading, error } = useFetch("http://localhost:8000/survey");
  const { surveyData } = data;
  const [noIsActive, toggleNoActive] = useState(false);
  const [yesIsActive, toggleYesActive] = useState(false);

  const answers = new Map();

  if (error) {
    return <span>Some troubles</span>;
  }

  const yesTreatment = () => {
    toggleYesActive(!yesIsActive);
    if (noIsActive) {
      toggleNoActive(false);
    }
    answers.set(questionNumber - 1, 0);
    console.log("Map", answers);
  };
  const noTreatment = () => {
    toggleNoActive(!noIsActive);
    if (yesIsActive) {
      toggleYesActive(false);
    }
    answers.set(questionNumber - 1, 1);
    console.log("Map", answers);
  };
  return (
    <div className="survey-page">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Questions {questionNumber}</h1>
          <p>{surveyData && surveyData[questionNumber]}</p>
          <div className="answers">
            <button
              onClick={() => yesTreatment()}
              className={`${yesIsActive && "clicked-btn"}`}
            >
              Yes
            </button>
            <button
              onClick={() => noTreatment()}
              className={`${noIsActive && "clicked-btn"}`}
            >
              No
            </button>
          </div>
          <div className="link-wrapper">
            <Link to={`/survey/${prevQuestion}`} onClick={() => {}}>
              Previous
            </Link>
            <span> </span>
            {questionNumber === 6 ? (
              <Link to={`/results/`}>Results</Link>
            ) : (
              <Link to={`/survey/${nextQuestion}`}>Next</Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Survey;
