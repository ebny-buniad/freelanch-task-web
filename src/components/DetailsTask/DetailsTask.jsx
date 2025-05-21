import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../../Context/AuthContext';

const DetailsTask = () => {
    const taskDetails = useLoaderData();
    const { title, description, budget } = taskDetails;
    const { bidCount, setBidCount } = use(AuthContext)
    const [isDisabled, setIsDisabled] = useState(false)

    console.log(taskDetails)

    const updateBid = () => {
        setIsDisabled(true)
        setBidCount(bidCount + 1);
    }

    return (
        <div className='lg:w-9/12 mx-auto my-5'>
            <h3 className='my-5 text-2xl font-semibold text-gray-400'>Task Details</h3>
            <h4 className='font-semibold pb-5 text-green-500 text-xl'>You bid for {bidCount} opportunities</h4>
            <div className='p-5 border border-gray-200 rounded-2xl space-y-3'>
                <h3 className='text-xl pb-5 text-green-600'>{title}</h3>
                <p>{description}</p>
                <p>Project Type: One-time project</p>
                <p>Fixed Price: ${budget}</p>
                <button onClick={updateBid} disabled={isDisabled} className='btn bg-green-500 text-white rounded-full font-normal'>Bids this task</button>
            </div>
        </div>
    );
};

export default DetailsTask;