import React,{useState,useEffect} from 'react'
import axios from "axios"
import Sidebar from '../Sidebar'
import "./Transactions.css"
import Loading from '../Loading/Loading';


function Transactions() {

    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);
   
    useEffect(() => {
      const fetchTransactions = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/completed/transactions"
        );
        setTransactions(response.data.response);
        setLoading(false);
      };
  
      fetchTransactions();
    }, []);
  
    return (
      <div className="transactionsWrapper">
          <Sidebar/>
          <div className="transactions">
          <table>
              <thead>
              <tr>
    <th>Transaction Id</th>
    <th>Phone</th>
    <th>Amount</th>
    <th>Contribution Id</th>
    <th>Status</th>
    <th>Date</th>
  </tr>

              </thead>


              <tbody>
                  {loading && <Loading/>}
                  {
                      transactions.map((transaction)=>(
                          <tr key={transaction.id}>
                              <td> {transaction.id}</td>
                              <td> {transaction.PhoneNumber}</td>
                              <td> {transaction.Amount}</td>
                              <td> {transaction.contributionId}</td>
                              <td className="completed">completed</td>
                              <td>{new Date (transaction.created_at).toDateString()}</td>
                          </tr>
                      ))
                  }

              </tbody>
                        </table>
                        </div>
        
               
         
      </div>
    )
}

export default Transactions