import React from 'react';

const Exercise = ({exercise}) => {
    const {name, time, img} = exercise;
    return (
        <div className='shadow-2xl rounded-lg h-64 relative'>
            <img src={img} alt="" />
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm my-2'>For Age : 20-25</p>
            <p className='text-sm font-medium'>Time required: {time}s</p>
            <button className='w-full rounded-md bg-green-400 absolute bottom-0'>Add to List</button>
        </div>
    );
};

export default Exercise;