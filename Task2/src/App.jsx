import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Select from "./components/select";
import  { fetchData ,sendRequest  } from "./api/getCurrencies";







function App() {
 
  const [value, setValue] = useState(null);
  const [selectTo, setSelectTo] = useState(null);
  const [selectFrom, setSelectFrom] = useState(null);
  const [result, setResult] = useState({});
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  
  
 

  useEffect(() => {
   
    fetchData().then( async (data)=>  await setExchangeRate(Object.keys(data))  )
 
  }, []);

  const clickButton = async (e) => {
    setLoading(true);

   await sendRequest(selectFrom,selectTo,value).then((res) => setResult(res.data.rates) )
  .catch((err) =>console.log(err))
  setLoading(false);

  }
  
  

  

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
    <div className=" h-screen w-screen items-center flex justify-center bg-stone-600 ">
      <div className=" h-100 w-500 p-20   flex  ">
        <form className="flex justify-center space-x-10 ">
          <div className="">
            <label htmlFor="">Amount:</label>
            <input type="number" onChange={handleChange} className="border-solid  rounded-lg border-2" ></input>
          </div>

          <Select onChange={handleSelectFrom} options={exchangeRate} label={"From:"} />

          <Select onChange={handleSelectTo} options={exchangeRate} label={"To:"} />

          <div className="rounded-lg">
            <button 
              className=" border-solid rounded-lg border-white border-2 "
              type="button"
              onClick={clickButton}
              
            >
               {loading ? <>Loading..</> : <>Convert</>}
            </button>
          </div>
           
          <div className="">{result[selectTo]}</div>
        </form>

       
      </div>
    </div>
  );
}

export default App;
