import React from 'react'
import './Headers.css';
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


function Headers() {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);

  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand"><h1>Mobile House Ltd</h1></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/Inventory" class="nav-link">Inventory</Link>
              </li>
              <li class="nav-item">
                <Link to="/myItems" class="nav-link">My Items</Link>
              </li>
              <li class="nav-item">
                <Link to="/Blogs" class="nav-link">Blog</Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/Register" class="nav-link">Register</Link>
              </li>
              <li class="nav-item">
                {
                  user ?
                    <button onClick={handleSignOut} class="nav-link btn btn-light">Sign Out</button>
                    :
                    < Link to="/Signin" class="nav-link">Signin</Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>


  )
}

export default Headers





