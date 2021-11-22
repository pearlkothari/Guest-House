import './App.css';
import Login from './Login/Login';
import Admin from './Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ManageEmployee from './Admin/EmployeeManage/ManageEmployee'
import ManageGuest from './Admin/GuestManage/ManageGuest';
import Approval from './Admin/Approval/Approval';
import Feedback from './Admin/Feedback/Feedback';
import Guest from './Guest/Guest';
import Employee from './Employee/Employee';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/ManageGuest" element={<ManageGuest/>}/>
            <Route path="/admin/ManageEmployee" element={<ManageEmployee/>}/>
            <Route path="/admin/Approval" element={<Approval/>}/>
            <Route path="/admin/Feedback" element={<Feedback/>}/>
            <Route path="/guest" element={<Guest/>}/>
            <Route path="/Employee" element={<Employee/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
