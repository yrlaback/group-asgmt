import { Link } from "react-router-dom";

const stepEleven = () => {
  return (
    <div className="card">
      <h2>"Congratulations!</h2>
      <br />
      <p>
        You've made your way home.
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/home">
          Go to main page
        </Link>
      </div>
    </div>
  );
};

export default stepEleven;