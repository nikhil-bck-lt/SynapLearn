import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    
    if (isAuthenticated) {
      navigate("/dashboard"); // ✅ Redirect to Dashboard if logged in
    }
  }, [navigate]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "10px" }}>
      <div> {/* Removed marginBottom */}
        <svg
          version="1.1"
          viewBox="0 0 250 190"
          width="500" // Increased width
          height="300" // Increased height
        >
          <circle cx="50" cy="50" r="25" fill="#6366F1" />
          <circle cx="40" cy="40" r="5" fill="#FACC15" />
          <circle cx="60" cy="40" r="5" fill="#FACC15" />
          <circle cx="40" cy="60" r="5" fill="#FACC15" />
          <circle cx="60" cy="60" r="5" fill="#FACC15" />
          <line x1="40" y1="40" x2="60" y2="40" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="40" y1="40" x2="40" y2="60" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="60" y1="40" x2="60" y2="60" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="40" y1="60" x2="60" y2="60" stroke="#FFFFFF" strokeWidth="2" />
          <text x="90" y="60" fontFamily="Arial, sans-serif" fontSize="25" fill="#333">
            <tspan fontWeight="bold" fill="FFFFFF">SYNAP</tspan>
            <tspan fill="#6366F1" fontWeight="bold">LEARN</tspan>
          </text>
        </svg>
      </div>
      <div className="hero-content" style={{ textAlign: "center", padding: "5px" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>The Future of Adaptive Learning for Schools</p>
        <a href="/login" className="btn" style={{ fontSize: "2rem", padding: "10px 10px" }}>Get Started</a>
      </div>
    </div>
  );
}

export default Landing;
