import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className=" font-bold text-5xl lg:mx-32 text-green-500">Convert Your Currency Today</h1>
        <p className="lg:mx-32 opacity-40 py-6">you can convert any Currency in your destination Currency with live update</p>
    </div>
    <div>
      <section>
        <form>
          <div>
            <label>Date</label>
            <input type="date"></input>
          </div>
        </form>
      </section>
    </div>
  )
}
