import React,{Component} from 'react'
import AdminHeader from '../AdminHeader';
import Searchbar from '../../SearchBar';
import './bootstrap.css'

class ManageGuest extends Component {
    constructor(props){
        super(props);

        this.state={
            data:[
                {Id:1,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
                {Id:2,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
                {Id:3,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
                {Id:4,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
                {Id:5,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'}
            ]
        }
    }
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
                    <div className="Searching">
                        <select className="Search_By" id="Search_By">
                            <option value="ID">ID</option>
                            <option value="Name">Name</option>
                            <option value="Room_Type">Room Type</option>
                            <option value="Room_Number">Room Number</option>
                        </select>
                        <Searchbar/>
                    </div>
                    <table className="table">
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Room Type</th>
                                        <th>Guest Type</th>
                                        <th>Room Number</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.data.map(
                                    guest => 
                                        <tr key={guest.Id}>
                                            <td>{guest.Id}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.Contact_Info}</td>
                                            <td>{guest.GuestType}</td>
                                            <td>{guest.Room_Type}</td>
                                            <td>{guest.Room_no}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                    </table>
    
                </div>
            </div>
        )
    }
}

export default ManageGuest
