import React from 'react'
import './Details.css'
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

function Details3() {
    const location = useLocation();
    const navigate=useNavigate();
    // const [Success,setSuccess]=useState(false);
    // console.log(location.state.guest);

    const updateRooms=()=>{
        if(location.state.guest.guestType==='general'){
            axios.get('http://localhost:5000/employee/see/unreservedRooms')
            .then(res => {
                if(res.data){
                    axios.post('http://localhost:5000/employee/update/rooms',res.data)
                    location.state.guest.roomNo=res.data.roomNo;
                    axios.post('http://localhost:5000/employee/update/Guests',location.state.guest)
                }else{
                    alert("No Rooms Available")
                }
            })
        }else{
            axios.get('http://localhost:5000/employee/see/unreservedRoomsVip')
            .then(res => {
                if(res.data){
                    axios.post('http://localhost:5000/employee/update/rooms',res.data)
                    location.state.guest.roomNo=res.data.roomNo;
                    axios.post('http://localhost:5000/employee/update/Guests',location.state.guest)
                }else{
                    alert("No Rooms Available")
                }
                
            })

        }
    }

    return (
            <div className="Feedback">
            <div className="submit">
                <h2 className="heading1">Approval Request #{location.state.guest.Name}</h2>
                <form>
                    <div className="form">
                            {/*<h5>Guest Name</h5>*/}
                            <input 
                                type ="text" 
                                className = "form-input"
                                name ="Name" 
                                placeholder={`Guest Name: ${location.state.guest.Name}`}
                                disabled = {true}
                            />
                            {/*<h5>Email</h5>*/}
                            <input 
                                type ="text" 
                                className = "form-input"
                                name ="email" 
                                placeholder={`Email : ${location.state.guest.emailId}`}
                                disabled = {true}
                            />
                            {/*<h5>Contact Number</h5>*/}
                            <input 
                                type="text"
                                className="form-input"
                                name="contactNo"
                                placeholder={`Contact Number : ${location.state.guest.contactNo}`}
                                disabled = {true}
                            />
                            {/* <h5>Relation</h5>
                            <input 
                                type="text"
                                className="form-input"
                                name="Relation"
                                placeholder={`Relation :  ${location.state.relation}`}
                                disabled = {true}
                            /> */}
                            {/*<h5>Age</h5>*/}
                            <input 
                                type="text"
                                className="form-input"
                                name="Age"
                                placeholder={`Age :  ${location.state.guest.age}`}
                                disabled = {true}
                            />
                            {/*<h5>CheckIn</h5>*/}
                            <input 
                                type="text"
                                className="form-input"
                                name="checkIn"
                                placeholder={`Check In:  ${location.state.guest.checkIn}`}
                                disabled = {true}
                            />
                            {/*<h5>CheckOut</h5>*/}
                            <input 
                                type="text"
                                className="form-input"
                                name="checkOut"
                                placeholder={`Check Out:  ${location.state.guest.checkOut}`}
                                disabled = {true}
                            />
                            <input 
                                type="text"
                                className="form-input"
                                name="guestType"
                                placeholder={`Guest Type:  ${location.state.guest.guestType}`}
                                disabled = {true}
                            />
                    </div>
                    
                    <button className="btn btn-alert" onClick={(e) => {
                        updateRooms(e);
                        navigate('/Admin/Approval/', {replace:true})
                    }}>Approve</button>
                </form>
            </div>
        </div>
    )
}

export default Details3
