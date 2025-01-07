import { NavLink } from "react-router-dom";
import "../../styles/Header.css";
import logo from "../../assets/dark-logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo"></img>
      <div className="menu">
        <nav>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          <NavLink to="/freelances" className="link">
            Profils
          </NavLink>
          <NavLink to="/survey/1" className="link">
            Take the test
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
