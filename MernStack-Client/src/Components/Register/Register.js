import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

  if(user){
    navigate('/home');
  }

  const handleNameBlur = event => {
    setName(event.target.value);
  }
  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if(password.length <6){
      setError('password must be 6  charecters');
      return;
    }
    createUserWithEmailAndPassword(email,password);
  }

  return (
    <div>
      <h2>Register Now</h2>
      <form onSubmit={handleCreateUser}>
           <input onBlur={handleNameBlur} type="text" placeholder='your name' required/> <br/>
           <input onBlur={handleEmailBlur} type="email" placeholder='your email' required/> <br/>
           <input onBlur={handlePasswordBlur} type="password" placeholder='your password' required/> <br/>
           <input type="submit" value="Submit"/> 
      </form>
      <p>Already user <Link to="/Signin">Signin Now</Link></p>
    </div>
  )
}

export default Register