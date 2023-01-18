import { Link } from "react-router-dom";

const stepFive = () => {
  return (
    <div className="card">
      <h2>You start to walk</h2>
      <br />
      <p>
        Because you do not have your phone to check for directions. When you
        walked for a while and it's lighter outside you see a pathway. You can
        either go left to a valley or right to climb a hill. Which way do you
        go?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step6">
          I'll go right!
        </Link>
        <Link className="options__button" to="/adventure/dead">
          I'll go left!
        </Link>
      </div>
    </div>
  );
};

export default stepFive;
