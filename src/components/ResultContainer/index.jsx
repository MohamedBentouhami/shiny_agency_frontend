import { NavLink } from "react-router-dom";

function ResultContainer({ data }) {
  let skills = skillNeeded(data);
  return (
    <div className="result-container">
      <h2>
        The skills you need are : <span className="purple-color">{skills}</span>
      </h2>
      <NavLink to="/freelances" className="link-btn">
        Discover our profiles
      </NavLink>
      <div>
        {data.map((elem, index) => (
          <div key={index}>
            <p className="purple-color">{capitalizeFirstLetter(elem.title)}</p>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function skillNeeded(data) {
  let skills = "";
  for (let i = 0; i < data.length; i++) {
    skills += `${capitalizeFirstLetter(data[i].title)}, `;
  }
  return skills.slice(0, -2);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default ResultContainer;
