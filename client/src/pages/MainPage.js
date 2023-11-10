import React from 'react'

export default function MainPage() {
  return (
    <div className="">
        <h1 className=" font-bold text-5xl lg:mx-32 text-green-500">Convert Your Currency Today</h1>
        <p className="lg:mx-32 opacity-40 py-6">you can convert any Currency in your destination Currency with live update</p>
    <div className="mt-5 flex items-center justify-center flex-col">
      <section className="w-full lg:w-1/2">
        <form>
          <div className="mb-4">
            <label 
                htmlfor="" 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Date</label>
            <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required></input>
          </div>

          <div className="mb-4">
            <label 
                htmlfor="" 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Source Currency</label>
            <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
              <option value="">select source currency</option>
            </select>
          </div>

          <div className="mb-4">
            <label 
                htmlfor="" 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Target Currency</label>
            <select id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required>
              <option value="">select Target currency</option>
            </select>
          </div>

          <div className="mb-4">
            <label 
                htmlfor="" 
                className="block mb-2 text-sm font-medium text-white dark:text-white">Amount In Source Currency</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required></input>
          </div>
          <button className='bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md'>Get the target Currency</button>
        </form>
      </section>
    </div>
    </div>
  )
}
