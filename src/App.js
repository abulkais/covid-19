
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
function App() {

  const [data, setuser] = useState([]);
  const getuser = async () => {
    try {
    const res = await fetch('https://data.covid19india.org/data.json');
    // console.log(res);
    const data1 = await res.json();
    // console.log(data1);
    setuser(data1.statewise);
    // console.log(data1.statewise)
    }
    catch(error){
      alert("Warning! Please check the internet connection. This COVID API requires an active internet connection to function properly.");
    }

  }
  useEffect(() => {
    getuser();
  }, [])

  return (
    <>


      <div className="container mt-5">
        <h2 style={{ textAlign: 'center' }}>Indian States Covid-19 Dashboard</h2>
        <div className="mt-5 table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className='table-secondary'>
              <tr>
                <th>State</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>DeltaConfirmed</th>
                <th>DeltaDeaths</th>
                <th>DeltaRecovered</th>
                <th>LastUpdatedTime</th>
                <th>Migratedother</th>
                <th>Recovered</th>
                <th>Statecode</th>

              </tr>
            </thead>
            <tbody>
              {
                data.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{val.state}</td>
                      <td>{val.active}</td>
                      <td>{val.confirmed}</td>
                      <td>{val.deaths}</td>
                      <td>{val.deltaconfirmed}</td>
                      <td>{val.deltadeaths}</td>
                      <td>{val.deltarecovered}</td>
                      <td>{val.lastupdatedtime}</td>
                      <td>{val.migratedother}</td>
                      <td>{val.recovered}</td>
                      <td>{val.statecode}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
          <h3 style={{textAlign:'center'}}> Create By Kaish</h3>
        </div>
      </div>
    </>
  );
}

export default App;
