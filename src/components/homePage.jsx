import React from "react";

import "./homePage.scss";

const HomePage = () => {
  return (
    <header className="header">
      <div className="header__text--container">
        <h1 className="header__heading--main">
          <span className="header__heading--span">
            “ Indeed, it is We who Sent Down
          </span>
          <span className="header__heading--span"> the Qur’ān </span>
          <span className="header__heading--span">
            and indeed, We will be its
          </span>
          <span className="header__heading--span"> guardian. “</span>
        </h1>
        <button className="btn-read">Read More</button>
      </div>
    </header>
  );
};

export default HomePage;
