import './App.css';
import Login from './View/Login/Login';
import Admin from './View/Admin/Admin';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ManageGuest from './View/Admin/GuestManage/ManageGuest';
import Approval from './View/Admin/Approval/Approval';
import Guest_Feedback from './View/Guest/Feedback/Guest_Feedback.jsx';
import Details from './View/Admin/Feedback/Details';
import Guest from './View/Guest/Guest';
import RoomBooking from './View/Guest/RoomBooking/RoomBooking.jsx';
import ManageEmployee from './View/Admin/EmployeeManage/ManageEmployee'
import Employee from './View/Employee/Employee.jsx'
import ErrorComponent from '../src/View/ErrorComponent'
import AuthenticationService from './AuthenticationService';
import Footer from './View/Footer/Footer';
import Status from './View/Guest/Status/Status';
import Feedback from './View/Admin/Feedback/Feedback';

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
                {AuthenticationService.isLoggedIn()  &&  <Route path="/admin/Guest%20Feedback" element={<Feedback/>}/>}
                {AuthenticationService.isLoggedIn()  &&  <Route path="/admin/Guest%20Feedback/details" element={<Details/>}/>}

                {AuthenticationService.isLoggedIn()  && <Route path="/Employee" element={<Employee/>}/>}


                {AuthenticationService.isLoggedIn()  && <Route path="/guest" element={<Guest/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Book%20Your%20Stay" element={<RoomBooking/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Feedback" element={<Guest_Feedback/>}/>}
                {AuthenticationService.isLoggedIn()  && <Route path="/guest/Status" element={<Status/>}/>}

                {!AuthenticationService.isLoggedIn() && <Route path='*' exact={true} element={<ErrorComponent/>}/>}
              </Routes>
          </Router>
          <div className='footer'>
            <Footer/>
          </div>
      </div>
  );
}

export default App;
