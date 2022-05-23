import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./CreateContribution.css";
import Sidebar from "../Sidebar/Sidebar";

function CreateContribution() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  
  

  async function handleCreateContribution(e) {
      setLoading(true)
    e.preventDefault();
    let contributionDetails = {
      title,
      description,
      targetAmount,
      paymentoption,
    };

    axios
      .post(
        "https://msaadaproject.herokuapp.com/api/create/contribution",
        contributionDetails
      )
      .then(function (response) {
        console.log(response.data);
        setLoading(false)

        if (response.data.success === true) {
          swal({
            title: "Success",
            text: "Succefully created a contribution! We will verify it very soon! ",
            icon: "success",
          });
        } 
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
    <div className="createContributionContainer">
      <Sidebar className="sidebar"/>
   
    <div className="createContribution">
        <div className="createContributionWrapper">
        <h1 className="formTitle">Create A Contribution</h1>
      <form className="formInputs" > 
      
          

        <div className="inputs">
            
          <label htmlFor="title" className="label">
            contribution title:
          </label>
          <input
            type="text"
            placeholder="Enter title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            title="title"
            className="input"
            autoComplete="true"
          />
          <span className="errorMessage">{errors.title}</span>
          
          <label htmlFor="psw">
            target amount
          </label>
          <input
            type="text"
            placeholder="Enter target amount..."
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            name="targetamount"
            required
            className="input"
            autoComplete="true"
          />
          <span>{errors.targetamount}</span>
          
        <label htmlFor="paymentoption">
         payment Option
        </label>
        <input
          type="paymentOption"
          placeholder=" paymentOption"
          name="psw"
          value={paymentoption}
          onChange={(e) => setPaymentOption(e.target.value)}
          required
          className="input"
          autoComplete="true"
        />
        <span>{errors.paymentoption}</span>

        </div>   
        


          
          
        
        
        <div className="textareas">
          <label htmlFor="description">
           description
          </label>
          <textarea
            type="text"
            id="description"
            className="textarea"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            required
            autoComplete="true"
          />
          <span className="errorMessage">{errors.description}</span>
        </div>
        

       
        <button className="formButton" type="submit" onClick={handleCreateContribution}>
            {loading && "Creating Contribution ..."}
            {!loading && "create contribution"}
           
          </button>
          
        
        
      </form>
     

    </div>
    </div>
    </div>
    </>
  );
}

export default CreateContribution;