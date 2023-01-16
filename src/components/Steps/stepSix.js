import { Link } from "react-router-dom";

const stepSix = () => {
  return (
    <div className="card">
      <h2>You climbed the hill</h2>
      <br />
      <p>
        and you can see everything from here! Even your house. But you're not
        sure if you'll be able to walk all the way home since you feel a
        headache coming. What do you do?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/exit">
          I make a run for it!
        </Link>
        <Link className="options__button" to="/adventure/step7">
          I find a williow tree!
        </Link>
      </div>
    </div>
  );
};

export default stepSix;
