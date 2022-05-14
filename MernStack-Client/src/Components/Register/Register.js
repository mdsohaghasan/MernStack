import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../Signin/SocialLogin/SocialLogin';


function Register() {

    const [error, setError] = useState('');
    const [agrre, setAgree] = useState(false);

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        console.log(user)
        // navigate('/home');
    }



    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
        if (password.length < 6) {
            setError('password must be 6  charecters');
            return;
        }


    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Register Now</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form onSubmit={handleCreateUser}>

                            <div class="form-group my-3">
                                <input type="name" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required />
                            </div>

                            <div class="form-group my-3">
                                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                            </div>

                            <div class="form-group my-3">
                                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" required />
                            </div>
                            <div class="form-check my-3">
                                <input
                                    onClick={() => setAgree(!agrre)}
                                    type="checkbox" name='terms' class="" id="exampleCheck1" />
                                <label className={`ps-2 ${agrre ? '' : `text-danger`}`} for="exampleCheck1">Accept Mobile House Terms And Conditions</label>
                            </div>
                            <button
                                disabled={!agrre}
                                type="submit" class="btn btn-primary w-100">Register Now</button>
                        </form>
                    </div>
                </div>
            </div >

            <p className='my-2'>Already Have an Account <Link to="/Signin" className='text-decoration-none'>Signin Now</Link></p>

            <SocialLogin></SocialLogin>

        </div >
    )
}

export default Register