import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Gallery from './Landing.jsx';  
import Landing from './Landing'
import './App.css'
import Navbar from './components/Navbar.jsx';

import Login from './Login.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Support from './pages/support.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <nav>
        <Link to="/">Landing</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>
    </nav> */}

     <Navbar/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      </Routes>
    </>
  )
}


export default App
