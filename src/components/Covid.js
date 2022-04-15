import React, {useEffect , useState} from "react";
import './Covid.css'
const Covid = ()=>{
  const [data, setData] = useState([])
    const GetCovidData = async()=>{
      
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const actualdata = await res.json()
            console.log(actualdata.statewise[0])
            setData(actualdata.statewise[0])
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(()=>{
        GetCovidData()
      },[])
      return(
        <>
          <h1>LIVE</h1><br/>
          <h1>COVID-19 CORANAVIRUS TRACKER</h1>
          <ul>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>OUR</spam> COUNTRY</p>
                    <p className="card_total">INDIA</p>
                </div>
              </div>
              </li>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>TOTAL</spam>ACTIVE CASE</p>
                    <p className="card_total">{data.active}</p>
                </div>
              </div>
              </li>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>TOTAL</spam>TOTAL DEATHS</p>
                    <p className="card_total">{data.deaths}</p>
                </div>
              </div>
              </li>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>TOTAL</spam>RECOVERED</p>
                    <p className="card_total">{data.recovered}</p>
                </div>
              </div>
              </li>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>TOTAL</spam>CONFIRMED</p>
                    <p className="card_total">{data.confirmed}</p>
                </div>
              </div>
              </li>
              <li className="card">
              <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><spam>LAST</spam>UPDATED TIME</p>
                    <p className="card_total">{data.lastupdatedtime}</p>
                </div>
              </div>
              </li>
          </ul>
        </>
      )
}

export default Covid