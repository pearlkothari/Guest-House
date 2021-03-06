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
import ManageGuestEmployee from './View/Employee/GuestManage/ManageGuest';
import ManageCaretaker from './View/Employee/ManageCaretaker/ManageCaretaker';
import Feedback_Employee from './View/Employee/GuestFeedback/Feedback/Feedback_Employee';
import Details2 from './View/Employee/GuestFeedback/Feedback/Details';
import Dining_Lounge from './View/Employee/Dining_Lounge/Dining_Lounge';
import BookDining from './View/Guest/BookDining/BookDining';
import DiningStatus from './View/Guest/seeDining/DiningStatus';
import SubmitForm2 from './View/Admin/EmployeeManage/SubmitForm2';
import Details3 from './View/Admin/Approval/Details';
import ManageRooms from './View/Employee/ManageRooms/ManageRooms'
import SubmitForm3 from './View/Employee/ManageCaretaker/SubmitForm2';
import Details4 from './View/Employee/Dining_Lounge/Details';
import SubmitFormAdmin from './View/Admin/Approval/SubmitForm';
import ManageUser from './View/Admin/ManageUser/ManageUser';



function App() {
  return (
        <div className="App">
            <Router>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/> 

                {AuthenticationService.isLoggedIn()  &&  AuthenticationService.whatRole()==='Admin' && (<Route  path="/admin" element={<Admin/>}/>)}
                {AuthenticationService.isLoggedIn()  &&  AuthenticationService.whatRole()==='Admin' && <Route path="/admin/Manage%20User" element={<ManageUser/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' &&  <Route path="/admin/Manage%20Guest" element={<ManageGuest/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' && <Route path="/admin/Manage%20Employee" element={<ManageEmployee/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' && <Route path="/admin/Manage%20Employee/Add_Employee" element={<SubmitForm2/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' &&  <Route path="/admin/Approval" element={<Approval/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' &&  <Route path="/admin/Approval/details" element={<Details3/>}/>}
                {AuthenticationService.isLoggedIn()  && AuthenticationService.whatRole()==='Admin' && <Route path="/admin/Guest%20Feedback" element={<Feedback/>}/>}
                {AuthenticationService.isLoggedIn() && AuthenticationService.whatRole()==='Admin'  &&  <Route path="/admin/Guest%20Feedback/details" element={<Details/>}/>}
                {AuthenticationService.isLoggedIn() && AuthenticationService.whatRole()==='Admin'  &&  <Route path="/admin/Approval/Add_Guest" element={<SubmitFormAdmin/>}/>}


                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Caretaker' || AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee" element={<Employee/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Manage%20Guest" element={<ManageGuestEmployee/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Manage%20Caretaker" element={<ManageCaretaker/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Guest%20Feedback" element={<Feedback_Employee/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Guest%20Feedback/details" element={<Details2/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Dining%20Lounge%20Requests" element={<Dining_Lounge/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Dining%20Lounge%20Requests/details" element={<Details4/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Dining%20Lounge%20Requests/ManageRooms" element={<ManageRooms/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Manage%20Caretaker/Add_Employee" element={<SubmitForm3/>}/>}
                {AuthenticationService.isLoggedIn() && (AuthenticationService.whatRole()==='Manager')  && <Route path="/Employee/Manager/Manage%20Rooms" element={<ManageRooms/>}/>}


                {AuthenticationService.isLoggedIn()  &&  <Route path="/guest" element={<Guest/>}/>}
                {AuthenticationService.isLoggedIn()  &&  <Route path="/guest/Dining%20Lounge" element={<BookDining/>}/>}
                {AuthenticationService.isLoggedIn()  &&  <Route path="/guest/Dining%20Lounge%20Status" element={<DiningStatus/>}/>}
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
