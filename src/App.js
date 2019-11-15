import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Main from "./pages/main";
import "./pages/home.css";
import APULogo from "./assets/APULogo.png";

import { Link, Route } from "react-router-dom";

// Links to respective chat widget

const headerCont = {
  backgroundColor: "#990000",
  height: "59px",
  width: "100%"
};
const Logo = {
  float: "right",
  marginRight: "30px",
  marginTop: "4px",
  height: "50px"
};
const Name = {
  flex: 1,
  color: "#fff",
  marginLeft: "30px",
  fontSize: 47
};
const headerLinks = {
  flex: 1
};

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="headerContainer" id="header" style={headerCont}>
          <div>
            <a href="/">
              <h1 style={Name}>Library Help Kiosk</h1>
            </a>
          </div>
          <div style={headerLinks}>
            <div>
              <a href="/">
                <img src={APULogo} style={Logo}></img>
              </a>
            </div>
            {/* <a href="/APUSupport">
              <p style={linkStyle}>APU Support Chat</p>
            </a>
            <a href="/WEPASupport"><p style={linkStyle}>WEPA Support Page</p></a> */}
          </div>
        </div>
        <Main></Main>
      </div>
    );
  }
}

export default App;
