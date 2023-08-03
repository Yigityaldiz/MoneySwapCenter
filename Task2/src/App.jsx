import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Select from "./components/select";
import  axios  from 'axios';


function App() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [value, setValue] = useState(null);
  const [selectTo, setSelectTo] = useState(null);
  const [selectFrom, setSelectFrom] = useState(null);
  const [result, setResult] = useState({});
  const baseURL = "https://api.exchangerate.host/latest";
  const sendRequestUrl = `https://api.exchangerate.host/latest?BASE=${selectFrom}&symbols=${selectTo}&amount=${value}`
 

  useEffect(() => {
   
   axios.get(baseURL)
   .then((res) => setExchangeRate( Object.keys(res.data.rates)  )) //object key kullanmayip usestate e [] verince olmadi sor 
   .catch((err) => console.log(err))
   
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
            <input type="number" onChange={handleChange} ></input>
          </div>

          <Select onChange={handleSelectFrom} options={exchangeRate} label={"From:"} />

          <Select onChange={handleSelectTo} options={exchangeRate} label={"To:"} />

          <div className="rounded-lg">
            <button
              className=" border rounded-lg button lg-4 flex item-center"
              type="button"
              onClick={sendRequest}
            >
              Change
            </button>
          </div>
           
          <div label="asdss" className="">{result[selectTo]}</div>
        </form>

       
      </div>
    </div>
  );
}

export default App;
