import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <text className="text-x3 font-bold">SynapLearn</text>
      <div>
        <Link to="/" className="px-1 hover:text-gray-300">Home</Link>
        <Link to="/about" className="px-1 hover:text-gray-300">About</Link>
        <Link to="/support" className="px-5 hover:text-gray-300">Support</Link>
        <Link to="/login" className="px-1 hover:text-gray-300">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
