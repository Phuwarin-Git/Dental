
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch, Redirect } from "react-router-dom";

import React, { createContext, useEffect, useState } from 'react';

import Login from './pages/signin/login';
import StudentDashboard from './pages/reservation/student/dashboard';
import StudentLimt from './pages/reservation/student/limit';
import StudentRes from './pages/reservation/student/Reservation';
import StudentHistory from './pages/reservation/student/history';
import StudentProfile from './pages/reservation/student/Profile';
import StudentAdminDashboard from './pages/reservation/studentadmin/dashboard';
import StudentAdminHistory from './pages/reservation/studentadmin/history';
import StudentAdminLimitCase from './pages/reservation/studentadmin/caselimit';
import StudentAdminReservation from './pages/reservation/studentadmin/reservation';
import ToothPage from './pages/equipment/student/tooth';
import ToothAdmin from './pages/equipment/studentadmin/toothadmin';
import Withdrawal from './pages/equipment/student/Withdraw';

const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log('User :', user, ' Status :', loginStatus);
  }, [user])
  return (
    <div className="App">

      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus }}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/StudentDashboard" render={() => loginStatus === true ? <StudentDashboard /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentRes" render={() => loginStatus === true ? <StudentRes /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentLimt" render={() => loginStatus === true ? <StudentLimt /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentHistory" render={() => loginStatus === true ? <StudentHistory /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentProfile" render={() => loginStatus === true ? <StudentProfile /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentAdminDashboard" render={() => loginStatus === true ? <StudentAdminDashboard /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentAdminReservation" render={() => loginStatus === true ? <StudentAdminReservation /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentAdminHistory" render={() => loginStatus === true ? <StudentAdminHistory /> : (<Redirect to="/" />)}></Route>
          <Route path="/StudentAdminLimitCase" render={() => loginStatus === true ? <StudentAdminLimitCase /> : (<Redirect to="/" />)}></Route>
          <Route path="/:id">
            <h1 style={{ color: 'black' }}>Error 404 page not found</h1>
          </Route>
        </Switch>
      </AuthContext.Provider>
    </div >
  );
}
export { AuthContext };
export default App;
