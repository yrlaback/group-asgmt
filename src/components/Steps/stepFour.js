import { Link } from "react-router-dom";

const stepFour = () => {
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
      <div>
        <Link to="/adventure/step2">Morning</Link>
        <Link to="/adventure/step3">Evening</Link>
      </div>
    </div>
  );
};

export default stepFour;
