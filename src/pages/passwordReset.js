import React from "react";
import { Button } from "react-mdl";
import { Link } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { IdleTimeOutModal } from "../components/IdleModal";
import "./home.css";
import { checkPropTypes } from "prop-types";

// URL for iframe
const passwordResetLink =
  "https://den.apu.edu/idm/passwordResetIdentification.action";

//////////////////////////////////////////////////////
/* Styles                                           */
//////////////////////////////////////////////////////
const iframeStyle = {
  marginTop: "60px"
};
const rightDiv = {
  flex: 1,
  height: "89vh"
};
const buttonStyle = {
  marginTop: 15
};
const leftText = {
  marginTop: "30vh",
  textAlign: "center",
  fontSize: 56,
  fontWeight: "bold"
};
const paragraphStyle = {
  marginTop: 25,
  marginLeft: "25%",
  marginRight: "25%",
  textAlign: "center",
  fontSize: 24,
  color: "#808080"
};

let n = 0;

//////////////////////////////////////////////////////
/* Wepa Support Page                                */
//////////////////////////////////////////////////////
export class passwordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Minutes before timeout
      timeIdle: 5,

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

  passIframe() {
    try {
      return (
        <iframe
          id="passReset"
          title="passReset"
          src={passwordResetLink}
          width="100%"
          height="100%"
          style={{ iframeStyle }}
        />
      );
    } catch (error) {
      //this.props.history.push("/APUSupport");
    }
  }

  // If modal is closed by the user
  // Restart timeout timer
  handleClose() {
    this.setState({ showModal: false, timeIdle: 5 });
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

  //////////////////////////////////////////////////////
  /* JSX Render Page                                  */
  //////////////////////////////////////////////////////
  render() {
    return (
      // Encompasing Div
      <div className="flexColumn" id="wepaPage">
        {/* Start TImeout Timer */}
        {this.runTimer()}

        {/* Right Side of Page (iframe) */}
        <div style={rightDiv}>{this.passIframe()}</div>

        <p style={{ marginLeft: 5 }}>
          * The link to IMT Support Desk does not function, please click
          <Link to="/APUSupport"> HERE </Link>
          for assistance *
        </p>

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
  }

  _onActive(e) {
    console.log("user is active", e);
    if (!this.showModal) {
      this.setState({ isIdle: false });
    }
  }

  // If timeout timer runs out, it checks to see if the moda is visable
  // If modal is visable, go back to home page
  // Else, set showModal to true and set timeout timer to 1 minute
  _onIdle(e) {
    console.log("user is idle", e);
    const isIdle = this.state.isIdle;
    if (isIdle) {
      this.props.history.push("/");
    } else {
      this.setState({ showModal: true });
      this.setState({ timeIdle: 1 });
      this.idleTimer.reset();
      this.setState({ isIdle: true });
    }
  }
}

export default passwordReset;
