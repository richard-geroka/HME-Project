/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const ProjectInfo = () => {
  const [projects, setProjects] = useState([]);
  const [cookies, _] = useCookies(['jwt-access', 'user']);
  const config = {
    headers: {
      Authorization: 'Bearer ' + cookies['jwt-access'],
    },
  };

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/project`,
        );
        setProjects(response.data.projects);
      } catch (err) {
        alert(`Error: ${err.response.data.message}`);
      }
    };

    fetchedData();
  }, []);

  function getImageUrl(name) {
    return new URL(`../../assets/images/${name}`, import.meta.url).href;
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/project/` + id,
        config,
      );
      alert('Project has been deleted successfully');
      window.location.reload();
    } catch (err) {
      alert(`Error: ${err.response.data.message}`);
    }
  };

  return (
    <>
      <section className="project-info">
        <div className="wrapper">
          <div className="modal-container">
            {cookies.user ? <ProjectModal /> : null}
          </div>
          {projects.map((project) => {
            return (
              <div key={project._id} className="project-info-container">
                <div className="project-info-col">
                  {cookies.user ? (
                    <div className="project-info-btn-container">
                      <Link
                        to={`/projects/${project._id}`}
                        className="hero-btn"
                      >
                        <i className="bi bi-pencil-square"></i> edit
                      </Link>
                      <button
                        className="hero-btn"
                        onClick={() => handleDelete(project._id)}
                      >
                        <i className="bi bi-trash"></i> delete
                      </button>
                    </div>
                  ) : null}
                  <div className="project-info-text">
                    <p className="project-info-data">
                      <span className="first-word-bold">Project:</span>{' '}
                      {project.projectName}
                    </p>
                    <p className="project-info-data">
                      <span className="first-word-bold">Location:</span>{' '}
                      {project.location}
                    </p>
                    <p className="project-info-data">
                      <span className="first-word-bold">Duration:</span>{' '}
                      {project.duration}
                    </p>
                    <p className="project-info-data">
                      <span className="first-word-bold">Description:</span>{' '}
                      {project.description}
                    </p>
                  </div>
                  <div className="project-info-image-container">
                    {project.photos.map((photo, index) => {
                      return (
                        <div key={index}>
                          <img
                            src={`${import.meta.env.VITE_API_URL}/images/${photo}`}
                            alt={`${project.projectName} + photo`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
