import React,{useState} from 'react'
import axios from 'axios';
import SingleContribution from "../SingleContribution"
import Loading from "../Loading/Loading"
import "./Search.css"

function Search() {

    const [loading, setLoading] = useState(false);
    const [contributions, setContributions] = useState([]);
    const [title,setTitle]=useState("")
     
    const searchHandler = async (e)=>{
      e.preventDefault()
      setLoading(true)
       
      const res = await axios.post(
        " https://msaadaproject.herokuapp.com/api/search/contribution",{title:title}
      );
      console.log(res.data.response)
      setContributions(res.data.response)
      

      contributions.length === 0 &&  <h1>Result not found</h1>
      setLoading(false)

     
    }
    return (
        <div>
               <div className="contributions">
                 <div className="searchWrapper">
            
          <input className="search" placeholder="search contribution" onChange={(e)=>setTitle(e.target.value.toLowerCase())} value={title}/>
          <button type="submit" className ="searchBtn" onClick={searchHandler}> {loading && "searching"}{!loading && "Search"}</button>
          </div>
        
         
          {loading && <Loading/>}
         
          <SingleContribution contributions={contributions} />
          
          </div>
            
        </div>
    )
}

export default Search