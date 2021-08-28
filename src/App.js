
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch, Link } from "react-router-dom";

import React, { createContext, useEffect, useState } from 'react';

import Login from './pages/signin/login';
import StudentDashboard from './pages/reservation/student/dashboard';
import StudentRes from './pages/reservation/student/Reservation';
import StudentHistory from './pages/reservation/student/history';
import StudentProfile from './pages/reservation/student/Profile';
import StudentAdminDashboard from './pages/reservation/studentadmin/dashboard';
import StudentAdminHistory from './pages/reservation/studentadmin/history';
import StudentAdminLimitCase from './pages/reservation/studentadmin/caselimit';
import StudentAdminReservation from './pages/reservation/studentadmin/reservation';

const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    console.log('User :', user)
  }, [user])
  return (
    <div className="App">

      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/StudentDashboard" component={StudentDashboard}></Route>
          <Route path="/StudentRes" component={StudentRes}></Route>
          <Route path="/StudentHistory" component={StudentHistory}></Route>
          <Route path="/StudentProfile" component={StudentProfile}></Route>
          <Route path="/StudentAdminDashboard" component={StudentAdminDashboard}></Route>
          <Route path="/StudentAdminReservation" component={StudentAdminReservation}></Route>
          <Route path="/StudentAdminHistory" component={StudentAdminHistory}></Route>
          <Route path="/StudentAdminLimitCase" component={StudentAdminLimitCase}></Route>
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
