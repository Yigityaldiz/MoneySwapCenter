import { useState,useEffect} from 'react'

import './App.css'

function App() {
 
  const [exchangeRate,setExchangeRate] = useState(null)

  useEffect( ()=>{
    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then(data => setExchangeRate(Object.keys(data.rates)))
    console.log(exchangeRate);
  } )

  return (
    <>
    <div >

    
    <select >
      {exchangeRate?.map((exh)=>(
        <option>{exh}</option>
        
      ))}
    </select>
    </div>
    
    </>
    
    
  )
}

export default App
