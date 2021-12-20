import './App.css';
import Login from './View/Login/Login';
import Admin from './View/Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ManageGuest from './View/Admin/GuestManage/ManageGuest';
import Approval from './View/Admin/Approval/Approval';
import Guest_Feedback from './View/Guest/Guest_Feedback';
import Guest from './View/Guest/Guest';
import RoomBooking from './View/Guest/RoomBooking';
import ManageEmployee from './View/Admin/EmployeeManage/ManageEmployee'
import Manager from './View/Employee/Manager';
import Caretaker from './View/Employee/Caretaker';
import ErrorComponent from '../src/View/ErrorComponent'
import CheckAvailability from './View/Guest/CheckAvailability';
import AuthenticationService from './AuthenticationService';

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
                {AuthenticationService.isLoggedIn()  && <Route path="/guest" element={<Guest/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/Manager" element={<Manager/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/Caretaker" element={<Caretaker/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Book%20Your%20Stay" element={<RoomBooking/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Feedback" element={<Guest_Feedback/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Check%20Availability" element={<CheckAvailability/>}/>}
                <Route element={<ErrorComponent/>}/>
              </Routes>
          </Router>

          
      </div>
  );
}

export default App;
