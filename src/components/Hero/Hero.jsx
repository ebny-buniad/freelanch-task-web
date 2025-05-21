import React from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {

    
    return (
        <div className='pt-6'>
            <div id='hero-bg' className='text-white'>
                <div className='grid xl:grid-cols-2 h-[700px] items-center'>
                    <div className='col-span-1 p-10'>
                        <h1 className='text-5xl font-semibold leading-13 mb-5'>
                            Connecting clients in need to freelancers who deliver{' '}
                            <span style={{ color: '#00a63d', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Projects', 'Vision', 'Code', 'Ideas!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={90}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>

                        <Link to='/' className=' py-2 px-10 rounded-full button'>Browse Tasks</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;