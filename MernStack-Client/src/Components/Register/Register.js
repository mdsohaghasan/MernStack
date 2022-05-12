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

  if (user) {
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
    if (password.length < 6) {
      setError('password must be 6  charecters');
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className='w-50 mx-auto'>
      <h2>Register Now</h2>
      <div class="container">
        <div class="row">
          <div class="col">
            <form onSubmit={handleCreateUser}>

              <div class="form-group my-3">
                <input onBlur={handleNameBlur} type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required />
              </div>

              <div class="form-group my-3">
                <input onBlur={handleEmailBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
              </div>

              <div class="form-group my-3">
                <input onBlur={handlePasswordBlur} type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" required />
              </div>
              <div class="form-check my-3">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <p>Already user <Link to="/Signin">Signin Now</Link></p>
    </div>
  )
}

export default Register