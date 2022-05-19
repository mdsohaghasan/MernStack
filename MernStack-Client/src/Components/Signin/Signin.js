import React, { useRef, useState } from 'react'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from './SocialLogin/SocialLogin';
import './Signin.css';
import axios from 'axios';


function Signin() {
    const [agrre, setAgree] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} </p>
        </div>
    }

    // if (user) {
    //     navigate(from, { replace: true });
    // }

    const handleSignInUser = async event => {
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/Signin', { email });
        localStorage.setItem('token', data.token);
        navigate(from, { replace: true });
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
                                <input onClick={() => setAgree(!agrre)} type="checkbox" name='terms' id="exampleCheck1" />
                                <label className={`ps-2 ${agrre ? '' : `text-danger`}`} for="exampleCheck1">Accept Mobile House Terms And Conditions</label>
                            </div>
                            <button disabled={!agrre} type="submit" class="btn btn-primary w-100">Sign In Now</button>

                        </form>
                    </div>
                </div>
            </div>

            {errorElement}
            <p className='my-2'>new to user <Link to="/Register" className='text-decoration-none'>Register Now</Link></p>
            <p>Forget Your Password? <button class='btn btn-link text-decoration-none' onClick={resetPassword}>Reset Pasword</button> </p>
            <ToastContainer />
            <SocialLogin></SocialLogin>
        </div>
    )
}

export default Signin