import { Link } from "react-router-dom";

const runDead = () => {
  return (
    <div className="card">
      <h5>You decided to run home.</h5>
      <br/>
      <p>
      Unfortunately you passed out.
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/stepTwo">
          Wake up
        </Link>
      </div>
    </div>
  );
};

export default runDead;