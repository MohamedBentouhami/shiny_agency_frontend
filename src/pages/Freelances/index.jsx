import React from "react";
import defaultPict from "../../assets/profile.png";
import Card from "../../components/Card";

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
      {freelanceProfile.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.name}
          title={profile.title}
          picture={profile.picture}
        />
      ))}
    </div>
  );
}

export default Freelances;
