import React, { useState } from 'react'
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signin.css';

function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  const [signInWithEmailAndPassword, user, error,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook,] = useSignInWithFacebook(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }
  const handleSignInUser = event => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
  }



  return (
    <div>
      <h2>SignIn Now</h2>
      <button onClick={() => signInWithGoogle()} className="Btn">Google Singin</button>
      <button onClick={() => signInWithGithub()} className="Btn">Github Singin</button>
      <button onClick={() => signInWithFacebook()} className="Btn">Facebook Singin</button>


      {/* <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}

      <form onSubmit={handleSignInUser}>
        <input onBlur={handleEmailBlur} type="email" placeholder='your email' required /> <br />
        <input onBlur={handlePasswordBlur} type="password" placeholder='your password' required /> <br />
        <p>{error?.message}</p>
        <input type="submit" value="Submit" />
      </form>
      <p>new to user <Link to="/Register">Register Now</Link></p>
    </div>
  )
}

export default Signin