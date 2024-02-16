/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const ProjectModal = () => {
  const [show, setShow] = useState(false);
  const [cookies, _] = useCookies(['jwt-access']);
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    location: '',
    description: '',
    duration: '',
  });
  const [photos, setPhotos] = useState();

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo({ ...projectInfo, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    [...photos].forEach((photo) => {
      formData.append('photos', photo);
    });
    formData.append('projectName', projectInfo.projectName);
    formData.append('location', projectInfo.location);
    formData.append('description', projectInfo.description);
    formData.append('duration', projectInfo.duration);

    const config = {
      headers: {
        Authorization: 'Bearer ' + cookies['jwt-access'],
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      await axios.post('http://localhost:3000/api/project', formData, config);
      console.log(cookies);
      console.log(formData);
      navigate('/project');
    } catch (err) {
      console.error(err);
    }
  };

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
          <Form onSubmit={onSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Project Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="project name"
                name="projectName"
                value={projectInfo.projectName}
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={projectInfo.location}
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="description"
                name="description"
                value={projectInfo.description}
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Build Duration"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="build duration"
                name="duration"
                value={projectInfo.duration}
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Photos"
              className="mb-3"
            >
              <Form.Control
                type="file"
                placeholder="photos"
                multiple
                name="photos"
                onChange={(e) => setPhotos(e.target.files)}
              />
            </FloatingLabel>
            <Button variant="danger" type="submit" className="me-3">
              Submit
            </Button>
            <Button
              variant="outline-success"
              onClick={handleClose}
              type="button"
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectModal;
