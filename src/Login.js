import React,{useState} from "react";
import "./Login.css";
import { Link , useHistory} from "react-router-dom";
import {auth} from "./firebase"


function Login() {
  const history = useHistory() ; 
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState("");


  const signIn =   e =>{
      // prevent the pages refresh 
      e.preventDefault()
      // some fancy firebase login ....
      auth.signInWithEmailAndPassword(email, password)
      .then(auth =>{
        history.push('/')
      })
      .catch(error => alert(error.message))

  }

  const register = e =>{
      // prevent the pages refresh 
      e.preventDefault()
      // do some fancy firebae register.......
      auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) =>{
          // it succcessfully created a new user with email and password
            
            if(auth) {
                history.push('/')
            }

      })
      .catch(error => alert(error.message))
  }
  return (
    <div className="login">
      <Link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png " />
      </Link>

      <div className="login__container">
          <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password </h5>
                <input type='password'  value={password} onChange={e => setPassword(e.target.value)} />


                <button type='submit' onClick={signIn} className="login__signInButton" >Sign In</button>



            </form>

            <p> 
                By Signing-in your agree to AMAZON FAKE CLONE
                Conditions of Use & Sale.  Please see out Privacy Notice,our Cookies Notice
                and our Interest-Base Ads  Notice.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            </p>

            <button onClick={register} 
            className='login__registerButton' >Create your amazon account</button>
          
      </div>
    </div>
  );
}

export default Login;
