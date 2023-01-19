import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-container">
            <h2>About our game</h2>
            <p>It's good to see you. 
                In this game you will find yourself lost in the woods, trying to find a way back home.
                You will be provided with a snippet of text and then it's up to you to make the right choice to reach your destination.
                </p>
                <Link to="/Adventure"> <button className="btn">LET'S GO</button>
                </Link>
        </div>
    );
};

export default Welcome;