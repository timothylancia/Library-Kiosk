import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Button } from "react-mdl";

import printer from "../assets/print-24px.svg";
import computer from "../assets/desktop_windows-24px.svg";

import "./home.css";

const containerStyle = {
  width: "100%",
  height: "88vh"
};
const colStyle = {
  height: "88vh",
  width: "50vw",
  align: "center",
  justifyContent: "center"
};
const linkStyle = {
  color: "#fff"
};
const Logo = {
  height: "30vh",
  width: "30vh",
  justifyContent: "center",
  align: "center"
};
const headerStyle = {
  color: "#000",
  fontSize: 56,
  fontWeight: "bold",
  justifyContent: "center",
  align: "center"
};
const paragraphStyle = {
  color: "#808080",
  fontSize: 24,
  marginLeft: "25%",
  marginRight: "25%"
};
const buttonStyle = {
  marginTop: 7,
  backgroundColor: "#990000",
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold"
};
const centerItem = {
  marginTop: "25%"
};
const centerDiv = {
  display: "flex",
  justifyContent: "center",
  width: "100%"
};

export class home extends React.Component {
  render() {
    return (
      <Container fluid="true" style={containerStyle}>
        <Row>
          <Col className="left" id="printer" style={colStyle}>
            <Link to="/WEPASupport" style={linkStyle}>
              <div style={centerItem}>
                <h1 className="centeredText" id="10" style={headerStyle}>
                  Printer Support
                </h1>
                <img
                  src={printer}
                  style={Logo}
                  className="centeredIcon"
                  id="printerIcon"
                ></img>
                <p className="centeredText" id="11" style={paragraphStyle}>
                  If you need help with using the student printing kiosk or
                  believe there is a problem, please click here.
                </p>
              </div>
            </Link>
          </Col>
          <Col id="right" style={colStyle}>
            <Link to="/APUSupport" style={linkStyle}>
              <div style={centerItem}>
                <h1 className="centeredText" id="12" style={headerStyle}>
                  Computer Support
                </h1>
                <img
                  src={computer}
                  style={Logo}
                  className="centeredIcon"
                  id="computerIcon"
                ></img>
                <p className="centeredText" id="13" style={paragraphStyle}>
                  If you need help with any of the lab computers or you are
                  having APU account difficulties, please click here.
                </p>
              </div>
            </Link>
          </Col>
        </Row>
        <div style={centerDiv}>
          <Link to="/passwordReset">
            <Button raised style={buttonStyle}>
              Reset Password
            </Button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default home;
