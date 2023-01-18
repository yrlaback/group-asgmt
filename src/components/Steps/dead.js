import { Link } from "react-router-dom";

const deadStep = () => {
  return (
    <div class="card">
      <h2>Unfortunately, you are dead!</h2>
      <br />
      <p>
        Your answer is incorrect, do you wanna play again? Click the button
        below
      </p>
      <br />
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure">
          Play again
        </Link>
      </div>
    </div>
  );
};

export default deadStep;
