import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

export default function Signup()
{
  return(
    <>
       <h1>Sign Up</h1>
       <div className="inputs">
          <input type="text" placeholder="Full Name"></input>
          <input type="email" placeholder=" Email"></input>
        </div>
        <div className="input">
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Re-enter Password"></input>
          <button type="submit">Sign Up</button>
        </div>

        <div className="line"></div>
        <div className="line2"></div>
        <div className="or">OR</div>
        
       
    </>
  );
}

