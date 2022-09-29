import React from 'react';

const AddBreak = ({time}) => {
    console.log(time);
    return (
        <div>
            <button className='bg-green-400 py-3 px-3 rounded-full'>{time}s</button>
        </div>
    );
};

export default AddBreak;