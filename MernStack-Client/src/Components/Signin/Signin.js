import React, { useRef } from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './SocialLogin/SocialLogin';

function Signin() {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    // const [signInWithGoogle] = useSignInWithGoogle(auth);
    // const [signInWithGithub] = useSignInWithGithub(auth);
    // const [signInWithFacebook] = useSignInWithFacebook(auth);

    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error?.message} </p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignInUser = event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password);
    }

    // reset password
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        const email = emailRef.current.value;
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

            <div class="container">
                <div class="row">
                    <div class="col">
                        <form onSubmit={handleSignInUser}>
                            <div class="form-group my-3">
                                <input ref={emailRef} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />

                            </div>
                            <div class="form-group my-3">
                                <input ref={passwordRef} name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required />
                            </div>
                            <div class="form-check my-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Sign In Now</button>

                        </form>
                    </div>
                </div>
            </div>

            {errorElement}
            <p>new to user <Link to="/Register">Register Now</Link></p>
            <p>Forget Your Password? <button class='btn btn-link' onClick={resetPassword}>Reset Pasword</button> </p>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Signin