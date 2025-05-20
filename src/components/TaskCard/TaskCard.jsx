import React from 'react';

const TaskCard = ({ task }) => {
    const { title, category, deadline, budget } = task
    return (
        <div>
            <div className='border border-gray-200 rounded-2xl p-10 mb-5 space-y-3'>
                <p>Category: {category}</p>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p>Budgate: {budget}</p>
                <p>Post: {deadline}</p>
                <button className='btn rounded-full bg-green-500 font-normal text-white'>See Details</button>
            </div>
        </div>
    );
};

export default TaskCard;