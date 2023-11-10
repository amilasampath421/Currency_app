import React ,{useEffect, useState} from 'react'
import axios from "axios";
export default function MainPage() {
  //states for the form feilds
  const [date,setDate]=useState(null);
  const [sourceCurrency,setsourceCurrency]=useState("");
  const [targetCurrency,settargetCurrency]=useState("");
  const [amountInSourceCurrency,setamountInSourceCurrency]=useState(0);
  const [amountInTargetCurrency,setamountInTargetCurrency]=useState(0);
const [currencyNames,setcurrencyNames]=useState([]);
  //handle submit method
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //get all currency names
useEffect(()=>{
  const getCurrencyNames =async() => {
    try{
      const responce = await axios.get("http://localhost:5000/getAllCurrencies");
      setcurrencyNames(responce.data);
    }catch(err){
      console.error(err);
    }
  };
  getCurrencyNames();
} , [])

  return (
    <div className="">
        <h1 className=" font-bold text-5xl lg:mx-32 text-green-500">Convert Your Currency Today</h1>
        <p className="lg:mx-32 opacity-40 py-6">you can convert any Currency in your destination Currency with live update</p>
    <div className="mt-5 flex items-center justify-center flex-col">
      <section className="w-full lg:w-1/2">
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label 
                htmlfor={date} 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Date</label>
            <input 
            onChange={(e)=>setDate(e.target.value)}
            type="date" 
            id={date} 
            name={date} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required></input>
          </div>

          <div className="mb-4">
            <label 
                htmlfor={sourceCurrency} 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Source Currency</label>
            <select 
            onChange={(e)=>setsourceCurrency(e.target.value)}
            id={sourceCurrency} 
            name={sourceCurrency} 
            value={sourceCurrency}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" >
              <option value={sourceCurrency}>select source currency</option>
              {Object.keys(currencyNames).map((currency)=>(
                <option className="p-1" key={currency} value={currency}>
                  {currencyNames[currency]}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label 
                htmlfor={amountInSourceCurrency}
                className="block mb-2 text-sm font-medium text-white dark:text-white">Target Currency</label>
            <select 
            onClick={(e)=>settargetCurrency(e.target.value)}
            id={targetCurrency} 
            name={targetCurrency} 
            value={targetCurrency}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" >
              <option value="">select Target currency</option>
            </select>
          </div>

          <div className="mb-4">
            <label 
                htmlfor={amountInSourceCurrency} 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Amount In Source Currency</label>
            <input 
            onChange={(e)=>setamountInSourceCurrency(e.target.value)}
            type="number" 
            id={amountInSourceCurrency} 
            name={amountInSourceCurrency} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required></input>
          </div>

          <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>Get the target Currency</button>
        </form>
      </section>
    </div>
    </div>
  )
}
