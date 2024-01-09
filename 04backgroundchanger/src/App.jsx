import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-dvh duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py2 rounded-3xl'>
          <button className='outline-none shadow-lg text-white px-4 py-1 rounded-full'
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red
          </button>
          <button className='outline-none  shadow-lg text-white px-4 py-1 rounded-full'
          style={{backgroundColor: "olive"}}
          onClick={() => {setColor("olive")}}
          >Olive</button>
          <button className='outline-none shadow-lg text-white px-4 py-1 rounded-full'
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>
          <button className='outline-none shadow-lg text-white px-4 py-1 rounded-full'
          style={{backgroundColor: "orange"}}
          onClick={() => setColor("orange")}
          >Orange</button>
        </div>
      </div>      
    </div>
  )
}

export default App
