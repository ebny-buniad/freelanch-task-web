import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';

const SignUp = () => {
    return (
        <div className=" bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg border border-gray-200 w-full max-w-xl">
                <h1 className="text-3xl font-medium text-gray-800 mb-6 text-center">
                    Sign up to find work you love
                </h1>

                <div className="space-y-4">
                    <button className="w-full flex  items-center justify-center gap-2 border border-gray-200  py-3 rounded-full cursor-pointer">
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

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First name
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-0 focus:ring-.5  focus:border-green-600"
                            />
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