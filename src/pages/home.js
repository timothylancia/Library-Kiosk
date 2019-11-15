import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

import printer from "../assets/print-24px.svg";
import computer from "../assets/desktop_windows-24px.svg";
import { relative } from "path";

const text = {
  color: "#000"
};
const Logo = {
  height: "30vh",
  width: "30vh"
};
const headerStyle = {
  fontSize: 56,
  fontWeight: "bold"
};
const paragraphStyle = {
  color: "#808080",
  fontSize: 24
};

export class home extends React.Component {
  render() {
    return (
      <div id="home">
        <Link to="/WEPASupport" style={text}>
          <div className="split left" id="1">
            <div className="centered">
              <h1 style={headerStyle}>Printer Support</h1>
              <img src={printer} style={Logo}></img>
              <p className="text" id="t1" style={paragraphStyle}>
                If you need help with using the WEPA printers or believe there
                is a problem, please click here.
              </p>
            </div>
          </div>
        </Link>

        <div className="mid"></div>

        <Link to="/APUSupport" style={text}>
          <div className="split right" id="2">
            <div className="centered">
              <h1 style={headerStyle}>Computer Support</h1>
              <img src={computer} style={Logo}></img>
              <p style={paragraphStyle}>
                If you need help with any of the lab computers or you are having
                APU account difficulties, please click here.
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default home;

{
  /* <div style={leftDiv}>
          <Link to="/WEPASupport" style={text}>
            <div>
              <div>
                <h1 style={headerStyle}>Printer Support</h1>
                <img src={printer} style={Logo}></img>
                <p style={paragraphStyle}>
                  If you need help with using the WEPA printers or believe there
                  is a problem, please click here.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div style={rightDiv}>
          <Link to="/APUSupport" style={text}>
            <div>
              <div>
                <h1 style={headerStyle}>Computer Support</h1>
                <img src={computer} style={Logo}></img>
                <p style={paragraphStyle}>
                  If you need help with any of the lab computers or you are
                  having APU account difficulties, please click here.
                </p>
              </div>
            </div>
          </Link>
        </div> */
}
