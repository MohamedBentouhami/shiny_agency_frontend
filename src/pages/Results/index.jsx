import { useLocation } from "react-router-dom";
import { useFetch } from "../../utils/Hooks";
import { useContext } from "react";
import { SurveyContext } from "../../utils/context";
import { Loader } from "../../utils/loader/Atoms";

function Results() {
  const surveyData = useContext(SurveyContext);
  console.log(surveyData.answers);
  let answers = formatAnswers(surveyData.answers);

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${answers}`
  );
  console.log("data : ", data);
  if (error) {
    return "some troubles !";
  }

  return <div>{isLoading ? <Loader /> : <p>Results</p>}</div>;
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
