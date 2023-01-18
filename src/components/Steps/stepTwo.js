import { Link } from "react-router-dom";

const stepTwo = () => {
  return (
    <div className="card">
      <h2>You're lost in the Swedish woods</h2>
      <br />
      <p>
        Without a phone and it's quite dark outside, you're not really sure how
        you got here. You don't even know what time it is. The sun is in the
        east, is it morning or evening?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step3">
          Morning
        </Link>
        <Link className="options__button" to="/adventure/dead">
          Evening
        </Link>
      </div>
    </div>
  );
};

export default stepTwo;
