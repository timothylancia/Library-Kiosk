import React from "react";
import { Button } from "react-mdl";
import { Link } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { IdleTimeOutModal } from "../components/IdleModal";
import "./home.css";

// URL for iframe
const APUSupportLink =
  "https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=apu.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-US&title=Web%20Widget%20Live%20Chat";

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
const centerDiv = {
  display: "flex",
  justifyContent: "center",
  width: "100%"
};

//////////////////////////////////////////////////////
/* APU Support Page                                 */
//////////////////////////////////////////////////////
export class APUSupport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeIdle: 5,
      currentTime: 0,
      showModal: false,
      userLoggedIn: false,
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
      <div className="flexRow" id="apuPage">
        {/* Start TImeout Timer */}
        {this.runTimer()}

        {/* Left Side of Page (text) */}
        <div style={leftDiv}>
          <h1 style={leftText}>APU Support</h1>
          <p style={paragraphStyle}>
            This chat connects you straight to an APU Support representative who
            will help you with any computer or APU account needs. If the APU
            Support Chat is not available and the need is urgent, please call
            (626)855-5050.
          </p>
          <p style={{ textAlign: "center", marginTop: 25 }}>
            This page will timeout after 5 minutes of inactivity.
          </p>
          <div style={centerDiv}>
            <Link to="/">
              <Button raised style={buttonStyle}>
                Home
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side of Page (iframe) */}
        <div style={rightDiv}>
          <iframe
            id="apuWidget"
            title="apuWidget"
            src={APUSupportLink}
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
      console.log("time remaining", this.idleTimer.getRemainingTime());
      this.setState({ isIdle: true });
    }
  }
}

export default APUSupport;
