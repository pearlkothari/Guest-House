import './App.css';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ManageEmployee from './Admin/EmployeeManage/ManageEmployee'
import ManageGuest from './Admin/GuestManage/ManageGuest';
import Approval from './Admin/Approval/Approval';
import Guest_Feedback from './Guest/Guest_Feedback';
import Guest from './Guest/Guest';
import RoomBooking from './Guest/RoomBooking';
import Manager from './Employee/Manager';
import Caretaker from './Employee/Caretaker';
import CheckAvailability from './Guest/CheckAvailability';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/Manage%20Guest" element={<ManageGuest/>}/>
            <Route path="/admin/Manage%20Employee" element={<ManageEmployee/>}/>
            <Route path="/admin/Approval" element={<Approval/>}/>
            {/* <Route path="/admin/Feedback" element={<Feedback/>}/> */}
            <Route path="/guest" element={<Guest/>}/>
            <Route path="/Manager" element={<Manager/>}/>
            <Route path="/Caretaker" element={<Caretaker/>}/>
            <Route path="/guest/Book%20Your%20Stay" element={<RoomBooking/>}/>
            <Route path="/guest%20Feedback" element={<Guest_Feedback/>}/>
            <Route path="/guest/Check%20Availability" element={<CheckAvailability/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
