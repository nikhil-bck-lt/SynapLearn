import { useState } from 'react'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Gallery from './Landing.jsx';  
import Landing from './Landing'
import Navbar from './components/Navbar.jsx';
import Login from './Login.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Support from './pages/support.jsx';
import Dashboard from './Dashboard.jsx';
import AIChatbot from './pages/AIChatbot.jsx';
import './App.css'

function App() {

  return (
    <>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<AIChatbot />} />
      
      </Routes>
    </>
  )
}


export default App
