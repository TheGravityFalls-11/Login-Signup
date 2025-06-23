import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    
     if ( !email || !password) {
  alert("Please fill in all fields before login.");
  return;
     }

    // Client-side email validation
    if (!email.includes("@")) {
      setErrorMsg("Email must contain '@'");
      return;
    }

    axios.post("http://localhost:8080/api/login", { email, password })
      .then((result) => {
        if (result.data.status === "ok") {
          navigate("/home");
        } else {
          setErrorMsg(result.data.message || "Invalid email or password");
        }
      })
      .catch((err) => {
        console.error("Login error", err);
        setErrorMsg("Server error, please try again later.");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "lightblue" }}  // <-- light blue background
    >
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form>

        <p>Don't have an account?</p>
        <Link
          to="/"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
