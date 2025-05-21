import React from 'react';
import { Link } from 'react-router';

const FeaturedTasks = ({ task }) => {

    const { category, title, budget, deadline, _id } = task;

    return (
        <div>
            <div className='border border-gray-200 rounded-2xl p-5 space-y-3'>
                <p>Category: {category}</p>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p>Budgate: {budget}</p>
                <p>Post: {deadline}</p>
                <Link to={`/details-task/${_id}`} className='btn rounded-full bg-green-500 font-normal text-white'>See Details</Link>
            </div>
        </div>
    );
};

export default FeaturedTasks;