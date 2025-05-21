import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, signUpWithGoogle, setRegUser } = use(AuthContext);

    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();


    const handelSignUpGoogle = () => {
        signUpWithGoogle()
            .then(() => {
                Swal.fire({
                    position: "enter center",
                    icon: "success",
                    title: "Your account create successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handelSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const { email, password, ...userInfo } = Object.fromEntries(formData);

        const reg_user = { email, ...userInfo }
        setRegUser(reg_user)


        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (passwordRegex.test(password) === false) {
            return setPasswordError('worng password')
        }

        createUser(email, password)
            .then(() => {
                const userData = { email, ...userInfo }


                // Send User DB

                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        setPasswordError('')
                        Swal.fire({
                            position: "enter center",
                            icon: "success",
                            title: "Your account create successfully!",
                            showConfirmButton: false,
                            timer: 2000
                        });
                        setTimeout(() => {
                            navigate('/')
                            form.reset();
                        }, 2000);
                        console.log(data)
                    })

            })
            .catch((error) => {
                setPasswordError(error);
            })

    }




    return (
        <div className=" bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg border border-gray-200 w-full max-w-xl">
                <h1 className="text-3xl font-medium text-gray-800 mb-6 text-center">
                    Sign up to find work you love
                </h1>

                <div className="space-y-4">
                    <button onClick={handelSignUpGoogle} className="w-full flex  items-center justify-center gap-2 border border-gray-200  py-3 rounded-full cursor-pointer">
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </button>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">or</span>
                        </div>
                    </div>

                    <form onSubmit={handelSignUp} className="space-y-4 text-xs">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First name
                            </label>
                            <input
                                name='name'
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                name='photo'
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>
                        <div>
                            {
                                passwordError ? <>
                                    <p className='text-red-400 text-xs'>Must have an Uppercase letter in the password <br />
                                        Must have a Lowercase letter in the password <br />
                                        Length must be at least 6 characters <br />
                                    </p>
                                </> : ''
                            }
                        </div>


                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg  font-medium"
                        >
                            Create my account
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{' '}
                        <Link to='/auth/login' className="text-green-600 hover:underline font-medium">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;