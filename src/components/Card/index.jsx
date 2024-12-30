import "../../styles/Card.css";
import PropTypes from "prop-types";
function Card({ label, title, picture }) {
  return (
    <div className="card">
      <span>{label}</span>
      <img src={picture} alt="freelance" />
      <span>{title}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
