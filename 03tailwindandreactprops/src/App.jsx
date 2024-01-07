import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  
  return (
    <>
     <h1 className='text-green-700 pb-5 text-5xl'>Hello World, </h1>
     <h2 className='text-2xl'>My simple website utilizing Tailwind CSS and exploring React props</h2>
     <Card username="Gideon" position="Front-end Developer" imageSource="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
     <Card username="Kelvin" position="Lecturer" imageSource="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </>
  )
}

export default App
