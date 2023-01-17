import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <form className="signup-container">
                <h3>Log in:</h3>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                <Link to="/welcome">
                    <Button>Log In</Button>
                </Link>
            </form>
        </div>
    );
};

export default Signup;