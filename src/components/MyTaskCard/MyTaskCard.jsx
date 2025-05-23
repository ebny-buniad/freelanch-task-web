import React, { useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../../Context/AuthContext';

const MyTaskCard = ({ tasks, myTasks, setMyTasks }) => {
    const { title, category, budget, deadline, _id, bidsCount } = tasks;

    const [seeBids, setSeeBids] = useState(false)

    const handelDelete = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        const remaining = myTasks.filter(task => task._id != _id);
                        setMyTasks(remaining);
                    })
            }
        });
    }


    const handelBids = () => {
        setSeeBids(!seeBids)
    }

    return (
        <tbody>
            <tr>
                <td>{title}</td>
                <td>{category}</td>
                <td>{budget}</td>
                <td>{deadline}</td>
                <td className='gap-2 flex'>
                    <button onClick={handelBids} className='bg-green-600 px-3 py-1 rounded-full text-white cursor-pointer w-16'>{seeBids ? <>{bidsCount}</> : 'Bids'}</button>
                    <Link to={`/update-task/${_id}`} className='bg-green-500 px-3 py-1 rounded-full text-white cursor-pointer'>Update</Link>
                    <button onClick={handelDelete} className='bg-green-400 px-3 py-1 rounded-full text-white cursor-pointer'>Delete</button>
                </td>
            </tr>


        </tbody>

    );
};

export default MyTaskCard;