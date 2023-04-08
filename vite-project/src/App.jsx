import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
export default function Signup() {
  return (
    <div className="layout">
      <h1>Sign Up</h1>
      <form action="none">
        <div className="input">
          <input type="text" placeholder="Full Name"></input>
          <input type="email" placeholder=" Email"></input>
        </div>
        <div className="input">
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Re-enter Password"></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="or">OR</div>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
  );
}
