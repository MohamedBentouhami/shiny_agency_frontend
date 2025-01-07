import { Link, useParams } from "react-router-dom";
import Results from "../Results";

import "../../styles/Survey.css";
import { Loader } from "../../utils/loader/Atoms";
import { useFetch } from "../../utils/Hooks";

function Survey() {
  let { questionNumber } = useParams();
  questionNumber = Number(questionNumber);
  let nextQuestion = questionNumber + 1;
  let prevQuestion = questionNumber === 1 ? 1 : questionNumber - 1;

  const { data, isLoading, error } = useFetch("http://localhost:8000/survey");
  const { surveyData } = data;

  if(error){
    return <span>Some troubles</span>
  }

  return (
    <div className="survey-page">
      {questionNumber === 10 ? (
        <Results />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Questions {questionNumber}</h1>
          <p>{ surveyData && surveyData[questionNumber]}</p>
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
