/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const UpdateProjectInfo = () => {
  const { id } = useParams();
  const [cookies, _] = useCookies(['jwt-access']);
  const [projectName, setProjectName] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();

  const navigate = useNavigate();

  const config = {
    headers: {
      Authorization: 'Bearer ' + cookies['jwt-access'],
    },
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/project/' + id,
          config,
        );
        setProjectName(response.data.project.projectName);
        setLocation(response.data.project.location);
        setDescription(response.data.project.description);
        setDuration(response.data.project.duration);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProject();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        'http://localhost:3000/api/project/' + id,
        {
          projectName,
          location,
          description,
          duration,
        },
        config,
      );
      alert('Updated info successfully!');
      navigate('/projects');
    } catch (err) {
      console.error(err);
    }
  };

  const onCancel = () => {
    navigate('/projects');
  };

  return (
    <>
      <div className="project-form-container">
        <h2>Update Project Info</h2>
        <Form onSubmit={onSubmit} className="update-project-form">
          <FloatingLabel
            controlId="floatingInput"
            label="Project Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="project name"
              name="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </FloatingLabel>
          <div>
            <button className="hero-btn" type="submit">
              Update
            </button>
            <button className="hero-btn" type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateProjectInfo;
