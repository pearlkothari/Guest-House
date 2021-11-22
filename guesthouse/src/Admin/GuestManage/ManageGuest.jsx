import React,{Component} from 'react'
import SearchBar from "material-ui-search-bar";
import AdminHeader from '../AdminHeader';
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
                                    todo => 
                                        <tr key={todo.Id}>
                                            <td>{todo.Id}</td>
                                            <td>{todo.Name}</td>
                                            <td>{todo.Contact_Info}</td>
                                            <td>{todo.GuestType}</td>
                                            <td>{todo.Room_Type}</td>
                                            <td>{todo.Room_no}</td>
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
