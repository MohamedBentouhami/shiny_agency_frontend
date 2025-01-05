import React, { useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import "../../styles/Freelances.css";
import { Loader } from "../../utils/Atoms";

function Freelances() {
  const [freelancersList, setFreeLancersList] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchFreelancers() {
      try {
        const response = await fetch("http://localhost:8000/freelances");
        const { freelancersList } = await response.json();
        setFreeLancersList(freelancersList);
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoading(false);
      }
    }
    fetchFreelancers();
  }, []);
  return (
    <div className="freelances-page">
      <h2>Find your service provider</h2>
      <p>At Shiny, we gather the best profiles for you</p>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardContainer profiles={freelancersList}></CardContainer>
      )}
    </div>
  );
}

export default Freelances;
