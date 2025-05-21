import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedTasks from '../components/FeaturedTasks/FeaturedTasks';
import EarnTypes from '../components/EarnTypes/EarnTypes';
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";




const Home = () => {

    const [dark, setDark] = useState(false);

    const changeMood = () => {
        setDark(!dark)
    }

    return (
        <div className={dark ? `bg-[#2c313c] text-white` : ''}>
            <div className='lg:w-9/12 mx-auto'>
                <button className='mt-5 button px-10 py-2 rounded-full cursor-pointer' onClick={() => changeMood()} >{dark ? <><MdOutlineWbSunny size={24} /></> : <><LuSunMoon size={24} /></>}</button>
                <Hero></Hero>
                <FeaturedTasks></FeaturedTasks>
                <EarnTypes></EarnTypes>
            </div>
        </div>
    );
};

export default Home;