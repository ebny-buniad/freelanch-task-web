import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import AuthContext from '../../Context/AuthContext';

const UpdateTask = () => {
    const loadTaskDetails = useLoaderData();
    const { user, userName } = use(AuthContext);
    const { title, category, description, deadline, budget, _id } = loadTaskDetails;
    const navigate = useNavigate()

    const handelUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const budget = form.budget.value;
        const email = form.email.value;
        const name = form.name.value;

        const taskDetails = { title, category, description, deadline, budget, email, name };


        fetch(`https://upwork-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    position: "enter center",
                    icon: "success",
                    title: "Updated task successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
                setTimeout(() => {
                    navigate('/my-posted-task')
                }, 2000);
            })
    }



    return (
        <div className='lg:w-9/12 mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-500 my-10'>Let's add a task</h2>

            <form onSubmit={handelUpdate} className="space-y-3 mb-10">
                <div>
                    <label className="block font-medium mb-1">Task Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="category"
                        defaultValue={category}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Design">Design</option>
                        <option value="Writing">Writing</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        defaultValue={description}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    ></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">Deadline</label>
                    <input
                        type="date"
                        defaultValue={deadline}
                        name="deadline"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Budget</label>
                    <input
                        type="number"
                        defaultValue={budget}
                        name="budget"
                        placeholder="Enter amount"
                        min="0"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">User Email</label>
                    <input
                        type="email"
                        name='email'
                        value={user?.email}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">User Name</label>
                    <input
                        name='name'
                        type="text"
                        value={user?.displayName || userName}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded"
                >
                    Update Details
                </button>
            </form>

        </div>
    );
};

export default UpdateTask;