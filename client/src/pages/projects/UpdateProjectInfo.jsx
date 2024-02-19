import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const UpdateProjectInfo = () => {
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
      </Form>
    </>
  );
};

export default UpdateProjectInfo;
