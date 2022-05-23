import React,{useContext} from 'react'
import { AuthContext } from '../../Context/AuthContext'
import Sidebar from '../Sidebar'
import "./UpdateAccount.css"

function UpdateAccount() {
    const {user} = useContext(AuthContext)
    return (
        <div className="updateAccountDetailsWrapper">
            <Sidebar/>
            <div className="updateAccountDetails">
                <p>You can update you account details below {user.name}</p>
                <form>
                    <label>Phone number</label>
                    <input type="tel" value={user.phone}/>
                    <label>Email</label>
                    <input type="email" value={user.email}/>
                    <button type="submit">Update Account</button>
                </form>
            </div>
            
        </div>
    )
}

export default UpdateAccount