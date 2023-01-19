import forest from "../Images/forest.jpg"

const Home = () => {
    return (
        <div className="home-container">
            <h1>Hello!</h1>
            <p>Here is a turn based rpg game we have created in React. 
                The game is made by Gihani, Amanda and Yrla.</p>
            <p>Have you played the game before? Go ahead and choose Log In above.</p>
            <p>Never played the game? Please choose Sign Up before Log In. 
            </p>
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                marginTop:"2rem",
            }}>
                <img src={forest} alt="Forest with some sun"/>
            </div>
        </div>
    );
};

export default Home;