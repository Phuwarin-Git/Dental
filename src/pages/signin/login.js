import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from "axios";
import './loginstyle.css';

//User ควรเป็น Email
//Password ควรเป็น ID

const Login = () => {
    const history = useHistory();
    const { user, setUser, setLoginStatus } = useContext(AuthContext);
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
            // console.log("name :", item.data)
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
        setLoginStatus(true)
        setUser(details[0])

        if (details[0].role === "student") {
            // console.log("Role :", details[0].role)
            return history.push('/StudentDashboard')
        } else if (details[0].role === "teacher") {
            // console.log("Role :", details[0].role)
            return history.push('/TeacherDashboard')
        } if (details[0].role === "studentadmin") {
            // console.log("Role :", details[0].role)
            return history.push('/StudentAdminDashboard')
        } if (details[0].role === "admin") {
            // console.log("Role :", details[0].role)
            return history.push('/StudentDashboard')
        } if (details[0].role === "AdminTool") {
            return history.push('/Adminconfirm')
        }

    }

    return (
        <div style={{ background: '#0047AB' }}>
        <div class="grid">
            <div class="content">
            <form onSubmit={checkAuth}>
                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Sign up in to Account</h4>
                <h6 style={{ fontSize: '14px' }}>Use your email or username</h6>
                <p style={{ fontSize: '13px'}}>Username</p>
                <input placeholder="username" onChange={usernameOnChange}></input><br />
                <p style={{ fontSize: '13px'}}>Password</p>
                <input type="password" placeholder="password" onChange={passwordOnChange}></input><br /><br/>
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
        </div>
        
        
    )
}
export default Login;