import React,{Component} from 'react'
import Info from './Info'
import SearchBar from "material-ui-search-bar";
import AdminHeader from '../AdminHeader';
class ManageGuest extends Component {
    render(){
        return (
            /*
                Search bar 
                - Search By ID
                - Search By Name 
                - Search By Contact Info
                -Search By Room Number
            */
            <div className="ManageGuest">
                <AdminHeader/>
                <div className="Subclass">
                    <table className="table">
                            {<thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Room Type</th>
                                        <th>Guest Type</th>
                                        <th>Room Number</th>
                                    </tr>
                            </thead>}
                            
                    </table>
                    <Info Id={1} Name={"Pearl"} Contact_Info={"9521074578"} Room_No={"001"} Room_Type={"Single"} GuestType={"General"}/>
                    <Info Id={2} Name={"Pearl"} Contact_Info={"9521074578"} Room_No={"001"} Room_Type={"Single"} GuestType={"General"}/>
                    <Info Id={3} Name={"Pearl"} Contact_Info={"9521074578"} Room_No={"001"} Room_Type={"Single"} GuestType={"General"}/>
                    <Info Id={4} Name={"Pearl"} Contact_Info={"9521074578"} Room_No={"001"} Room_Type={"Single"} GuestType={"General"}/>
    
                </div>
            </div>
        )
    }
}

export default ManageGuest
