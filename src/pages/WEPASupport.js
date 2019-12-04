import React from "react";
import { Button } from "react-mdl";
import { Link } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { IdleTimeOutModal } from "../components/IdleModal";
import "./styles.css";
import { delay } from "q";

// Input your own link to for the iframe
const WEPASupportPage = process.env.REACT_APP_SUPPORT_LINK_1;

//////////////////////////////////////////////////////
/* Styles                                           */
//////////////////////////////////////////////////////
const iframeStyle = {
  marginTop: "60px"
};
const leftDiv = {
  flex: 1,
  width: "50vw",
  height: "93vh"
};
const rightDiv = {
  flex: 1
};
const buttonStyle = {
  marginTop: 15
};
const leftText = {
  marginTop: "25%",
  textAlign: "center",
  fontSize: 56,
  fontWeight: "bold"
};
const paragraphStyle = {
  marginTop: 25,
  marginLeft: "20%",
  marginRight: "20%",
  textAlign: "center",
  fontSize: 24,
  color: "#808080"
};

//////////////////////////////////////////////////////
/* Wepa Support Page                                */
//////////////////////////////////////////////////////
export class WEPASupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Minutes before timeout
      timeIdle: 0.1,

      firstTime: true,

      // Is modal showing
      showModal: false,
      isIdle: false
    };
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // If modal is closed by the user
  // Restart timeout timer
  handleClose() {
    this.setState({ showModal: false, timeIdle: 0.2 });
  }

  // If user is inactive, go back to home page
  handleLogout() {
    this.setState({ showModal: false });
    this.props.history.push("/");
  }

  // Display modal after time
  displayModal() {
    if (this.state.showModal) {
      return (
        <IdleTimeOutModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleLogout={this.handleLogout}
        />
      );
    } else {
      return null;
    }
  }

  // Starts timeout timer
  runTimer() {
    if (this.state.firstTime) {
      this.setState({ firstTime: false });
      return (
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={1000 * 60 * this.state.timeIdle}
        />
      );
    } else {
      console.log("time remaining", this.idleTimer.getRemainingTime());
      console.log(this.state.timeIdle);
      return (
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={1000 * 60 * this.state.timeIdle}
        />
      );
    }
  }

  //////////////////////////////////////////////////////
  /* JSX Render Page                                  */
  //////////////////////////////////////////////////////
  render() {
    return (
      // Encompasing Div
      <div className="flexRow" id="wepaPage">
        {/* Start Timeout Timer */}
        {this.runTimer()}

        {/* Left Side of Page (text) */}
        <div style={leftDiv} className="left" id="l">
          <h1 style={leftText}>WEPA Support</h1>

          <p style={paragraphStyle}>
            This is WEPA's support page. Please feel free to use the live chat
            to connect directly to a WEPA support representative. If the live
            chat is not available, please try browsing the support page for
            help. If you still need assistance please try the APU Support Chat
            or call (626)855-5050 and talk to a APU Support representative.
          </p>
          <p style={{ textAlign: "center", marginTop: 25 }}>
            This page will timeout after 5 minutes of inactivity.
          </p>
          <Link to="/">
            <Button
              raised
              className="centered"
              style={buttonStyle}
              id="homeBtn"
            >
              Home
            </Button>
          </Link>
        </div>

        {/* Right Side of Page (iframe) */}
        <div style={rightDiv}>
          <iframe
            id="wepaWidget"
            title="wepaWidget"
            src={WEPASupportPage}
            width="100%"
            height="100%"
            style={{ iframeStyle }}
          />
        </div>

        {/* Calls method to display modal */}
        {this.displayModal()}
      </div>
    );
  }

  //////////////////////////////////////////////////////
  /* Event Listener Actions                           */
  //////////////////////////////////////////////////////
  _onAction(e) {
    // User did something
    console.log("user did something", e);
    this.setState({ isIdle: false });
    console.log("time remaining", this.idleTimer.getRemainingTime());
  }

  _onActive(e) {
    console.log("user is active", e);
    this.setState({ isIdle: false });
    console.log("time remaining", this.idleTimer.getRemainingTime());
  }

  // If timeout timer runs out, it checks to see if the moda is visable
  // If modal is visable, go back to home page
  // Else, set showModal to true and set timeout timer to 1 minute
  _onIdle(e) {
    console.log("user is idle", e);
    if (this.state.isIdle) {
      console.log("2");
      console.log(this.state.timeIdle);
      this.props.history.push("/");
    } else {
      if (this.state.showModal) {
        console.log("3");
        this.props.history.push("/");
      } else {
        this.setState({ showModal: true, isIdle: true, timeIdle: 0.5 });
        console.log("1");
        delay(600);
        if (this.state.showModal) {
          this.props.history.push("/");
        }
      }
    }
  }
}

export default WEPASupport;
