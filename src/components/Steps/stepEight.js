import { Link } from "react-router-dom";

const stepEight = () => {
  return (
    <div className="card">
      <h2>You encounter a person</h2>
      <br />
      <p>
        And the person asks you; "Do you know what the oldest plant in the world
        is?"
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step9">
          Moss
        </Link>
        <Link className="options__button" to="/adventure/dead">
          Dandelion
        </Link>
      </div>
    </div>
  );
};

export default stepEight;
