import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logo from "../../assets/dark-logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo"></img>
      <div className="menu">
        <nav>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/freelances" className="link">
            Profils
          </Link>
          <Link to="/survey/1" className="link">
            Take the test
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
