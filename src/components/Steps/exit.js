import { Link } from "react-router-dom";

const exitStep = () => {
  return (
    <div>
      <h5>That's fine.</h5>
      <br />
      <p>Take a break and try again in a moment.</p>
      <br />
      <div className="options">
        <Link className="options__button"  to="/adventure">
          Play again
        </Link>
      </div>
    </div>
  );
};

export default exitStep;
