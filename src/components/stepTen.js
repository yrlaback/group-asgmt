import { Link } from "react-router-dom";

const stepNine = () => {
  return (
    <div className="card">
      <h5>"Moss is the best!" the stranger said and walked away.</h5>
      <br/>
      <p>
      And it collectively provide more carbon offset 
      than all the trees in the world. Go moss! Are you ready to go home?
      </p>
      <br />
      <div className="options">
        <Link className="options__button" to="/adventure/home">
          Yeah, I am.
        </Link>
        <Link className="options__button" to="/adventure/stepTwo">
          No, I rather take a nap. 
        </Link>
      </div>
    </div>
  );
};

export default stepNine;