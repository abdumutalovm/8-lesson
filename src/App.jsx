import React from 'react'
import LineChart from './components/Charts/LineChart'

function App() {
  function handleFilter() {

  }
  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-center text-3xl tracking-wider mt-2 text-zinc-500 font-bold'>Total</h1>
      <div className='flex items-center gap-3 justify-center mt-3'>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>12H</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>1D</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>1W</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>1M</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>1y</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>2Y</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>5Y</button>
        <button className='transition duration-300 font-semibold px-4 py-1 rounded-2xl text-white bg-[#0071EB] hover:opacity-70' onClick={handleFilter}>10Y</button>
      </div>
      <div className='w-full h-[600px] mx-auto mt-2'>
        <LineChart handleFilter={handleFilter}></LineChart>
      </div>
    </div>
  )
}

export default App