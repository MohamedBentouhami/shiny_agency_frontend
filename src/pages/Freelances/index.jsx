import React from "react";
import defaultPict from "../../assets/profile.png";
import CardContainer from "../../components/CardContainer";

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
];

function Freelances() {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardContainer profiles={freelanceProfile}>
      </CardContainer>
    </div>
  );
}

export default Freelances;
