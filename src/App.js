
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
import AdminStudent from './pages/reservation/Admin/student';
import AdminStudentAdmin from './pages/reservation/Admin/studentAdmin';
import AdminUnit from './pages/reservation/Admin/unit';
import AdminTeacher from './pages/reservation/Admin/teacher';
import Adminconfirmfromadmin from './pages/reservation/Admintool/Adminconfirmfromadmin';


const AuthContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState([]);

  const [currentDate, setCurrentDate] = useState([]);
  const [currentMonth, setMonth] = useState([]);

  useEffect(() => {
    checkCurrentDate();
    getMounth();
    console.log('User :', user, ' Status :', loginStatus);
  }, [user])

  function checkCurrentDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log("Today :", today)
    setCurrentDate(today)
  }

  async function getMounth() {
    let a = new Date();
    let d = a.getMonth();
    return await setMonth(d + 1)
  }

  return (
    <div className="App">

      <AuthContext.Provider value={{ user, setUser, loginStatus, setLoginStatus, limit, setLimit, currentDate, currentMonth }}>
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
          <Route path="/AdminStudent" render={() => loginStatus === true ? <AdminStudent /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminStudentAdmin" render={() => loginStatus === true ? <AdminStudentAdmin /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminUnit" render={() => loginStatus === true ? <AdminUnit /> : (<Redirect to="/" />)}></Route>
          <Route path="/AdminTeacher" render={() => loginStatus === true ? <AdminTeacher /> : (<Redirect to="/" />)}></Route>
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
