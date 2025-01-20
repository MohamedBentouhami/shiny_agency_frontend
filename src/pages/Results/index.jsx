import { useFetch } from "../../utils/Hooks";

function Results() {
  const queryParams = "a1=1&a2=0";

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${queryParams}`
  );
  console.log("data : ", data);
  if(error){
    return "some troubles !"
  }
  
  return (
    <div>
      <p>Results</p>
    </div>
  );
}

export default Results;
