import React from 'react'
import { Link } from 'react-router-dom';

const addButton = () => {
    document.getElementById("add").classList.toggle("show-menu")
}

const create = () => (
    <button className="rYa eD ad yQo EY qrs na add" type="button">
        <div className="x8f d _O1 No m8 OGJ YbY tw6 a_A but" onClick={addButton}>
            {/* <img className="un B9u U9O eD" src={window.dropdownURL} height="20" width="20" /> */}
            <img src="https://img.icons8.com/pastel-glyph/64/000000/plus.png" />
        </div>
        <div id="add" className="menu-back" onClick={addButton}>
            <ul className="add-down-menu oF mW" onClick={e => e.stopPropagation()}>
                <li>
                    <Link className="add-button" to="/create-pin" >
                        <div className="pad">
                            <img src="https://img.icons8.com/metro/26/000000/plus-math.png" height="13" width="13" />
                        </div>
                        <div className="pad">
                            Create a Pin
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="add-button" to="/create-pin" >
                        <div className="pad">
                            <img src="https://img.icons8.com/metro/26/000000/plus-math.png" height="13" width="13" />
                        </div>
                        <div className="pad">
                            Create a Board
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </button>
);

export default create;

