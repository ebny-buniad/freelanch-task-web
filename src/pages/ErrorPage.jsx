import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-[calc(100vh-65px)]'>
                <img className='w-60' src="https://www.upwork.com/static/ui-images/1.0.4/air3/svg/illustrations/alien.svg" alt="" />
                <h2 className='py-5 text-4xl'>Looking for something?</h2>
                <p>Error 404</p>
                <Link to='/' className='btn rounded-full font-light px-10 bg-green-600 mt-10 text-white'>Go to homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;