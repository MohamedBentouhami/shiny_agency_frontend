import { useFetch } from "../../utils/Hooks";
import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { Loader } from "../../utils/loader/Atoms";
import ResultContainer from "../../components/ResultContainer";
import "../../styles/Results.css";

function Results() {
  const surveyData = useContext(SurveyContext);
  let answers = formatAnswers(surveyData.answers);

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${answers}`
  );
  if (error) {
    return "some troubles !";
  }

  return (
    <div className="results-page">
      {isLoading ? <Loader /> : <ResultContainer data={data.resultsData} />}
    </div>
  );
}

function formatAnswers(answers) {
  let queryParam = "";
  Object.entries(answers).forEach((elem) => {
    let letter = String.fromCharCode(96 + Number(elem[0]));
    queryParam += `${letter}${elem[0]}=${elem[1] ? 1 : 0}&`;
  });
  return queryParam;
}

export default Results;
