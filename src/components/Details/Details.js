import React from 'react';
import img from '../../images/abdullah-ali.jpg'
import AddBreak from '../AddBreak/AddBreak';

const Details = () => {
    const addBreak = [10,20,30,40,50];
    return (
        <div>
            <div className='flex flex-row items-center gap-3'>
                <img className='w-1/4 rounded-full' src={img} alt="" />
                <div>
                    <h4 className='text-xl font-medium'>Abdullah Ali</h4>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-evenly my-7 bg-slate-200 mx-2 rounded-xl py-4'>
                <div>
                    <h6 className='text-2xl font-medium'>75<small>kg</small></h6>
                    <p className='text-base'>Weight</p>
                </div>
                <div>
                    <h6 className='text-2xl font-medium'>6.5</h6>
                    <p className='text-base'>Height</p>
                </div>
                <div>
                    <h6 className='text-2xl font-medium'>25<small>yrs</small></h6>
                    <p className='text-base'>Age</p>
                </div>
            </div>

            <h3 className='text-2xl font-semibold'>Add a Break:</h3>
            <div className='flex flex-row items-center justify-evenly bg-orange-200 py-4 rounded-md my-3'>
                {
                    addBreak.map(time => <AddBreak
                    time={time}
                    key={time}
                    ></AddBreak>)
                }
            </div>

            <h3 className='text-2xl font-semibold mb-3'>Exercise Details:</h3>
            <div>
                <div className='flex flex-row items-center justify-around bg-slate-200 mx-2 rounded-xl py-4 mb-3'>
                    <h6 className='text-xl font-medium'>Exercise time:</h6>
                    <p>60 second</p>
                </div>
                <div className='flex flex-row items-center justify-around bg-slate-200 mx-2 rounded-xl py-4 '>
                    <h6 className='text-xl font-medium'>Break time:</h6>
                    <p>10 second</p>
                </div>
            </div>
        </div>
    );
};

export default Details;