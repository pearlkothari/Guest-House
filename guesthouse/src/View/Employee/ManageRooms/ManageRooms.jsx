import React from 'react'
import Employee_Header from '../Employee_Header.jsx';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './ManageRooms.css';

function ManageRooms() {

    const [rooms,setrooms]=useState([]);

    function update(value){
        const array=[].concat.apply([],value);
        setrooms(array);
        console.log(rooms);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/employee/see/rooms')
        .then(res=>{
            if(res){
                update(res.data);
            }
        })
    }, [])

    const handleChange = (room) =>{
        axios.post('http://localhost:5000/employee/update/rooms',{roomNo:room.roomNo, availability:room.availability})
        .then(res=>{
            axios.get('http://localhost:5000/employee/see/rooms')
        .then(res=>{
            if(res){
                update(res.data);
            }
        })
        })
    }
    return (
        <div className='Rooms'>
            <Employee_Header/>
            <div className='Employee_Rooms'>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>Room Number</th>
                                        <th>Charge</th>
                                        <th>Room Type</th>
                                        <th>Reserved</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                rooms.map(
                                    room => 
                                        <tr>
                                            <td>{room.roomNo}</td>
                                            <td>{room.charge}</td>
                                            <td>{room.roomType}</td>
                                            {room.availability===true && <td><button className='btn' onClick={() =>{
                                                handleChange(room)
                                                room.availability=false;
                                            }}>{"Reserved"}</button></td>}
                                            {room.availability===false && <td><button className='btn2' onClick={() =>{
                                                handleChange(room)
                                                room.availability=true;
                                            }}>{"Not Reserved"}</button></td>}
                                        </tr>
                                )
                            }
                            </tbody>
                    </table>
    
            </div>
        </div>
    )
}

export default ManageRooms
