import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

{/* <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>You Have Been Idle!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You Will Get Timed Out. Do you want to stay?</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleLogout}>
                Home
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Stay
            </Button>
            </Modal.Footer>
        </Modal> */}

const WEPALink = "https://wepa.ladesk.com/scripts/generateWidget.php?v=5.15.10.5&t=1571154394&cwid=b8b00bd3&cwt=chat_popout&cid=N14O0RCiYJF409sy&vid=4rruri2tzhwq9do9sru159rjec52i"

export class WEPASupport extends React.Component {
    state = {
        show: false
    }

    Example() {

        return (
      
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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