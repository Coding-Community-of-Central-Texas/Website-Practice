import React from "react";
import "./Home.css";
import Logo from "../../images/osccct-logo-transparent.png";

export default function Home() {
  return (
    <div className="home-page">
      <div className="right-split">
        <div className="right-block">
          <img
            id="spinImg"
            src={Logo}
            alt="Landing Visual"
            className="grow-on-load"
          />
        </div>
        <div className="left-block">
          <div className="landing-text-wrapper">
            <strong style={{ margin: "0 0 0.5em 0", fontSize: "85px" }}>
              <span className="letter">O</span>
              <span className="letter">S</span>
              <span className="letter">C</span>
              <span className="letter">C</span>
              <span className="letter">C</span>
              <span className="letter">T</span>
            </strong>
            <p
              style={{
                FontSize: "1.25em",
                margin: "0",
                width: "calc(100% - 90px)",
              }}
            >
              Open Source Coding Community of Central Texas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
