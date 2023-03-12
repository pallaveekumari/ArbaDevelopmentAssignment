import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import styles from "../Styles/Signup.module.css";
const Signup = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Signup</h1>
      <div className={styles.loginMainBox}>
        <div className={styles.loginImageBox}></div>
        <div className={styles.loginFormBox}>
          <div className={styles.loginCircle}></div>
          <h2>ARBA DEVELOPMENT STUDIOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
          </p>
          <input className={styles.user} type="text" placeholder="Username" />
          <input className={styles.user} type="text" placeholder="Fullname" />
          <input className={styles.user} type="text" placeholder="Email" />
          <input
            className={styles.user}
            type="password"
            placeholder="Password"
          />
          <input
            className={styles.user}
            type="text"
            placeholder="Confirm password"
          />
          <button className={styles.loginbutton}>Register</button>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#00abc5", cursor: "pointer" }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
