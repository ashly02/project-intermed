import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import  {connect} from "react-redux";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { signInAPI } from "../../actions";
import styles from "./Login.module.css";
import logo from './logo.png';
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/Home");
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
      <h2 className={styles.heading}>CUSAT CONNECTS</h2>
        <h2 className={styles.subheading}>Login</h2>
        
        <InputControl
          label="Email "
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email address"
        />
        <InputControl
          label="Password "
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Password"
          type='password'
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{
    user:state.userState.user,
  };
};
const mapDispatchToProps=(dispatch)=>({
  signIn:()=>dispatch(signInAPI()),
});
export default connect(mapStateToProps,mapDispatchToProps)(Login);