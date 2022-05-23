import React,{useEffect,useState}  from 'react'
import SingleContribution from '../SingleContribution';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Transactions from '../Transactions/Transactions';



function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [contributions, setContributions] = useState([]);
    const [transactions,setTransactions]=useState([])
   
    useEffect(() => {
      const fetchContributions = async () => {
        setLoading(true);
        const response = await axios.get(
          "https://msaadaproject.herokuapp.com/api/all/contributions"
        );
        setContributions(response.data.list);
        setLoading(false);
      };
  
      fetchContributions();

    }, []);

    
      
         


    

    return (
        <div>
            <SingleContribution contributions={contributions} isAdmin ={true} />
            {loading && <Loading/>}
           </div>
    )
}

export default AdminDashboard