import './App.css';
import Login from './View/Login/Login';
import Admin from './View/Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ManageGuest from './View/Admin/GuestManage/ManageGuest';
import Approval from './View/Admin/Approval/Approval';
import Guest_Feedback from './View/Guest/Feedback/Guest_Feedback.jsx';
import Guest from './View/Guest/Guest';
import RoomBooking from './View/Guest/RoomBooking';
import ManageEmployee from './View/Admin/EmployeeManage/ManageEmployee'
import Manager from './View/Employee/Manager';
import Caretaker from './View/Employee/Caretaker';
import ErrorComponent from '../src/View/ErrorComponent'
import AuthenticationService from './AuthenticationService';
import Footer from './View/Footer/Footer';
import Status from './View/Guest/Status/Status';

function App() {
  return (
        <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/> 
                {AuthenticationService.isLoggedIn() && (<Route  path="/admin" element={<Admin/>}/>)}
                {AuthenticationService.isLoggedIn()  && <Route path="/admin/Manage%20Guest" element={<ManageGuest/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/admin/Manage%20Employee" element={<ManageEmployee/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/admin/Approval" element={<Approval/>}/>}

                {AuthenticationService.isLoggedIn()  && <Route path="/Manager" element={<Manager/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/Caretaker" element={<Caretaker/>}/>}


                {AuthenticationService.isLoggedIn()  && <Route path="/guest" element={<Guest/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Book%20Your%20Stay" element={<RoomBooking/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Feedback" element={<Guest_Feedback/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Status" element={<Status/>}/>}

                {!AuthenticationService.isLoggedIn() && <Route path='*' exact={true} element={<ErrorComponent/>}/>}
              </Routes>
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
