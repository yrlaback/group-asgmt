import { Link } from "react-router-dom";

const stepFour = () => {
  return (
    <div className="card">
      <h2>Pine tree</h2>
      <br />
      <p>
        The pine tree is one of the most common trees in Sweden. The Gomortega
        tree is an endemic tree to Chile and does not grow in Sweden. You need
        to figure out which way to walk. What do you do?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/dead">
          I check my phone
        </Link>
        <Link className="options__button" to="/adventure/step5">
          I start walking
        </Link>
      </div>
    </div>
  );
};

export default stepFour;
