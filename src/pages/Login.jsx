import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";
import { use } from "react";
import AuthContext from "../Context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {

    const { loginUser, signUpWithGoogle } = use(AuthContext);

    const notify = () => toast.success("Login Succssful!");


    const handelLoginWithGoogle = () => {
        signUpWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result)
                notify()
            })
            .catch((error) => {
                console.log(error)
            })

        console.log(email, password)

    }







    return (
        <div className="flex my-20 items-center justify-center bg-gray-50 px-4">
            <div className="w-full px-15 py-10 max-w-lg bg-white border border-gray-200 rounded-lg">
                <h2 className="text-2xl font-semibold text-center pb-10">Log in to Upwork</h2>

                <form onSubmit={handelLogin} className="text-xs">
                    <div className="relative mb-4">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <CiUser size={20} />
                        </span>
                        <input
                            name="email"
                            type="text"
                            placeholder="User email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                    </div>
                    <div className="relative mb-4">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <RiLockPasswordLine size={20} />
                        </span>
                        <input
                            name="password"
                            type="password"
                            placeholder="User password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                        />
                    </div>

                    <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md mb-4">
                        Continue
                    </button>
                </form>

                <div className="flex items-center justify-between mb-4">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <button onClick={handelLoginWithGoogle} className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-200  text-black py-2 rounded-full hover:bg-gray-100 mb-6">
                    <FcGoogle size={18} />
                    Continue with Google
                </button>

                <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center mb-8">
                        <hr className="w-1/4 border-gray-300" />
                        <span className="mx-1">Don't have an account?</span>
                        <hr className="w-1/4 border-gray-300" />
                    </div>

                    <Link to='/auth/sign-up' className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-6 rounded-md font-semibold">
                        Sign Up
                    </Link>
                </div>
            </div>
            <ToastContainer
                position="top-center"

            />
        </div>
    );
}
