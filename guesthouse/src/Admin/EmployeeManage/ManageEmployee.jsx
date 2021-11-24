import React from 'react'
import AdminHeader from '../AdminHeader';
import Searchbar from '../../SearchBar';
import './bootstrap.css'
function ManageEmployee() {
    const Employees=[
        {Id:1,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:2,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:3,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:4,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:5,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:6,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'}
    ]
    return (
        <div>
            <AdminHeader/>
            <div className="Add-Employee">
                <Searchbar/>
                <button className="Add_Employee" >Add Employee</button>
            </div>
            {/* Id,Name,Contact_Info,Job_Role,Email_ID */}
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Job Role</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Employees.map(
                                    Employees => 
                                        <tr key={Employees.Id}>
                                            <td>{Employees.Id}</td>
                                            <td>{Employees.Name}</td>
                                            <td>{Employees.Contact_Info}</td>
                                            <td>{Employees.Job_Role}</td>
                                            <td>{Employees.Email_ID}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default ManageEmployee;
