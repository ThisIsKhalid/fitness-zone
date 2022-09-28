import React from 'react';

const Exercise = ({exercise}) => {
    const {name, time, img} = exercise;
    return (
        <div>
            <li>{name}</li>
        </div>
    );
};

export default Exercise;