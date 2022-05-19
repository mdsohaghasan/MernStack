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
          <div class="collapse navbar-collapse mt-2" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">HOME</Link>
              </li>
              <li class="nav-item">
                <Link to="/Inventory" class="nav-link">INVENTORY</Link>
              </li>
              <li class="nav-item">
                <Link to="/myItems" class="nav-link">MY ITEMS</Link>
              </li>
              <li class="nav-item">
                <Link to="/Blogs" class="nav-link">BLOG</Link>
              </li>
              <li class="nav-item">
                <Link to="/About" class="nav-link">ABOUT</Link>
              </li>

              <li class="nav-item">
                {
                  user ?
                    <p class="nav-link">{user?.displayName}</p>
                    :
                    < Link to="/Signin" class="nav-link">SIGNIN</Link>
                }
              </li>

              <li class="nav-item">
                {
                  user ?
                    < Link to="/MyAccount" class="nav-link">MyAccount</Link>
                    :
                    < Link to="/Signin" class="nav-link">SIGNIN</Link>
                }
              </li>

              <li class="nav-item">
                {
                  user ?
                    <button onClick={handleSignOut} class="nav-link btn btn-light">SIGNOUT</button>
                    :
                    <Link to="/Register" class="nav-link">REGISTER</Link>
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





