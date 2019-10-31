import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

{/*  */}

const WEPALink = "https://wepa.ladesk.com/scripts/generateWidget.php?v=5.15.10.5&t=1571154394&cwid=b8b00bd3&cwt=chat_popout&cid=N14O0RCiYJF409sy&vid=4rruri2tzhwq9do9sru159rjec52i"

export class WEPASupport extends React.Component {
    state = {
        show: false
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });

    Example() {
        return(

        <div>
      
      <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>You Have Been Idle!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You Will Get Timed Out. Do you want to stay?</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={this.handleLogout}>
                Home
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
                Stay
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
        )
    }

    render() {
        return (
            <div>
                {this.Example()}
                <h1>WEPA Support Chat Page</h1>
                <Link to="/">
                    <Button variant="primary">Home</Button>
                </Link>
            </div>
        )
    }
}

export default WEPASupport;