import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const ProjectModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="bi bi-plus-circle"> Project</i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Project Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="project name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Location"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Location" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Description"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="description" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Date Started"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="date started" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Date Completed"
            className="mb-3"
          >
            <Form.Control type="date" placeholder="date completed" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Photos"
            className="mb-3"
          >
            <Form.Control type="file" placeholder="photos" multiple />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectModal;
