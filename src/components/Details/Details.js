import React, { useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import PersonaDetails from '../PersonaDetails/PersonaDetails';

const Details = ({exerciseTime}) => {
    const addBreakTime = [10,20,30,40,50];

    const [breakTime, setBreakTime] = useState(0);
    const addBreak = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', time);
    }
    let prevBreakTime = localStorage.getItem('breakTime');
    if(!prevBreakTime){
        prevBreakTime = breakTime;
    }
    
    return (
        <div className='order-first lg:order-none'>

            <PersonaDetails></PersonaDetails>

            {/* Break time  */}

            <h3 className='text-2xl font-semibold'>Add a Break:</h3>
            <div className='flex flex-row items-center justify-evenly bg-orange-200 py-4 rounded-md my-3'>
                {
                    addBreakTime.map(time => <AddBreak
                    time={time}
                    key={time}
                    addBreak={addBreak}
                    ></AddBreak>)
                }
            </div>
            
            {/* Exercise details  */}

            <h3 className='text-2xl font-semibold mb-3'>Exercise Details:</h3>
            <div>
                <div className='flex flex-row items-center justify-around bg-slate-200 mx-2 rounded-xl py-4 mb-3'>
                    <h6 className='text-xl font-medium'>Exercise time:</h6>
                    <p>{exerciseTime} minute</p>
                </div>
                <div className='flex flex-row items-center justify-around bg-slate-200 mx-2 rounded-xl py-4 '>
                    <h6 className='text-xl font-medium'>Break time:</h6>
                    <p>{prevBreakTime} second</p>
                </div>
            </div>
        </div>
    );
};

export default Details;