import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = ({addToList}) => {
    const [exercises, setExercises] = useState([]);

    useEffect( () => {
        fetch('workout.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    return (
        <div className='col-span-2 p-10'>
            <h1 className='text-5xl font-bold text-teal-500'>The Fitness Zone</h1>
            <p className='text-2xl my-5'>Select today's exercise:</p>

            <div className='grid grid-cols-3 gap-5'>
                {
                    exercises.map(exercise => <Exercise 
                    exercise={exercise}
                    key={exercise.id}
                    addToList={addToList}
                    ></Exercise>)
                }
            </div>
        </div>
    );
};

export default Exercises;