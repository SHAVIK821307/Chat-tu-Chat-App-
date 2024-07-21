import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
const SignUp = () => {

  const handleGender=(e)=>{
    setGender(e.target.value)
    
    setinputs({...inputs,gender:e.target.value})
  }
  const [gender,setGender]=useState("male")
  const [inputs, setinputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPass: "",
    gender: gender,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        SignUp At <span className={styles.logo}>Chat-tu</span>
      </h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <label className={styles.label}>Full Name:</label>
          <div className={styles.shadow}>
            <input
              type="text"
              placeholder="Enter FullName"
              value={inputs.fullName}
              onChange={(e) => {
                setinputs({ ...inputs, fullName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Username:</label>
          <div className={styles.shadow}>
            <input
              type="text"
              placeholder="Enter username"
              value={inputs.userName}
              onChange={(e) => {
                setinputs({ ...inputs, userName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className={styles.inputField}>
          <label className={styles.label}>Password:</label>
          <div className={styles.shadow}>
            <input
              type="password"
              placeholder="password"
              value={inputs.password}
              onChange={(e) => {
                setinputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className={styles.inputField}>
          <label className={styles.label}>Confirm Password:</label>
          <div className={styles.shadow}>
            <input
              type="password"
              placeholder="password"
              value={inputs.confirmPass}
              onChange={(e) => {
                setinputs({ ...inputs, confirmPass: e.target.value });
              }}
            />
          </div>
        </div>
        <label className={`${styles.label} mr-2 cursor-pointer`} >Male: 
        <input type="radio" value="male" checked={gender==="male"} onChange={handleGender} />
        </label>
        <label className={`${styles.label} cursor-pointer`} >Female: 
        <input type="radio" value="female" checked={gender==="female"} onChange={handleGender} />
        </label>
        <br />
        <Link to="/login"> Already have an account?</Link>
        <div>
          <button className={styles.button} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
