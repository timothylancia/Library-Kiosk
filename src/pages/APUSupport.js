import React from 'react';
import { Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import IdleTimer from 'react-idle-timer';
import { IdleTimeOutModal } from '../components/IdleModal'
import {Container, Row, Col} from 'react-bootstrap'
import './home.css';
// import { reset } from 'ansi-colors';

// const frame = document.createElement('Iframe');
// document.body.appendChild(frame);
// frame.addEventListener('load', function() {

//     frame.contentWindow.addEventListener("mousemove", this.idleTimer.reset(), false);
//     frame.contentWindow.addEventListener("mousedown", this.idleTimer.reset(), false);
  
// });

const APUSupportLink = "https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=apu.zendesk.com&settings=JTdCJTIyd2ViV2lkZ2V0JTIyJTNBJTdCJTIyY2hhdCUyMiUzQSU3QiUyMnRpdGxlJTIyJTNBbnVsbCUyQyUyMmRlcGFydG1lbnRzJTIyJTNBJTdCJTdEJTJDJTIycHJlY2hhdEZvcm0lMjIlM0ElN0IlMjJkZXBhcnRtZW50TGFiZWwlMjIlM0FudWxsJTJDJTIyZ3JlZXRpbmclMjIlM0FudWxsJTdEJTJDJTIyb2ZmbGluZUZvcm0lMjIlM0ElN0IlMjJncmVldGluZyUyMiUzQW51bGwlN0QlMkMlMjJjb25jaWVyZ2UlMjIlM0ElN0IlMjJhdmF0YXJQYXRoJTIyJTNBbnVsbCUyQyUyMm5hbWUlMjIlM0FudWxsJTJDJTIydGl0bGUlMjIlM0FudWxsJTdEJTdEJTJDJTIyY29sb3IlMjIlM0ElN0IlMjJhcnRpY2xlTGlua3MlMjIlM0ElMjIlMjIlMkMlMjJidXR0b24lMjIlM0ElMjIlMjIlMkMlMjJoZWFkZXIlMjIlM0ElMjIlMjIlMkMlMjJsYXVuY2hlciUyMiUzQSUyMiUyMiUyQyUyMmxhdW5jaGVyVGV4dCUyMiUzQSUyMiUyMiUyQyUyMnJlc3VsdExpc3RzJTIyJTNBJTIyJTIyJTJDJTIydGhlbWUlMjIlM0FudWxsJTdEJTdEJTdE&&locale=en-US&title=Web%20Widget%20Live%20Chat";

export class APUSupport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeIdle: 5,
            currentTime: 0,
            showModal: false,
            userLoggedIn: false,
            isTimedOut: false,
            isGettingOff: false
            // openDialog: false,
        }
        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        // this.Iframe.contentWindow.addEventListener("mousedown", console.log("click"))
        // this.Iframe.contentWindow.addEventListener("mousemove", console.log("move"))
    }

    getCurrentTime = () => {
        this.setState({
            currentTime: this.idleTimer.getRemainingTime()
        });
        return this.state.currentTime
    }

    handleClose() {
        this.setState({showModal: false, timeIdle: 3})
      }
  
    handleLogout() {
        this.setState({showModal: false, isGettingOff: true})
        this.props.history.push('/')
    }

    // Display 
    displayModal() {
        if (this.state.showModal) {
            return (
                <IdleTimeOutModal 
                        showModal={this.state.showModal} 
                        handleClose={this.handleClose}
                        handleLogout={this.handleLogout}
                    />
            )
        } else { return null }
    }

    runTimer() {
        return(
            <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={1000 * 60 * this.state.timeIdle} />
        )
    }

    render() {
        return (
            // <div>
            //     {this.runTimer()}
            //     <Container>
            //         <Row>
            //             <Col>
            //         <h1 style={{marginRight: "200px"}}>APU Support Chat Page</h1>
            //         <Link to="/">
            //             <Button raised>Home</Button>
            //         </Link>
            //         </Col>

            //         <Col>
            //             {/*<Iframe url={APUSupportLink}
            //                 width="600px"
            //                 height="900px"/>*/}
            //                 <iframe src={APUSupportLink} 
            //                     width="100%"
            //                     height="900px"/>
            //         </Col>
            //         </Row>
                    
            //     </Container>

            //     {this.displayModal()}
            // </div>
            <div>
                {this.runTimer()}
                <div class="split left">
                    <iframe src={APUSupportLink} 
                        width="650px"
                        height="900px"
                        style={{marginTop: "40px"}}/>
                </div>
                <div class="split right">
                    <div class="centered">
                    <h1>APU Support Chat</h1>
                    <p>This chat connects you directly to a APU support representative that can answer any questions you may have concerning lab computers or account issues.</p>
                    <p>This page will refresh after 5 minutes of inactivity.</p>
                    <Link to="/">
                         <Button raised>Home</Button>
                     </Link>
                    </div>
                </div>
                {this.displayModal()}
            </div>
        )
    }

    _onAction(e) {
        if (!this.isGettingOff){
            console.log('user did something', e)
            // console.log('time remaining', this.idleTimer.getRemainingTime())

            this.setState({isTimedOut: false})
        }
    }
     
    _onActive(e) {
        console.log('user is active', e)
        if (!this.showModal){
            this.setState({isTimedOut: false})
        }
    }
     
    _onIdle(e) {
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if (isTimedOut) {
            this.props.history.push('/')
        } else {
          this.setState({showModal: true})
          this.setState({ timeIdle: 1 })
          this.idleTimer.reset();
          console.log('time remaining', this.idleTimer.getRemainingTime())
          this.setState({isTimedOut: true})
        }
    }
}

export default APUSupport;