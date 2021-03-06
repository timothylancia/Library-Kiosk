import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const IdleTimeOutModal = ({ showModal, handleClose, handleLogout }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You Have Been Idle!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You will get timed out soon. Do you want to stay on this page?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleLogout}>
          Home
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Stay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
