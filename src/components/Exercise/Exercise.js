import React from 'react';

const Exercise = ({exercise, addToList}) => {
    const {name, time, img} = exercise;
    
    return (
        <div className='shadow-2xl rounded-lg h-64 relative'>
            <img src={img} alt="" />
            <div className='pl-2'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-sm my-2'>For Age : 20-25</p>
                <p className='text-sm font-medium'>Time required: {time}s</p>
            </div>
            <button className='w-full rounded-md bg-green-400 absolute bottom-0' onClick={()=>addToList(time)}>Add to List</button>
        </div>
    );
};

export default Exercise;