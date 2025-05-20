import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';

const AddTask = () => {

    const {regUser} = use(AuthContext);

    return (
        <div className='lg:w-9/12 mx-auto'>
            <h2 className='text-2xl font-semibold text-gray-500 my-10'>Let's add a task</h2>

            <form className="space-y-3 mb-10">
                <div>
                    <label className="block font-medium mb-1">Task Title</label>
                    <input
                        type="text"
                        name="title"
                        
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="category"
                        
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
                        
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    ></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Budget</label>
                    <input
                        type="number"
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
                        value={regUser.email}
                        readOnly
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        value={regUser.name}
                        readOnly
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 cursor-pointer text-white font-semibold py-2 px-4 rounded"
                >
                    Add
                </button>
            </form>

        </div>
    );
};

export default AddTask;