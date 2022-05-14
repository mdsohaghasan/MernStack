import React from 'react';
import google from '../../../img/social/google.png';
import facebook from '../../../img/social/facebook.png';
import github from '../../../img/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    // const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }


    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} class='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} class='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: '30px' }} src={google} alt="" /> <span className='px-2'>Google Sign In</span> </button>

                <button className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: '30px' }} src={facebook} alt="" /> <span className='px-2'>Facebook Sign In</span> </button>

                <button className='btn btn-info w-50 d-block mx-auto my-2'> <img style={{ width: '30px' }} src={github} alt="" /> <span className='px-2'>Github Sign In</span> </button>

            </div>
        </div>
    )
}

export default SocialLogin