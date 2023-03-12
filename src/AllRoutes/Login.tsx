import React, { useState } from "react";
import styles from "../Styles/Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (): any => {
    dispatch<any>(login({ username, password })).then((res: any) => {
      let token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        alert("Login Successfull");
        console.log("hi");
        navigate("/");
      } else {
        alert("login failed");
      }
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <div className={styles.loginMainBox}>
        <div className={styles.loginImageBox}></div>
        <div className={styles.loginFormBox}>
          <div className={styles.loginCircle}></div>
          <h2>ARBA DEVELOPMENT STUDIOS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
          </p>

          <input
            className={styles.user}
            type="text"
            placeholder="Username"
            onChange={(e): void => setUsername(e.target.value)}
            value={username}
          />
          <input
            className={styles.user}
            type="password"
            placeholder="Password"
            onChange={(e): void => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.loginbutton} onClick={handleSubmit}>
            Login
          </button>
          <p>
            Don't have any account?{" "}
            <span onClick={()=>navigate("/signup")} style={{ color: "#00abc5" ,cursor:"pointer"}}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
