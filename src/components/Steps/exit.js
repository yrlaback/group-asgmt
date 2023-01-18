import { Link } from "react-router-dom";

const exitStep = () => {
  return (
    <div class="card" >
      <h2>That's fine</h2>
      <br />
      <p>Take a break and try again in a moment</p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default exitStep;
