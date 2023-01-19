import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const checkUser = (users) => {
        const user = users.find(
           (user) => user.email === email && user.password === password);
        if (user.email === email && user.password === password) return user;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("All fields are required.")
        }

        const user = await axios
            .get("/users")
            .then((res) => checkUser(res.data, email, password))
            .catch((error) => {
                console.log(error);
            })

        if (user.email === email && user.password === password) {
            navigate("/Welcome");

            localStorage.setItem("user", JSON.stringify(user.id));
        };

        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form className="signup-container">
                <h3>Please log in before playing:</h3>
                <label htmlFor="email"><p>Email:</p></label>
                <input autoFocus type="text" name="name" value={email}
                onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password"><p>Password:</p></label>
                <input type="password" name="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>

                <button className="btn" type="submit" onClick={handleSubmit}>Log in!</button>
            </form>
        </div>
    );
};

export default Login;