import "../../styles/CardContainer.css";
import Card from "../../components/Card";

function CardContainer({ profiles }) {
  //console.log(profiles);
  return (
    <div className="card-container">
      {profiles.map((profile, index) => (
        <Card
          key={profile.id}
          label={profile.job}
          picture={profile.picture}
          name={profile.name}
        />
      ))}
    </div>
  );
}

export default CardContainer;
