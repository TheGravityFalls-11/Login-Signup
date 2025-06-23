import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      
       
    </>
  )
}

export default App
