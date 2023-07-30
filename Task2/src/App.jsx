import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [value, setValue] = useState(null);
  const[selectTo,setSelectTo] = useState(null);
  const[selectFrom,setSelectFrom] = useState(null);
  const[result,setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => setExchangeRate(Object.keys(data.rates)));
    
  },[]);

  const sendRequest = (e) => {
    fetch(
       `https://api.exchangerate.host/latest?BASE=${selectFrom}&symbols=${selectTo}&${value}=1`
    )
    .then((response) => response.json())
    .then((data) => setResult(Object.keys(data.rates)))
    .catch((err)=>(console.log(err)))
    console.log(result)
      
    
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectTo = (e) =>{
    setSelectTo(e.target.value)
    
  }
  const handleSelectFrom = (e) =>{
    setSelectFrom(e.target.value)
  }

  

  return (

    <div>

      <form>

        <input type="number" onChange={handleChange}></input>

        <select onChange={handleSelectTo}>
          {exchangeRate?.map((exh,i) => (
            <option key={i}>{exh}</option>
          ))}
        </select>

        <select onChange={handleSelectFrom}>
          {exchangeRate?.map((exh, i) => (
            <option key={i}>{exh}</option>
          ))}
        </select>
        
        <button type="button" onClick={sendRequest}>
          Changee
        </button>
        <div>
         {result}
        </div>
        

      </form>

    </div>
  );
}

export default App;
