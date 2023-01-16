import { Link } from "react-router-dom";

const stepNine = () => {
  return (
    <div className="card">
      <h5>The stranger smiles</h5>
      <br/>
      <p>
      and says: The first algae adapted to life on earth and mosses 
      evolved from there, do you know how long ago that was?"
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/exit">
          Around 60 million years ago.
        </Link>
        <Link className="options__button" to="/adventure/stepTen">
          About 450 million years ago.
        </Link>
      </div>
    </div>
  );
};

export default stepNine;