import React, { use, useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedTasks from '../components/FeaturedTasks/FeaturedTasks';
import EarnTypes from '../components/EarnTypes/EarnTypes';
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { useLoaderData } from 'react-router';
import AuthContext from '../Context/AuthContext';

const allUsersData = fetch('https://upwork-server.vercel.app/users').then(res => res.json())

const Home = () => {
    const dedlineTasks = useLoaderData();
    const { setMyInfo, user } = use(AuthContext);
    const allUsers = use(allUsersData);

    useEffect(() => {
        const myData = allUsers.find((oneUser) => oneUser?.email === user?.email);
        if (myData) {
            setMyInfo(myData);
        }
    }, [setMyInfo, user, allUsers]);


    const [dark, setDark] = useState(false);
    const changeMood = () => {
        setDark(!dark);
    }

    return (
        <div className={dark ? `bg-[#2c313c] text-white` : ''}>
            <div className='lg:w-9/12 mx-auto'>
                <button className='mt-5 button px-10 py-2 rounded-full cursor-pointer'
                    onClick={() => changeMood()} >{dark ? <><MdOutlineWbSunny size={24} /></> : <><LuSunMoon size={24} /></>}</button>
                <Hero></Hero>
                <h3 className='text-2xl font-semibold py-5 text-green-600 underline'>Featured Tasks</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        dedlineTasks.map(task => <FeaturedTasks key={task._id} task={task}></FeaturedTasks>)
                    }
                </div>
                <EarnTypes></EarnTypes>
            </div>
        </div>
    );
};

export default Home;