import React from "react";
import { Link } from "react-router-dom";
import "../../App.css"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="sidebarOptions">
          <h2 className="sidebarUsername">Dorry Elmah</h2>
          <ul className="sidebarList">
            <Link to="/contributions" className="link">
              <li className="sidebarListItem">
                <span>
                  <i className=" sidebarIcon fas fa-file-invoice-dollar"></i>
                </span>
                View Contributions
              </li>
            </Link>
            <Link to="/createContribution" className="link">
              <li className="sidebarListItem">
                <span>
                  <i className=" sidebarIcon fas fa-donate"></i>
                </span>
                Create Contribution
              </li>
            </Link>
            <Link className="link" to="/transactions">
            <li className="sidebarListItem">
              <span>
                <i className="sidebarIcon fas fa-history"></i>
              </span>
              My Transactions
            </li>
            </Link>

            <Link to="/accountDetails" className="link">
              <li className="sidebarListItem">
                <span>
                  <i className=" sidebarIcon fas fa-user-circle"></i>
                </span>
                Account Details
              </li>
            </Link>
            <Link  to="/updateAccount" className="link">

            <li className="sidebarListItem">
              <span>
                <i className="sidebarIcon fas fa-user-edit"></i>
              </span>
              Update Account
            </li>
            </Link>

            <li className="sidebarListItem">
              <span>
                <i className="sidebarIcon fas fa-user-minus"></i>
              </span>
              Delete Account
            </li>
            <li className="sidebarListItem">
              <span>
                <i className="sidebarIcon fas fa-home"></i>
              </span>
              Home
            </li>

            <li className="sidebarListItem">
              <span>
                <i className="sidebarIcon fas fa-sign-out-alt"></i>
              </span>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;