import React from 'react';

{/* <div>
    <div id="img1" class="first">
        tiuyeitywoyo
    </div>
    <div id="img2" class="second">
        sbmbgkbksbgf
    </div>
</div> */}



export default () => {
//     $(document).ready(function () {
//         var continuous = function () {
//             $("#img1").fadeToggle(4000);
//             $("#img2").fadeToggle(4000);
//         };
//         $("#img2").hide();
//         setInterval(continuous, 2000);
//     });

    return (
        <div className="landing-container">
            <div className="tile-box one fade-in">
                <img className="first" id="img1" src={window.p1} />
                <img className="second" id="img2" src={window.p3} />
            </div>
            {/* <div className="tile-box two">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box three">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box four">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box five">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box siix">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box seven">
                <img className="tile-img" src={window.p1} />
                <img className="tile-img" src={window.p1} />
            </div> */}
            
{/*  */}
            {/* <div className="tile-box">
                <img className="tile-img" src={window.p1} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p2} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p3} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p4} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p5} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p6} />
            </div>
            <div className="tile-box">
                <img className="tile-img" src={window.p7} />
            </div> */}

        </div>
    )
}

