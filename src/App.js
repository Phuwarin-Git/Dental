
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch, Link } from "react-router-dom";

import React, { createContext, useEffect, useState } from 'react';

import Login from './pages/signin/login';
import StudentDashboard from './pages/reservation/student/dashboard';
import StudentRes from './pages/reservation/student/Reservation';
import StudentHistory from './pages/reservation/student/history';
import StudentProfile from './pages/reservation/student/Profile';
import StudentTools from './pages/reservation/student/tools';

const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <div className="App">

      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/StudentDashboard" component={StudentDashboard}></Route>
          <Route path="/StudentRes" component={StudentRes}></Route>
          <Route path="/StudentHistory" component={StudentHistory}></Route>
          <Route path="StudentTools" conponent={StudentTools}></Route>
          <Route path="/StudentProfile" component={StudentProfile}></Route>
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
