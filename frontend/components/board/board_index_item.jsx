import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board }) => {

    const photoPreview1 = board.pins[0] ? (
        <img src={board.pins[0].photoUrl} />
    ) : (
        <div className="bfb"></div>
    )
    const photoPreview2 = board.pins[1] ? (
        <img src={board.pins[1].photoUrl} className='brr mb' />
    ) : (
        <div className="bfb brr mb"></div>
    )
    const photoPreview3 = board.pins[2] ? (
        <img src={board.pins[2].photoUrl} className='brb' />
    ) : (
        <div className="bfb brb"></div>
    )

    return (
        <div className='bic board-index-item-container'>
            <Link to={`/users/${board.user_id}/boards/${board.id}`}>
                <div className='bii'>
                    {photoPreview1}
                    <div>
                        {photoPreview2}
                        {photoPreview3}
                    </div>
                </div>
                <div className="hhh oF ">
                    <div className="mW">{board.name}</div>
                    <div className="f12">{board.pins.length} Pins</div>
                </div>
            </Link>
        </div>
    )
}


export default BoardIndexItem;