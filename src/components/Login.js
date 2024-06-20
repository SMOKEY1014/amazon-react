import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './Login.css'
import {auth} from '../firebase'


const Login = () => {
  // const ctx = useContext(AuthContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  // // Option 1
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const emailRef = useRef()
  // const passwordRef = useRef()

  // useEffect(() => {
  //   const user = localStorage.getItem("IsLoggedin")
  // if (user) {
  //   setIsLoggedIn(true);
  // }
  // }, [])
 
  // const signIn = (e) => {
  //   e.preventDefault();
  //   const enteredEmail = emailRef.current.value;
  //   const enteredPassword = passwordRef.current.value;
  //   console.log(enteredEmail + " " + enteredPassword);
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // }
  // const signOut = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('isLoggedIn');
  // }
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [formIsValid, setFormIsvalid] = useState(false);

  // // useEffect(() => {
  // //   console.log("effect running")
  // //   return () => {
  // //     console.log("effect clean up");
  // //   };
  // // },[password]);
  // const [state, dispatch] = useReducer(reducer, { emailValue: "", passwordValue: "" });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("checking form validity")
  //     setFormIsvalid(state.emailValue.includes("@") && state.passwordValue.trim().length > 6);
  //   }, 500);

  //   return () => {
  //     console.log("clean up funtion before the next side effect")
    
  //     clearTimeout(identifier);
  //   }
  // }, [state.emailValue, state.passwordValue]);


  // const emailChangeHandler = (event) => {
  //   dispatch({type: "EMAIL_INPUT", payload: event.target.value})
  //   // setEmail(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   dispatch({type: "PASSWORD_INPUT", payload: event.target.value})
  //   // setPassword(event.target.value);
  // };
  const signIn = (event) => {
    event.preventDefault(); 
    
    auth.signInWithEmailAndPassword(email, password).then(auth=> {history.pish('/')}).catch(error => alert(error.message))
    // console.log(formIsValid);
  }
  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
  if (auth) {
    history.push('/')
  }
    }) .catch ((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <Link to="/">
        <img src='' alt='logo' className='login_logo'/>
      </Link>
      <div className='login__container'>
        <h5>Sign-in</h5>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(event)=> setEmail(event.target.value)}  type='email'/>
          <h5>Password</h5>
          <input value={password} onChange={(event)=> setPassword(event.target.value)} type='password'/>
          <button onClick={signIn} type='submit' className='login_signInButton'>Sign In</button>
        </form>
        <p>By Signing in you agree to the Amazon Fake Clone ....</p>
        <button className='login_registerButton' onClick={register}>Create Account</button>
      </div>
    <div/>
    </div>
  );
};

export default Login