import { Link } from "react-router-dom";

const stepSeven = () => {
  return (
    <div className="card">
      <h2>You found a willow tree</h2>
      <br />
      <p>
        The bark of the willow tree contains an active ingredient called
        salicin, which has been used for centuries as a pain reliever. Once
        you've chewed some of that bark you're good to go. Will you do it?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step8">
          Yeah, why not.
        </Link>
        <Link className="options__button" to="/adventure/dead">
          I rather not chew bark.
        </Link>
      </div>
    </div>
  );
};

export default stepSeven;
