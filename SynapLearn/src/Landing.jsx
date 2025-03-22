import react from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Landing = () => {
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
export default Landing