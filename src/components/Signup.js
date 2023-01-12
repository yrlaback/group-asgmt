import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkEmail = (users) => {
        const user = users.find((user) => user.email === email);
        if (user) return user;
    };
    
    const handelSubmit = async () => {
        const user = await axios.get("/users")
            .then((res) => checkEmail(res.data, email));

            if(user) {
                alert("User already exists!")
            } else {
                const user = {name, email, password};
                axios.post("/users", user).then(alert("User created!"));
            }
    };

    return (
        <div>
            <form className="signup-container">
                <h3>Sign up here!</h3>
                <label htmlFor="name"><p>Name:</p></label>
                <input type="text" name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="email"><p>Email:</p></label>
                <input autoFocus type="text" name="name" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password"><p>Password:</p></label>
                <input type="password" name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                <Link to="/welcome">
                    <Button type="submit" onClick={handelSubmit}><p>Sign UP!</p></Button>
                </Link>
            </form>
        </div>
    );
};

export default Signup;