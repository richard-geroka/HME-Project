/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const UpdateProjectInfo = () => {
  const { id } = useParams();
  const [cookies, _] = useCookies(['jwt-access']);
  const [projectName, setProjectName] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + cookies['jwt-access'],
      },
    };
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
  }, [id, cookies]);

  return (
    <>
      <Form>
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
      </Form>
    </>
  );
};

export default UpdateProjectInfo;
