import React from 'react';


export default () => {
  let greeting = (window.location.hash.split("/")[1].includes("login") || window.location.hash.split("/")[1].includes("signup")) ? (
    <div className="landing-greeting uF">
      <div id="cf0">
        <img className="" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/general/findHere.png" />
        <img className="first" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/general/privet.png" />
      </div>
    </div>
    ) : (
    <div className="landing-greeting oF">
      <div id="cf0">
        <img className="" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/general/findHere.png" />
        <img className="first" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/general/privet.png" />
      </div>
    </div>
  );

    return (
      <div className="landing-container">
        {greeting}

        <div className="landing-box">
          {/* 1 */}
          <div className="col-container">
            <div id="cf1">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t15.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t2.jpg" />
            </div>
            <div id="cf1">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t14.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t1.jpg" />
            </div>
          </div>
          {/* 2 */}
          <div className="col-container">
            <div className="filler"></div>
            <div id="cf2">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t17.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t3.jpg" />
            </div>
            <div id="cf2">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t16.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t4.jpg" />
            </div>
          </div>
          {/* 3 */}
          <div className="col-container">
            <div className="filler2"></div>
            <div id="cf3">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t19.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t8.jpg" />
            </div>
            <div id="cf3">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t18.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t5.jpg" />
            </div>
          </div>
          {/* 4 */}
          <div className="col-container">
            <div id="cf4"></div>
            <div id="cf4">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t20.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t7.jpg" />
            </div>
          </div>
          {/* 5 */}
          <div className="col-container">
            <div className="filler2"></div>
            <div id="cf5">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t22.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t9.jpg" />
            </div>
            <div id="cf5">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t21.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t6.jpg" />
            </div>
          </div>
          {/* 6 */}
          <div className="col-container">
            <div className="filler"></div>
            <div id="cf6">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t24.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t10.jpg" />
            </div>
            <div id="cf6">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t23.jpg" />
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t11.jpg" />
            </div>
          </div>
          {/* 7 */}
          <div className="col-container">
            <div id="cf7">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t26.jpg"/>
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t13.jpg" />
            </div>
            <div id="cf7">
              <img className="bottom" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t25.jpg"/>
              <img className="top" src="https://active-storage-puntiresse-pro.s3.amazonaws.com/landing/t12.jpg" />
            </div>
          </div>
        </div>
      </div>
    );
}

