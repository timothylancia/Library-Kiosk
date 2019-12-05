import React from "react";

import Main from "./pages/main";
import APULogo from "./assets/APULogo.png";

//////////////////////////////////////////////////////
/* Styles                                           */
//////////////////////////////////////////////////////
import "./pages/styles.css";
import "./App.css";

const headerStyle = {
  flex: 1,
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

// Input your own name
const kioskName = process.env.REACT_APP_YOUR_KIOSK_NAME;

//////////////////////////////////////////////////////
/* Header and Main                                  */
//////////////////////////////////////////////////////
class App extends React.Component {
  render() {
    return (
      <div className="flexColumn" id="container">
        {/* HEADER */}
        <div className="flexRow" id="header" style={headerStyle}>
          <div>
            <a href="/" style={{ color: "#990000" }}>
              <h1 style={Name}>{kioskName}</h1>
            </a>
          </div>
          <div style={headerLinks}>
            <a href="/">
              <img src={APULogo} style={Logo} alt="APU Logo"></img>
            </a>
          </div>
        </div>

        {/* Calls page based on navigation */}
        <Main></Main>
      </div>
    );
  }
}

export default App;
