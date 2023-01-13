import { Link } from "react-router-dom";

const stepThree = () => {
  return (
    <div>
      <h5>The sun is in the east.</h5>
      <br />
      <p>
        Which means it is rising and it's early morning. You look around and all
        you see is trees and more trees. What kind of tree are you seeing the
        most of?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/exit">
          Gomortega
        </Link>
        <Link className="options__button" to="/adventure/step4">
          Pine
        </Link>
      </div>
    </div>
  );
};

export default stepThree;
