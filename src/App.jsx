import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './elements/Navbar'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Home/>   
    </>
  )
}

export default App
