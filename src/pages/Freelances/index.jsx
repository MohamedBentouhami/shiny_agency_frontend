import React, { useEffect, useState } from "react";
import CardContainer from "../../components/CardContainer";
import "../../styles/Freelances.css";
import { useFetch } from "../../utils/Hooks";
import { Loader } from "../../utils/loader/Atoms";

function Freelances() {
  const { data, isLoading, error } = useFetch("http://localhost:8000/freelances");
  const { freelancersList } = data;
  if(error){
    return <span>Error during the loading data</span>
  }
  return (
    <div className="freelances-page">
      <h2>Find your service provider</h2>
      <p>At Shiny, we gather the best profiles for you</p>
      {isLoading ? (
        <Loader />
      ) : (
        <CardContainer profiles={freelancersList}></CardContainer>
      )}
    </div>
  );
}

export default Freelances;
