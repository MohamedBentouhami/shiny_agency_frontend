import "../../styles/Card.css";
import PropTypes from "prop-types";
import defaultPict from "../../assets/default-profile.png";

function Card({ label, picture, name }) {
  return (
    <div className="card">
      <span id="label">{label}</span>
      <img src={picture} alt="freelance" />
      <span>{name}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: "",
  picture: { defaultPict },
  name: "",
};

export default Card;
