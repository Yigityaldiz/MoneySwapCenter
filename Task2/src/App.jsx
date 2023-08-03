import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Select from "./components/select";
import  axios  from 'axios';
import  { fetchData } from "./api/getCurrencies";





function App() {
 
  const [value, setValue] = useState(null);
  const [selectTo, setSelectTo] = useState(null);
  const [selectFrom, setSelectFrom] = useState(null);
  const [result, setResult] = useState({});
  const [exchangeRate, setExchangeRate] = useState(null);
  
  const sendRequestUrl = `https://api.exchangerate.host/latest?BASE=${selectFrom}&symbols=${selectTo}&amount=${value}` ;
 

  useEffect(() => {
   
   fetchData().then( async(data)=> await  setExchangeRate(Object.keys(data))  )
 
  }, []);
  

  const sendRequest = (e) => {
    axios.get(sendRequestUrl)
    .then((res) => setResult(res.data.rates))
    .catch((err) =>console.log(err));
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectTo = (e) => {
    setSelectTo(e.target.value);
    console.log(selectTo);
  };
  const handleSelectFrom = (e) => {
    setSelectFrom(e.target.value);
  };

  return (
    <div className=" h-screen w-screen items-center flex justify-center bg-sky-500 ">
      <div className="box-border h-100 w-500 p-20 border-2  flex  ">
        <form className="flex justify-center space-x-10 ">
          <div className="caret-blue-500 focus:caret-indigo-500">
            <label htmlFor="">Amount:</label>
            <input type="number" onChange={handleChange} className="border-solid  rounded-lg border-2" ></input>
          </div>

          <Select onChange={handleSelectFrom} options={exchangeRate} label={"From:"} />

          <Select onChange={handleSelectTo} options={exchangeRate} label={"To:"} />

          <div className="rounded-lg">
            <button
              className=" border-solid rounded-lg border-white border-2 "
              type="button"
              onClick={sendRequest}
            >
              Change
            </button>
          </div>
           
          <div className="">{result[selectTo]}</div>
        </form>

       
      </div>
    </div>
  );
}

export default App;
