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
    <>
      <div className="hero-content">
        <p>The Future of Adaptive Learning for Schools</p>
        <a href="/login" className="btn">Get Started</a>
      </div>
    </>
  );
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
    </section>
  );
}

export { Gallery }
export default Landing;
