import { Link } from "react-router-dom";

const stepOne = () => {
  return (
    <div className="card">
      <h2>Welcome</h2>
      <br />
      <p>
        It's good to see you . In this game you will find yourself lost in the
        woods, trying to find a way back home. You will be provided with a
        snippet of text and then it's up to you to make the right choice to
        reach your destination. Are you ready?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/step2">
          I'm ready!
        </Link>
        <Link className="options__button" to="/adventure/exit">
          I'm not ready!
        </Link>
      </div>
    </div>
  );
};

export default stepOne;
