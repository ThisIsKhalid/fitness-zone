import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='bg-blue-100 py-3 flex flex-row items-center justify-between mb-3'>
            <div className='flex flex-row items-center'>
                <FontAwesomeIcon className='text-4xl text-fuchsia-500' icon={faDumbbell}></FontAwesomeIcon>
                <h1 className='text-2xl font-bold text-violet-500 ml-2'><span className='text-orange-500 text-5xl'>Fitness</span> Zone</h1>
            </div>
            <div className='hidden md:block'>
                <a className='no-underline bg-rose-500 py-2 px-1 mr-2 rounded-md hover:rounded-full hover:bg-purple-600 text-white font-medium' href="/profile">Profile</a>
                <a className='no-underline bg-rose-500 py-2 px-1 mr-2 rounded-md hover:rounded-full hover:bg-purple-600 text-white font-medium' href="/exercise">Exercises</a>
            </div>
        </div>
    );
};

export default Header;