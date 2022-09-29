import React, { useState } from 'react';
import Details from '../Details/Details';
import Exercises from '../Exercises/Exercises';

const ExercisePlanner = () => {
    const [time, setTime] = useState(0);

    const addToList = (addedTime) => {
        const newTime = addedTime + time;
        setTime(newTime);
    }
    
    return (
        <div className="grid lg:grid-cols-3 container mx-auto lg:gap-3">
            <Exercises addToList={addToList}></Exercises>
            <Details exerciseTime={time}></Details>
        </div>
    );
};

export default ExercisePlanner;