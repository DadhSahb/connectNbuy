import React, { useState } from "react";
import "../Auth/auth.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assests/connectNbuy.png";

export default function Auth() {
  const [change, setChange] = useState(false);
  const navigate = useNavigate();

  //FOR LOGIN
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="body">
      <div class="container sign-up-mode">
        <div class="forms">
          <div class="signin-signup">
            <form class="form sign-in-form">
              <h2 class="title">Login</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input
                  name="username"
                  type="email"
                  required
                  placeholder="Email"
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn solid">
                Login
              </button>
            </form>
            <form class="form sign-up-form">
              <h2 class="title">Register</h2>
              <div class="input-field">
                <i class="fas fa-user"></i>
                <input type="text" id="username" />
              </div>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input type="password" id="password" placeholder="Password" />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm password"
                />
              </div>
              <button type="submit" class="btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>ConnectNBuy</h3>
              <p></p>
              <button class="btn transparent" id="sign-up-btn">
                Register
              </button>
            </div>
            <img src={logo} class="image" alt="girl phone" />
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>ConnectNBuy</h3>
              <p></p>
              <button class="btn transparent" id="sign-in-btn">
                Login
              </button>
            </div>
            <img src={logo} class="image" alt="girl sofa" />
          </div>
        </div>
      </div>
    </div>
  );
}
