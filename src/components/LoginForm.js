import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/AuthForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      console.log(response.data);
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="auth-btn">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register" className="auth-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
