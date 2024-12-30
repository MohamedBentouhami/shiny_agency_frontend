import { Link, useParams } from "react-router-dom";
import Results from "../Results";

function Survey() {
  let { questionNumber } = useParams();
  questionNumber = Number(questionNumber);
  let nextQuestion = questionNumber + 1;
  let prevQuestion = questionNumber === 1 ? 1 : questionNumber - 1;
  return (
    <div>
      {questionNumber === 10 ? (
        <Results />
      ) : (
        <div>
          <h1>Questions</h1>
          <Link to={`/survey/${prevQuestion}`} onClick={() => {}}>
            previous
          </Link>
          <span> </span>
          <Link to={`/survey/${nextQuestion}`}>next</Link>
        </div>
      )}
    </div>
  );
}

export default Survey;
