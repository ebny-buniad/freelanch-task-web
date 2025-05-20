import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from '../components/TaskCard/TaskCard';

const BrowseTask = () => {
    const allTasksData = useLoaderData();
    return (
        <div className='w-9/12 mx-auto mt-5'>
            <h2 className='text-xl font-semibold text-gray-400 mb-5'>All Tasks -</h2>

            <div className=''>
                {
                    allTasksData.map(task => <TaskCard task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;