import React, { useState } from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);

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

    // reset password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Pleace Enter Your Currect Email Address');
        }
    }


    return (
        <div className='w-50 mx-auto'>
            <h2>SignIn Now</h2>
            <button onClick={() => signInWithGoogle()} className="btn btn-primary">Google Singin</button>
            <button onClick={() => signInWithGithub()} className="btn btn-primary m-3">Github Singin</button>
            <button onClick={() => signInWithFacebook()} className="btn btn-primary">Facebook Singin</button>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form onSubmit={handleSignInUser}>
                            <div class="form-group my-3">
                                <input onBlur={handleEmailBlur} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

                            </div>
                            <div class="form-group my-3">
                                <input onBlur={handlePasswordBlur} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
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

            <p>new to user <Link to="/Register">Register Now</Link></p>
            <p>Forget Your Password? <button class='btn btn-link' onClick={resetPassword}>Reset Pasword</button> </p>
            <ToastContainer />
        </div>
    )
}

export default Signin