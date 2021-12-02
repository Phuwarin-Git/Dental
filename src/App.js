
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
import Adminconfirm from './pages/reservation/Admintool/Adminconfirm';
import ToolModal from './pages/reservation/student/modal/tool';
import TeacherDashboard from './pages/reservation/teacher/dashboard';
import TeacherSelectWork from './pages/reservation/teacher/selectwork';
import TeacherHistory from './pages/reservation/teacher/history';
import TeacherProfile from './pages/reservation/teacher/profile';
import AdminDashboard from './pages/reservation/Admin/dashboard';
import AdminUser from './pages/reservation/Admin/user';
import AdminUnit from './pages/reservation/Admin/unit';
import AdminProfile from './pages/reservation/Admin/profile';
import Adminconfirmfromadmin from './pages/reservation/Admintool/Adminconfirmfromadmin';


const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    console.log('User :', user, ' Status :', loginStatus);
  }, [user])
  return (
    <div className="App">

      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus, limit, setLimit }}>
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
          <Route path="/Adminconfirm" render={() => loginStatus === true ? <Adminconfirm /> : (<Redirect to="/" />)}></Route>
          <Route path="/ToolModal" render={() => loginStatus === true ? <ToolModal /> : (<Redirect to="/" />)}></Route>
          <Route path="/TeacherDashboard" render={() => loginStatus === true ? <TeacherDashboard /> : (<Redirect to="/" />)}></Route>
          <Route path="/TeacherSelectWork" render={() => loginStatus === true ? <TeacherSelectWork /> : (<Redirect to="/" />)}></Route>
          <Route path="/TeacherHistory" render={() => loginStatus === true ? <TeacherHistory /> : (<Redirect to="/" />)}></Route>
          <Route path="/TeacherProfile" render={() => loginStatus === true ? <TeacherProfile /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminDashboard" render={() => loginStatus === true ? <AdminDashboard /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminUser" render={() => loginStatus === true ? <AdminUser /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminUnit" render={() => loginStatus === true ? <AdminUnit /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminProfile" render={() => loginStatus === true ? <AdminProfile /> : (<Redirect to="/" />)}></Route>
          <Route path="/Adminconfirmfromadmin" render={() => loginStatus === true ? <Adminconfirmfromadmin /> : (<Redirect to="/" />)}></Route>
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
