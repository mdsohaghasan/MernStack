import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAccount = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>MyAccount</h2>

        </div>
    )
}

export default MyAccount