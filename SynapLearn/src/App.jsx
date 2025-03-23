import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Landing from './Landing'
import Navbar from './components/Navbar.jsx';
import Login from './Login.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Support from './pages/support.jsx';
import Dashboard from './Dashboard.jsx';
import Chatbot from './pages/Chatbot.jsx';
import Curriculum from './pages/Curriculum.jsx';
import Resources from './pages/Resources.jsx';
import './App.css'

function App() {

  return (
    <>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  )
}


export default App
