import { Link } from "react-router-dom";

const stepTen = () => {
  return (
    <div className="card">
      <h2>"Moss is the best!" the stranger said and walked away.</h2>
      <br />
      <p>
        And it collectively provide more carbon offset than all the trees in the
        world. Go moss! Are you ready to go home?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/step11">
          Yeah, I am.
        </Link>
        <Link className="options__button" to="/adventure/step2">
          No, I rather take a nap.
        </Link>
      </div>
    </div>
  );
};

export default stepTen;
