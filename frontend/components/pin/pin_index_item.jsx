import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {

    return (
        <Link to={`/pins/${pin.id}`}>
            <div className='pin-container'>
                <div className='pin-box'>
                    <img src={pin.photoUrl} alt={pin.title} />
                </div>
                <div className='pin-title'>{pin.title}</div>
            </div>
        </Link>
    )
}

export default PinIndexItem;