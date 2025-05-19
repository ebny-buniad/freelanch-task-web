import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";

export default function Login() {
    return (
        <div className="flex my-20 items-center justify-center bg-gray-50 px-4">
            <div className="w-full px-15 py-20 max-w-lg bg-white border border-gray-200 rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Log in to Upwork</h2>

                <div className="relative mb-4">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <CiUser size={20} />
                    </span>
                    <input
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
                        type="text"
                        placeholder="User password"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                    />
                </div>

                <button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md mb-4">
                    Continue
                </button>

                <div className="flex items-center justify-between mb-4">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <button className="w-full cursor-pointer flex items-center justify-center gap-2 border border-black text-black font-semibold py-2 rounded-md hover:bg-gray-100 mb-6">
                    <FcGoogle size={18} />
                    Continue with Google
                </button>

                <div className="text-center text-sm text-gray-600 mt-20">
                    <div className="flex items-center justify-center mb-3">
                        <hr className="w-1/4 border-gray-300" />
                        <span className="mx-1">Don't have an account?</span>
                        <hr className="w-1/4 border-gray-300" />
                    </div>

                    <Link to='/auth/sign-up' className="border border-green-600 text-green-600 hover:bg-green-50 py-2 px-6 rounded-md font-semibold">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
