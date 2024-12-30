import React from "react";
import defaultPict from "../../assets/profile.png";
import CardContainer from "../../components/CardContainer";
import "../../styles/Freelances.css";

const freelanceProfile = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: defaultPict,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: defaultPict,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: defaultPict,
  },
  {
    name: "Lauren Ipsum",
    jobTitle: "UX Designer",
    picture: defaultPict,
  },
];

function Freelances() {
  return (
    <div className="freelances-page">
      <h2>Find your service provider</h2>
      <p>At Shiny, we gather the best profiles for you</p>
      <CardContainer profiles={freelanceProfile}></CardContainer>
    </div>
  );
}

export default Freelances;
