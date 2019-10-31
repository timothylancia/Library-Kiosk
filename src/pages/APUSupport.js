import React from 'react';
import { Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import IdleTimer from 'react-idle-timer';
import { IdleTimeOutModal } from '../components/IdleModal'
// import { reset } from 'ansi-colors';

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
            // openDialog: false,
        }
        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    getCurrentTime = () => {
        this.setState({
            currentTime: this.idleTimer.getRemainingTime()
        });
        return this.state.currentTime
    }

    handleClose() {
        this.setState({showModal: false})
      }
  
    handleLogout() {
        this.setState({showModal: false})
        this.props.history.push('/')
    }

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

    render() {
        return (
            <div>
                
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={1000 * 1 * this.state.timeIdle} />
                    

                <h1>APU Support Chat Page</h1>

                <Iframe url={APUSupportLink}
                    width="600px"
                    height="750px"/>

                <Link to="/">
                    <Button raised>Home</Button>
                </Link>

                {this.displayModal()}
            </div>
        )
    }

    _onAction(e) {
        console.log('user did something', e)
        this.setState({isTimedOut: false})
    }
     
    _onActive(e) {
        console.log('user is active', e)
        this.setState({isTimedOut: false})
    }
     
    _onIdle(e) {
        console.log('user is idle', e)
        const isTimedOut = this.state.isTimedOut
        if (isTimedOut) {
            this.props.history.push('/')
        } else {
          this.setState({showModal: true})
          this.setState({ timeIdle: 5 })
          this.idleTimer.reset();
          this.setState({isTimedOut: true})
        }
    }
}

export default APUSupport;