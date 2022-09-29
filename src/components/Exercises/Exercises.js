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
        <div className='col-span-2'>
            <p className='text-2xl my-5'>Select today's exercise:</p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
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