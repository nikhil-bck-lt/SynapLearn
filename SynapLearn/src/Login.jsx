import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (formData.username === storedUsername && formData.password === storedPassword) {
      alert("Login successful!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userDetails", JSON.stringify(formData));
      navigate("/dashboard");
      window.location.reload();
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    localStorage.setItem("username", formData.username);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    alert("Sign-up successful! You can now log in.");
    setIsSignUp(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-white">
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="mt-4 space-y-4">
          <div>
            <label className="block text-white">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-white">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
          )}

          <div>
            <label className="block text-white">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center text-white mt-4">
          {isSignUp ? "Already have an account?" : "New here?"}
          <button
            className="ml-2 text-blue-300 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
