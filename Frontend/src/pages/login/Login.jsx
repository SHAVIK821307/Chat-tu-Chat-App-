import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Login At <span className={styles.logo}>Chat-tu</span></h1>

      <form action="" className={styles.form}>
        <div className={styles.inputField}>
          <label className={styles.label}>Username:</label>
          <div className={styles.shadow}>
            <input type="text" placeholder="Enter username" />
          </div>
        </div>

        <div className={styles.inputField}>
          <label className={styles.label}>Password:</label>
          <div className={styles.shadow}>
            <input type="password" placeholder="password" />
          </div>
        </div>
        <Link to="/signup"> Don't have an account?</Link>
        <div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
