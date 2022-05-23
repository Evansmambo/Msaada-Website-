import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import "./MakePaymentPage.css"
import axios from "axios";
import swal from "sweetalert";

function MakePaymentPage({ contributionId, contributionTitle, closePaymentModal }) {
    const { user } = useContext(AuthContext);
    const [telephone, setTelephone] = useState("");
    const [amount, setAmount] = useState("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    //make payment
    let PaymentDetails;
    async function handlePayment(e) {
        e.preventDefault();
        setErrors([]);
        //payment details
        if (user !== null) {

            PaymentDetails = {
                id: contributionId,
                phone: user.phone,
                amount,
            };
        } else {

            PaymentDetails = {
                id: contributionId,
                phone: telephone,
                amount,
            };
        }
        setLoading(true)
        try {
            const res = await axios
                .post("https://msaadaproject.herokuapp.com/api/pay", PaymentDetails)

            res.data.error && setErrors(res.data.error);
            console.log(res.data.error)
            setLoading(false)

            if (res.data.responceStatusCode === "200") {
                swal({
                    title: "Request successful",
                    text: "Thank you! Please input a pin on your phone to complete the donation!",
                    icon: "success",
                });
            }

        }

        catch (err) {
            console.log(err);
        };

    }


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="donationDetails">
                    {user && <p className="leadParagraph">Hello, {user.name}</p>}
                    <p className="contributionDetails">You are contributing for <span className="span"> <b>{contributionTitle}</b></span> </p>
                    <p className="paragraph">Your contribution is benefiting Dorry Elmah</p>
                </div>
                <div>
                    <form>
                        {!user && (<div><input type="tel" className="input" placeholder="Enter your m-pesa number eg 2547*******" value={telephone}
                            onChange={(e) => setTelephone(e.target.value)} />
                            <span className="errorMessage">{errors.phone}</span>
                        </div>
                        )}
                        <input type="text" placeholder="Enter donation amount" className="input" value={amount}
                            onChange={(e) => setAmount(e.target.value)} />
                        <span className="errorMessage">{errors.amount}</span>

                        <div className="formButtons">
                            <button className="cancelBtn" onClick={() => closePaymentModal(false)}>cancel</button>
                            <button className="donateBtn" onClick={handlePayment}>{!loading && "Donate"} {loading && "processing...please wait"}</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default MakePaymentPage