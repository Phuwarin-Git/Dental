
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";

import React, { createContext, useEffect, useState } from 'react';

import Login from './pages/signin/login';
import StudentDashboard from './pages/reservation/student/dashboard';
import StudentRes from './pages/reservation/student/Reservation';
import StudentHistory from './pages/reservation/student/history';
import StudentProfile from './pages/reservation/student/Profile';

const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("Hello :", user.username, " Password :", user.password)
  }, [user])

  return (
    <div className="App">
      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/dashboard" component={StudentDashboard}></Route>
          <Route path="/reservation" component={StudentRes}></Route>
          <Route path="/history" component={StudentHistory}></Route>
          <Route path="/profile" component={StudentProfile}></Route>
          <Route path="/:id">
            <p>Error 404 page not found</p>
          </Route>
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}
export { AuthContext };
export default App;
