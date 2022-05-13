import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    // useUpdateProfile
} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


function Register() {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const [agrre, setAgree] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (user) {
        console.log(user)
        navigate('/home');
    }

    // const handleNameBlur = event => {
    //     setName(event.target.value);
    // }
    // const handleEmailBlur = event => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordBlur = event => {
    //     setPassword(event.target.value);
    // }

    // chacked item
    // const agrre = event.target.terms.checked;

    const handleCreateUser = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            setError('password must be 6  charecters');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName: name });
        // alert('Updated profile');
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Register Now</h2>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <form onSubmit={handleCreateUser}>

                            <div class="form-group my-3">
                                <input
                                    // onBlur={handleNameBlur}
                                    type="name" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" required />
                            </div>

                            <div class="form-group my-3">
                                <input
                                    // onBlur={handleEmailBlur}
                                    type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                            </div>

                            <div class="form-group my-3">
                                <input
                                    // onBlur={handlePasswordBlur} 
                                    type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password" required />
                            </div>
                            <div class="form-check my-3">
                                <input
                                    // onClick={() => setAgree(!agrre)}
                                    type="checkbox" name='terms' class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button
                                // desabled={!agrre}
                                type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <p>Already user <Link to="/Signin">Signin Now</Link></p>
        </div>
    )
}

export default Register