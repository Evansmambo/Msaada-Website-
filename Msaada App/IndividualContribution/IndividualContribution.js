import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Components/IndividualContribution/IndividualContribution.css"
import MakePaymentPage from "./MakePaymentPage/MakePaymentPage";
import {
  EmailShareButton,
  FacebookShareButton, 
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  PinterestIcon,

  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,

  WhatsappIcon,
  WorkplaceIcon
} from "react-share";

function IndividualContribution() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [contribution, setContribution] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [paymentoption, setPaymentOption] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [openPaymentModal, setopenPaymentModal] = useState();

  // fetch a single post
  useEffect(() => {
    let id = { id: path };
    const getContribution = async () => {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/view/contribution",
        id
      );

      setContribution(res.data.response);
      setTitle(res.data.response.title);
      setDescription(res.data.response.description);
      setTargetAmount(res.data.response.targetAmount);
      setPaymentOption(res.data.response.paymentoption);
    };
    getContribution();
  }, [path]);

  // delete a single contribution
  const handleDelete = async (e) => {
    e.preventDefault()
    let id = { id: path };
    try {
      const res = await axios.post(
        "https://msaadaproject.herokuapp.com/api/delete/contribution",
        id
      );
      console.log(res.data);
      res.data && window.location.replace("/contributions");
    } catch (err) {
      console.log(err);
    }
  };

  // handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    let id = path;
    let updatedDetails = {
      id: id,
      title: title,
      description: description,
      targetAmount: targetAmount,
      paymentoption: paymentoption,
      verified: 1,
    }
    await axios.post(
      "https://msaadaproject.herokuapp.com/api/update/contribution", updatedDetails
    );
    window.location.reload()
    setUpdateMode(false)
  };

  // end of delete
  return (
    <div className="IndividualContributionWrapper">
      {openPaymentModal && <MakePaymentPage contributionId={contribution.id} contributionTitle={contribution.title} closePaymentModal={setopenPaymentModal} />}
          <div className="IndividualContribution">
        <h1 className="contributionHeader">{contribution.title}</h1>
        <p className="description">{contribution.description}</p>
        <p className="author">Contribution by <span>Dorry Elmah</span></p>
        <p className="author">created on<span> {new Date(contribution.created_at).toDateString()} </span></p>
        <button type="submit" className="paymentButton" onClick={() => setopenPaymentModal(true)}>Donate</button>

        <div className="socialIcons">

          <FacebookShareButton url ="https://stackoverflow.com/questions/67728350/parameter-href-should-represent-a-valid-url"
          quote={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          hashtag={"Helpingiscaring"}>
          <FacebookIcon className="socialIcon" round={true}></FacebookIcon>
          </FacebookShareButton>

          <WhatsappShareButton url ="https://stackoverflow.com/questions/67728350/parameter-href-should-represent-a-valid-url"
          separator={""}
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}>
          <WhatsappIcon round={true} className="socialIcon"></WhatsappIcon>
          </WhatsappShareButton>

          <TelegramShareButton url ="https://stackoverflow.com/questions/67728350/parameter-href-should-represent-a-valid-url"
          title ={"Hello friend I just donated towards this contribution,help us reach the goal by donating too !"}> 
            <TelegramIcon round={true} className="socialIcon">
            </TelegramIcon>
           </TelegramShareButton>

           <TwitterShareButton url ="https://stackoverflow.com/questions/67728350/parameter-href-should-represent-a-valid-url"
            hashtags = {["Helpingiscaring"]} 
           title ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          ><TwitterIcon round={true} className="socialIcon">
           </TwitterIcon>
           </TwitterShareButton>

           <EmailShareButton url ="https://stackoverflow.com/questions/67728350/parameter-href-should-represent-a-valid-url"
          hashtags = {["Helpingiscaring"]}
          subject={"Donation to a msaada app contribution"}
          separator={""} 
           body ={"Hello friend I just donated towards this contribution, help us reach the goal by donating too !"}
          >
           <EmailIcon className="socialIcon" round={true}></EmailIcon>
           </EmailShareButton>




        </div>
      </div>

      <div >
        <div className="amount-raised-container">
          <div className="amount-raised"><span className="amount-text">{targetAmount} /=</span> raised </div>
          <div className="dollars-per-mile">{targetAmount} /= needed</div>
        </div>
        </div>
        

        

        {updateMode ? (
          
          <div className="contributionBackground">
          <div className="updateContributionForm">
          <h3> Edit contribution</h3>
            <form >
              <div className="editForm">
              <div className="inputs">
                <label>Title</label>
              <input
                className="input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Amount</label>
              <input
                type="text"
                className="input"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
              />
               <label>Payment option</label>
              <input
                type="text"
                className="input"
                value={paymentoption}
                onChange={(e) => setPaymentOption(e.target.value)}
              />
              </div>
              <div className="textareas">
              <label>Description</label>
              <textarea
                type="text"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              </div>
              </div>
              <div className="editBtns">
              <button onClick={()=>setUpdateMode(false)} className="cancelButton">cancel</button>
              <button type="submit" onClick={handleUpdate} className="editBtn">Edit</button>
              </div>
            </form>
</div>
          </div>
          
        ) : (
          <div className="editContribution">
            <i
              className=" contributionIcon  far fa-edit"
              onClick={() => setUpdateMode(true)}
            ></i>
            <i
              className=" contributionIcon fas fa-trash-alt"
              onClick={handleDelete}
            ></i>
          </div>
        )}
    
      
    </div>
  );

}

export default IndividualContribution;