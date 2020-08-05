import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {

    return (
        <Link to={`/pins/${pin.id}`}>
            <div className='pin-index-item-container'>
                <div className='pin-index-item-image'>
                    <img src={pin.photoUrl} alt={pin.title} />
                </div>
                <div className='pin-index-item-title oF'>{pin.title}</div>
            </div>
        </Link>
    )
}

export default PinIndexItem;