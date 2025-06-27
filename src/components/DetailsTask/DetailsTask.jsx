import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const DetailsTask = () => {
    const taskDetails = useLoaderData();
    const [data, setData] = useState(taskDetails)
    const { title, description, budget, _id, bidsCount } = data;
    const navigate = useNavigate()

    const handelBidTask = (id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    setData(data);
                    Swal.fire({
                        position: "enter center",
                        icon: "success",
                        title: "Added task successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    setTimeout(() => {
                        navigate('/browse-task')
                    }, 2000);
                }
                console.log(data)

            })
    }

    return (
        <div className='lg:w-9/12 mx-auto my-5'>
            <h3 className='my-5 text-2xl font-semibold text-gray-400'>Task Details</h3>
            <h4 className='font-semibold pb-5 text-green-500 text-xl'>You bid for {bidsCount} opportunities</h4>
            <div className='p-5 border border-gray-200 rounded-2xl space-y-3'>
                <h3 className='text-xl pb-5 text-green-600'>{title}</h3>
                <p>{description}</p>
                <p>Project Type: One-time project</p>
                <p>Fixed Price: ${budget}</p>
                <button onClick={() => handelBidTask(_id)} className='btn bg-green-500 text-white rounded-full font-normal'>Bids this task</button>
            </div>
        </div>
    );
};

export default DetailsTask;