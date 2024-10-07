import { useState } from 'react'

function App() {
  
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2'>
          <button className=' rounded-full px-4 py-1 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#930000"}} onClick={() => setColor("#930000")}>Red</button>
          <button className=' rounded-full px-4 py-1 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#067e00"}} onClick={() => setColor("#067e00")}>Green</button>
          <button className=' rounded-full px-4 py-1 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"Black"}} onClick={() => setColor("Black")}>Black</button>
          <button className=' rounded-full px-4 py-1 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"#ff7c00"}} onClick={() => setColor("#ff7c00")}>Orange</button>
          <button className=' rounded-full px-4 py-1 text-white shadow-lg hover:cursor-pointer outline-none' style={{backgroundColor:"White"}} onClick={() => setColor("white")}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
