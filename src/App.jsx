import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2'>
          <button className=' rounded-full px-4 py-2 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#e5eaf5"}} onClick={() => setColor("#e5eaf5")}></button>
          <button className=' rounded-full px-4 py-2 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#a28089"}} onClick={() => setColor("#a28089")}></button>
          <button className=' rounded-full px-4 py-2 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#1561ad"}} onClick={() => setColor("#1561ad")}></button>
          <button className=' rounded-full px-4 py-2 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#c7af6b"}} onClick={() => setColor("#c7af6b")}></button>
          <button className=' rounded-full px-4 py-2 text-black shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#94f0f1"}} onClick={() => setColor("#94f0f1")}></button>
        </div>
      </div>
    </div>
  )
}

export default App
