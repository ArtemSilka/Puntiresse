import React from 'react';


export default () => {
    // $(document).ready(function () {
    //   var continuous = function () {
    //     $("#Mass_alert").fadeToggle(4000);
    //     // $("#Devotion_alert").fadeToggle(4000);
    //   };
    // //   $("#Devotion_alert").hide();
    //   setInterval(continuous, 600);
    // });

    return (
      <div className="landing-container">
        <div className="landing-greeting oF">
          <h1>Welcome to Puntiresse</h1>
        </div>

        <div className="landing-box">
          {/* 1 */}
          <div className="col-container">
            <div id="cf1">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t1} />
            </div>
            <div id="cf1">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t5} />
            </div>
          </div>
          {/* 2 */}
          <div className="col-container">
            <div className="filler"></div>
            <div id="cf2">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t8} />
            </div>
            <div id="cf2">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t3} />
            </div>
          </div>
          {/* 3 */}
          <div className="col-container">
            <div className="filler2"></div>
            <div id="cf3">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t11} />
            </div>
            <div id="cf3">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t23} />
            </div>
          </div>
          {/* 4 */}
          <div className="col-container">
            <div id="cf4"></div>
            <div id="cf4">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t10} />
            </div>
          </div>
          {/* 5 */}
          <div className="col-container">
            <div className="filler2"></div>
            <div id="cf5">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t2} />
            </div>
            <div id="cf5">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t21} />
            </div>
          </div>
          {/* 6 */}
          <div className="col-container">
            <div className="filler"></div>
            <div id="cf6">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t14} />
            </div>
            <div id="cf6">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t13} />
            </div>
          </div>
          {/* 7 */}
          <div className="col-container">
            <div id="cf7">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t6} />
            </div>
            <div id="cf7">
              <img className="bottom" src={window.t7} />
              <img className="top" src={window.t7} />
            </div>
          </div>
        </div>
      </div>
    );
}

