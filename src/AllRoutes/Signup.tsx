import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import styles from "../Styles/Signup.module.css";
const Signup = () => {
  const [username, setUsername] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (): any => {
    dispatch<any>(login({ username, password })).then((res: any) => {
      let token = localStorage.getItem("token");
      if (token) {
        alert("Signup Successfull");
        navigate("/");
      } else {
        alert("Something went wrong...");
      }
    });
  };

  return (
    <div>
      <h1>Signup</h1>
      <div className={styles.loginMainBox}>
        <div className={styles.loginImageBox}></div>
        <div className={styles.loginFormBox}>
          <div className={styles.loginCircle}></div>
          <h2>ARBA DEVELOPMENT STUDIOS</h2>
          <p>This is arba devlopment website</p>
          <input
            className={styles.user}
            type="text"
            placeholder="Username"
            onChange={(e): void => setUsername(e.target.value)}
            value={username}
          />
          <input className={styles.user} type="text" placeholder="Fullname" />
          <input className={styles.user} type="text" placeholder="Email" />
          <input
            className={styles.user}
            type="password"
            placeholder="Password"
            onChange={(e): void => setPassword(e.target.value)}
            value={password}
          />
          <input
            className={styles.user}
            type="text"
            placeholder="Confirm password"
          />
          <button className={styles.loginbutton} onClick={handleSubmit}>
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span style={{ color: "blue" }}>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
