import { Link } from "react-router-dom";

const stepTen = () => {
  return (
    <div className="card">
      <h2>"Moss is the best!" the stranger said and walked away.</h2>
      <br />
      <p>
        And it collectively provide more carbon offset than all the trees in the
        world. Go moss! Are you ready to play again?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step1">
          Yeah, I am.
        </Link>
      </div>
    </div>
  );
};

export default stepTen;
