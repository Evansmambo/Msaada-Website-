import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Sidebar from "../Sidebar";
import "./AccountDetails.css"

function AccountDetails() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="AccountDetailsWrapper">
        <Sidebar />
        <div className="accountDetails">
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountDetails;