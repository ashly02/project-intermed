import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import logo from './logo.png';
import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();

  

  const allowedDomains = ['ug.cusat.ac.in', 'pg.cusat.ac.in'];
  const [values, setValues] = useState({
    name: "",
    email: "",
    
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    const emailParts = values.email.split('@');
    const emailDomain = emailParts[1];
    if (!allowedDomains.includes(emailDomain)) {
      alert('Invalid email domain!');
      return;
    }
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      <img src={logo} className={styles.applogo} alt="logo"  />
        <h1 className={styles.heading}>CUSAT CONNECTS</h1>
        <h1 className={styles.subheading}>Sign Up</h1>  
        <InputControl
          label="User Name"
          placeholder="User name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        
        <InputControl
          label="Password"
          placeholder="Enter password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Continue
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;