import { Link } from "react-router-dom";
import homeIllustration from "../../assets/home-illustration.svg";
import "../../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <div>
        <p>
          Identify your needs
          <br /> and you'll take care of the rest
          <br /> with our best talents
        </p>
        <Link id="test-link" to="/survey/1">Take the test</Link>
      </div>

      <img src={homeIllustration} alt="home-illustation"></img>
    </div>
  );
}

export default Home;
