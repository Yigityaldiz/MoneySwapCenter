import { useState, useEffect } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [value, setValue] = useState(null);
  const [selectTo, setSelectTo] = useState(null);
  const [selectFrom, setSelectFrom] = useState(null);
  const [result, setResult] = useState({});

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest")
      .then((response) => response.json())
      .then((data) => setExchangeRate(Object.keys(data.rates)));
  }, []);

  const sendRequest = (e) => {
    fetch(
      `https://api.exchangerate.host/latest?BASE=${selectFrom}&symbols=${selectTo}&amount=${value}`
    )
      .then((response) => response.json())
      .then((data) => setResult(data.rates))
      .catch((err) => console.log(err));
    console.log(result);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelectTo = (e) => {
    setSelectTo(e.target.value);
  };
  const handleSelectFrom = (e) => {
    setSelectFrom(e.target.value);
  };

  return (
    <div className=" h-screen w-screen items-center flex justify-center bg-sky-500 ">
      <div className="box-border h-100 w-500 p-20 border-2  flex  ">
        <form className="flex justify-center space-x-10 " >
          <div className="caret-blue-500 focus:caret-indigo-500" >
            <input  type="number" onChange={handleChange}></input>
          </div>

          <div >
            <select  onChange={handleSelectFrom}>
              {exchangeRate?.map((exh, i) => (
                <option key={i}>{exh}</option>
              ))}
            </select>
          </div>

          <div>
            <select onChange={handleSelectTo}>
              {exchangeRate?.map((exh, i) => (
                <option key={i}>{exh}</option>
              ))}
            </select>
          </div>

          <div className="rounded-lg" >
            <button className=" border rounded-lg button lg-4 flex item-center" type="button" onClick={sendRequest}>
              Change
            </button>
          </div>

         
        </form>
        <div className="">{result[selectTo]}</div>
      </div>
    </div>
  );
}

export default App;
