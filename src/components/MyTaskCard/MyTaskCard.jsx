import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../../Context/AuthContext';

const MyTaskCard = ({ tasks, myTasks, setMyTasks }) => {
    const { title, category, budget, deadline, _id } = tasks;
    const { bidCount } = use(AuthContext)


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

    return (
        <tbody className='border w-12/12 overflow-scroll'>
            <tr>
                <td>{title}</td>
                <td>{category}</td>
                <td>{budget}</td>
                <td>{deadline}</td>
                <td className='gap-2 flex'>
                    <button  className='bg-green-600 px-3 py-1 rounded-full text-white cursor-pointer' onClick={() => document.getElementById('my_modal_1').showModal()}>Bids</button>
                    <Link to={`/update-task/${_id}`} className='bg-green-500 px-3 py-1 rounded-full text-white cursor-pointer'>Update</Link>
                    <button onClick={handelDelete} className='bg-green-400 px-3 py-1 rounded-full text-white cursor-pointer'>Delete</button>
                </td>
            </tr>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">{bidCount}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tbody>

    );
};

export default MyTaskCard;