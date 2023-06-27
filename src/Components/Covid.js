import React, { useEffect,useState } from 'react'
import axios from 'axios'
import './Covid.css'

function Covid() {
    const [data,setData] = useState([]);

    const getCovidData = ()=>{
        axios.get('https://data.covid19india.org/data.json').then((res)=>{
            console.log(res.data.statewise[0]);
            setData(res.data.statewise[0]);
        }).catch(()=>{
            alert("unable to fetch data");
        })
    }

    useEffect(()=>{
        getCovidData();
    },[]);

  return (
    <div>
      <h1>LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <li className='card' style={{background:"#ff6b6b",boxShadow: "5px -5px 3px #ff6b6b"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>our</span>Country
                </p>
                <p className="card_total card_small">
                  India
                </p>
              </div>
          </div>
        </li>
        <li className='card' style={{background:"#48dbfb",boxShadow: "5px -5px 3px #48dbfb"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>Total</span>Recovered
                </p>
                <p className="card_total card_small">
                  {data.recovered}
                </p>
              </div>
          </div>
        </li>
        <li className='card' style={{background:"#1dd1a1",boxShadow: "5px -5px 3px #1dd1a1"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>Total</span>Confirmed
                </p>
                <p className="card_total card_small">
                  {data.confirmed}
                </p>
              </div>
          </div>
        </li>
        <li className='card' style={{background:"#f368e0",boxShadow: "5px -5px 3px #f368e0"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>Total</span>Death
                </p>
                <p className="card_total card_small">
                  {data.deaths}
                </p>
              </div>
          </div>
        </li>
        <li className='card' style={{background:"#ff9f43",boxShadow: "5px -5px 3px #ff9f43"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>Total</span>Active
                </p>
                <p className="card_total card_small">
                  {data.active}
                </p>
              </div>
          </div>
        </li>
        <li className='card' style={{background:"#54a0ff",boxShadow: "5px -5px 2px #54a0ff"}}>
          <div className='card_main'>
              <div className="card_inner">
                <p className="card_name">
                  <span>Last</span>Updated
                </p>
                <p className="card_total card_small" style={{lineHeight:"25px"}}>
                  {data.lastupdatedtime}
                </p>
              </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Covid
