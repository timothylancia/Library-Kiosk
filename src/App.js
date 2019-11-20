import React from "react";

import Main from "./pages/main";
import APULogo from "./assets/APULogo.png";

//////////////////////////////////////////////////////
/* Styles                                           */
//////////////////////////////////////////////////////
import "./pages/home.css";
import "./App.css";

const headerStyle = {
  flex: 1,
  backgroundColor: "#990000",
  height: "59px",
  width: "100%"
};
const footerStyle = {
  flex: 1,
  backgroundColor: "#8d9093",
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
const buttonStyle = {
  float: "right",
  marginRight: "25px",
  backgroundColor: "#990000",
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold"
};

//////////////////////////////////////////////////////
/* Header and Main                                  */
//////////////////////////////////////////////////////
class App extends React.Component {
  render() {
    return (
      <div className="flexColumn" id="container">
        <div className="headerContainer" id="header" style={headerStyle}>
          <div>
            <a href="/" style={{ color: "#990000" }}>
              <h1 style={Name}>Library Help Kiosk</h1>
            </a>
          </div>
          <div style={headerLinks}>
            <a href="/">
              <img src={APULogo} style={Logo}></img>
            </a>
          </div>
        </div>
        <Main></Main>
      </div>
    );
  }
}

export default App;
