import React from 'react'
import Info from './Info'
import AdminHeader from '../AdminHeader';
function ManageEmployee() {
    return (
        <div>
            <AdminHeader/>
            {/* Id,Name,Contact_Info,Job_Role,Email_ID */}
            <button>Add Employee</button>
            <Info Id={1} Name={"Pearl"} Contact_Info={"98XXX90"} Job_Role={"Manager"} Email_ID={"pearxxxx@gmail.com"}/>
        </div>
    )
}

export default ManageEmployee;
