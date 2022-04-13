import React from 'react';
import sleepy from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-primary'>MEchanic is sleeping</h2>
            <img className='w-100' src={sleepy} alt="" />
        </div>
    );
};

export default NotFound;