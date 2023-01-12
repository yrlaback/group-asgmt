import { Link } from "react-router-dom";

const stepTwo = () => {
  return (
    <div>
      <h5>You're lost in the woods,</h5>
      <br />
      <p>
        without a phone and it's quite dark outside, you're not really sure how
        you got here. You don't even know what time it is. The sun is in the
        east, is it morning or evening?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step3">
          Morning
        </Link>
        <Link className="options__button" to="/adventure/exit">
          Evening
        </Link>
      </div>
    </div>
  );
};

export default stepTwo;
