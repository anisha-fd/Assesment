import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import Form from './Form/Form'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div>
   <Form/>
     
  
    </div>
  )
}

export default App
