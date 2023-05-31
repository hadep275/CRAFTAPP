import { useState } from 'react'
import Navbar from './routes/navbar'
import { Outlet } from 'react-router-dom'
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import './App.css'

function App() {
  
  const [results, setResults] = useState([]);

  return (
    <>
    <div>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
  )
}

export default App
