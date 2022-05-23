import React,{useContext} from "react";
import "./Contribution.css";
import axios from "axios"
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { getDefaultNormalizer } from "@testing-library/react";


function Contribution({ contribution,isAdmin }) {
  const {user} = useContext(AuthContext);
  let admin =true;
  // if(user.email === "working@gmail.com"){
  //   return admin === true
  // }

  const handleVerify = async (e) => {
    e.preventDefault();
    
    let updatedDetails = {
      id: contribution.id,
      title: contribution.title,
      description: contribution.description,
      targetAmount: contribution.targetAmount,
      paymentoption: contribution.paymentoption,
      verified: 1,
    }
    await axios.post(
      "https://msaadaproject.herokuapp.com/api/update/contribution", updatedDetails
    );
    window.location.reload()
    
  };

  return (
    <div className="contribution">
      <div className="contribuitionWrapper">
        <div className="postTop">
          <div className="topLeft">
            <i className=" profileLogo fas fa-user"></i>
            <div className="nameInfo">
              <span className="profileName">
                <Link className="link" to={`/dashboard/accountDetails/`}>
                  
                  Dorry Elmah
                </Link>
              </span>
              <span className="contributionDate">
                {new Date(contribution.created_at).toDateString()}
              </span>
            </div>
          </div>

          <div className="topRight">
            <i className="fas fa-ellipsis-v"></i>
          </div>
        </div>

        <div className="creationInfo"></div>
       
          <h6 className="contributionTitle">{contribution.title}</h6>
      

        <p className="contributionDescription">{contribution.description}</p>

        <div className="paymentInfo"></div>
        <div className="amount">
          <div className="raised">
            <h2 className="header"> kes 10,000</h2>
            <span className="headerSpan">raised</span>
          </div>
          <div className="needed">
            <h2 className="header">kes 10,200</h2>
            <span className="headerSpan">needed</span>
          </div>
        </div>
        <Link to={`/contribution/${contribution.id}`} className="link">
        <button className="viewBtn">view contribution</button>
        <button onClick={handleVerify}>{admin && "verify"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Contribution;