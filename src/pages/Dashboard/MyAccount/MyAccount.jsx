import React, { use } from 'react';
import AuthContext from '../../../Context/AuthContext';

const MyAccount = () => {

    const { user } = use(AuthContext);
    console.log(user)

    return (
        <div>
            My Account
            <div className='w-96 mx-auto lg:mx-0 rounded-2xl p-2 my-5 shadow text-center'>
                <img className='border border-gray-300 rounded-full mx-auto w-20 mb-5' src={user.photoURL} alt="" />
                <p>Name : {user?.displayName}</p>
                <p>Email : {user?.email}</p>
            </div>
        </div>
    );
};

export default MyAccount;