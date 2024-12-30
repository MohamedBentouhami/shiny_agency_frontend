import "../../styles/CardContainer.css";
import Card from "../../components/Card";

function CardContainer({ profiles }) {
  return (
    <div className="card-container">
      {profiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          name={profile.name}
        />
      ))}
    </div>
  );
}

export default CardContainer;
