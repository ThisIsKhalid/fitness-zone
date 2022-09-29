import React from 'react';
import img from '../../images/abdullah-ali.jpg';

const PersonaDetails = () => {
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
        </div>
    );
};

export default PersonaDetails;