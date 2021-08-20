import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from "axios";

const fakeuser = {
    name: "Phuwarin Maneerat",
    username: "Phuwarin",
    password: "student",
    role: "student"
}

//User ควรเป็น Email
//Password ควรเป็น ID

const Login = () => {
    const history = useHistory();
    const { user, setUser, status, setStatus } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState([]);

    function usernameOnChange(e) {
        setUsername(e.target.value)

    } function passwordOnChange(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        getDetails();
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/name/find/all").then((item) => {
            console.log("name :", item.data)
            return setAuth(item.data)
        });
    }

    function checkAuth(e) {
        e.preventDefault();
        const checkAu = auth.filter((item) => {
            return (item.email === username && item.student_id === password)
        })
        if (checkAu.length === 1) {
            alert("Login success")
            console.log("Check :", checkAu)
            onSubmitForm(checkAu)
            // return console.log("Username :", username, " Password :", password)
        } else {
            return alert("Login failed")
        }

    }

    function onSubmitForm(details) {
        setUser(details[0].first_name)
        history.push('/StudentDashboard')
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