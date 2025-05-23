import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AuthContext from '../Context/AuthContext';
import MyTaskCard from '../components/MyTaskCard/MyTaskCard';

const MyPostedTask = () => {
    const { user } = use(AuthContext);
    const postedTasks = useLoaderData();
    const [myTasks, setMyTasks] = useState([])

    useEffect(() => {
        const findMyTasks = postedTasks.filter((task) => task.email === user.email)
        if (findMyTasks) {
            setMyTasks(findMyTasks);
        }

    }, [postedTasks, user])


    return (
        <div className='lg:w-9/12 mx-auto pb-10'>
            <h3 className='text-2xl font-semibold text-gray-400 my-5'>My Posted Tasks</h3>
            <div className=" w-full overflow-auto">
                <table className="table w-[1500px]">
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Category</th>
                            <th>Budget</th>
                            <th>Dedline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        myTasks.map(tasks => <MyTaskCard key={tasks._id}
                            tasks={tasks}
                            myTasks={myTasks}
                            setMyTasks={setMyTasks}
                            ></MyTaskCard>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyPostedTask;