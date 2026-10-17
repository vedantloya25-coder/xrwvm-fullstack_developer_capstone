import React, { useState } from "react";
import "./Register.css";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import close_icon from "../assets/close.png";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    let register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
      }),
    });

    const json = await res.json();
    if (json.status) {
      sessionStorage.setItem("username", json.userName);
      window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
    } else {
      alert("Registration failed. Please check your credentials.");
    }
  };

  return (
    <div className="register_container" style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
      <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span className="text" style={{ fontSize: "30px", fontWeight: "bold" }}>Sign Up</span>
        <a href="/" onClick={() => { gohome(); }}>
          <img style={{ width: "1cm" }} src={close_icon} alt="Close" />
        </a>
      </div>
      <hr />

      <form onSubmit={register}>
        <div className="inputs">
          {/* 1. Username */}
          <div className="input">
            <img src={user_icon} className="img_icon" alt="Username Icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input_field"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* 2. First Name */}
          <div className="input">
            <img src={user_icon} className="img_icon" alt="First Name Icon" />
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              className="input_field"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          {/* 3. Last Name */}
          <div className="input">
            <img src={user_icon} className="img_icon" alt="Last Name Icon" />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              className="input_field"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* 4. Email */}
          <div className="input">
            <img src={email_icon} className="img_icon" alt="Email Icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input_field"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* 5. Password */}
          <div className="input">
            <img src={password_icon} className="img_icon" alt="Password Icon" />
            <input
              type="password"
              name="psw"
              placeholder="Password"
              className="input_field"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Register Button */}
        <div className="submit_panel" style={{ marginTop: "20px" }}>
          <input className="submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
