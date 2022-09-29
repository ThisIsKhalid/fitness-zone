import React from 'react';
import Details from '../Details/Details';
import Exercises from '../Exercises/Exercises';

const ExercisePlanner = () => {
    return (
        <div className="grid grid-cols-3">
            <Exercises></Exercises>
            <Details></Details>
        </div>
    );
};

export default ExercisePlanner;