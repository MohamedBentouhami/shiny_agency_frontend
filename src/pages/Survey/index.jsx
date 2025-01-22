import { Link, useParams } from "react-router-dom";
import Results from "../Results";

import "../../styles/Survey.css";
import { Loader } from "../../utils/loader/Atoms";
import { useFetch } from "../../utils/Hooks";
import { useContext, useState } from "react";
import { SurveyContext } from "../../utils/context";
import { element } from "prop-types";

function Survey() {
  let { questionNumber } = useParams();
  questionNumber = Number(questionNumber);
  let nextQuestion = questionNumber + 1;
  let prevQuestion = questionNumber === 1 ? 1 : questionNumber - 1;

  const { data, isLoading, error } = useFetch("http://localhost:8000/survey");
  const { surveyData } = data;
  const [noIsActive, activateNoBtn] = useState(false);
  const [yesIsActive, activateYesBtn] = useState(false);

  const { saveAnswers, answers } = useContext(SurveyContext);
  function saveReply(answer, btnType) {
    saveAnswers({ [questionNumber]: answer });
    if (btnType === "btn-yes") {
      activateYesBtn(!yesIsActive);
      activateNoBtn(false);
    }
    if (btnType === "btn-no") {
      activateNoBtn(!noIsActive);
      activateYesBtn(false);
    }
  }

  if (error) {
    return <span>Some troubles</span>;
  }

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
              onClick={() => saveReply(true, "btn-yes")}
              className={`${yesIsActive && "clicked-btn"}`}
            >
              Yes
            </button>
            <button
              onClick={() => saveReply(false, "btn-no")}
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
