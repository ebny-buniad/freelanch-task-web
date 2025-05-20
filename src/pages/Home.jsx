import React from 'react';
import Hero from '../components/Hero/Hero';
import FeaturedTasks from '../components/FeaturedTasks/FeaturedTasks';
import EarnTypes from '../components/EarnTypes/EarnTypes';

const Home = () => {
    return (
        <div className='lg:w-9/12 mx-auto'>
            <Hero></Hero>
            <FeaturedTasks></FeaturedTasks>
            <EarnTypes></EarnTypes>
        </div>
    );
};

export default Home;