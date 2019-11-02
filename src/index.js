import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <div className="image-holder">
        <div className="image-div">
          <img
            src="img/iStock-643379812-1080x675.jpg"
            alt="man on stairs ting"
          />
        </div>
        <div className="image-gradient-layer" />
        <div className="image-caption">Let's take it to Wall Street</div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
