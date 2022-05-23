import React,{useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import "../App.css";
import { Link } from "react-router-dom";
import image1 from "../Assets/Images/pic.png.png"

function Navbar() {
  const { user, dispatch } = useContext(AuthContext)
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"})
  } 
  
  return (
    <div className="navbar">
      <div className="navbarLeft">

        <img src={image1} alt="" className="logo"/>
      <h1 className="logoText">Msaada App</h1>
      
      </div>
      <div className="navbarCenter">
        <ul className="navbarList">
          <Link className="link" to="/">
            <li className="navbarListItem">Home</li>
          </Link>
          <Link className="link" to="/contributions">
            <li className="navbarListItem">Contributions</li>
          </Link>
          <Link className="link" to="/createContribution">
            <li className="navbarListItem">Create Contribution</li>
          </Link>
          <Link className="link" to="/createContribution">
            <li className="navbarListItem">About Us</li>
          </Link>
        </ul>
      </div>
      <div className="navbarRight">
        <div className="navbarEnd">
          <Link to="/login">
            <button className="navbarEndItem" onClick={handleLogout}>
              {!user && "Log In"}
            {user && "LOGOUT"}
            </button>
          </Link>
          <Link to="/register">
            <button className="navbarEndItem">
              {!user && "Sign Up"}
            {user && user.name}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;