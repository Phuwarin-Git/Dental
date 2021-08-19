import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";

const fakeuser = {
    name: "Phuwarin Maneerat",
    username: "Phuwarin",
    password: "student",
    role: "student"
}

const Login = () => {
    const history = useHistory();
    const { user, setUser, status, setStatus } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function usernameOnChange(e) {
        setUsername(e.target.value)

    } function passwordOnChange(e) {
        setPassword(e.target.value)
    }

    function checkAuth(e) {
        e.preventDefault();
        if (fakeuser.username === username && fakeuser.password === password) {
            console.log("Login success")
            onSubmitForm(username, password)
            // return console.log("Username :", username, " Password :", password)
        } else {
            return alert("Login failed")
        }

    }

    function onSubmitForm(name, pass) {
        alert("Login success")
        setUser({ username: name, password: pass, name: fakeuser.name })
        history.push('/dashboard')
    }

    return (
        <div>
            <form onSubmit={checkAuth}>
                <h2>Hello User</h2>
                <p>Username</p>
                <input placeholder="username" onChange={usernameOnChange}></input><br />
                <p>Password</p>
                <input type="password" placeholder="password" onChange={passwordOnChange}></input><br /><br />
                <button type="submit">Login</button>
            </form>

        </div>
    )
}
export default Login;