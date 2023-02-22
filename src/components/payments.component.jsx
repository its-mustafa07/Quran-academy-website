import React from "react";

import "./payments.styles.scss";

const Payments = () => {
  return (
    <section className="payments">
      <div className="payments--spans">
        <span className="payments--heading">Payments</span>
        <hr className="payments--hr" />
      </div>

      <div className="payments__container--main">
        <div className="payments__container--left">
          <h1>
            <span>Let’s get</span> <span>started</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam
          </p>
        </div>
        <div className="Payments__container--right--main">
          <div className="payments__container--right">
            <div className="payments--card">
              <div className="payments--card--text">
                <div className="payments--card--heading">
                  <h1>
                    $<span className="payments--cost">40</span>/we
                  </h1>
                </div>
                <p>3 days free trial</p>
                <p>Half hour class</p>
                <p>3 classes in week</p>
              </div>
            </div>

            <div className="payments--card">
              <div className="payments--card--text">
                <div className="payments--card--heading">
                  <h1>
                    $<span className="payments--cost">60</span>/we
                  </h1>
                </div>
                <p>3 days free trial</p>
                <p>One hour class</p>
                <p>3 classes in week</p>
              </div>
            </div>

            <div className="payments--card">
              <div className="payments--card--text">
                <div className="payments--card--heading">
                  <h1>
                    $<span className="payments--cost">90</span>/we
                  </h1>
                </div>
                <p>3 days free trial</p>
                <p>One hour class</p>
                <p>5 classes in week</p>
              </div>
            </div>
          </div>

          <div className="payments--button">
            <a href="#">Continue</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payments;
