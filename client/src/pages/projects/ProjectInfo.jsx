/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const ProjectInfo = () => {
  const [projects, setProjects] = useState([]);
  const [cookies, _] = useCookies(['jwt-access', 'user']);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/project');
        setProjects(response.data.projects);
      } catch (err) {
        console.error(err);
      }
    };

    fetchedData();
  }, []);

  function getImageUrl(name) {
    return new URL(`../../assets/images/${name}`, import.meta.url).href;
  }

  const config = {
    headers: {
      Authorization: 'Bearer ' + cookies['jwt-access'],
    },
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:3000/api/project/' + id, config);
      alert('Project has been deleted successfully');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="project-info">
        <div className="wrapper">
          <div className="modal-container">
            {cookies.user ? <ProjectModal /> : undefined}
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
                  ) : undefined}
                  <div className="project-info-text">
                    <p className="project-info-data">
                      Project: {project.projectName}
                    </p>
                    <p className="project-info-data">
                      Location: {project.location}
                    </p>
                    <p className="project-info-data">
                      Duration: {project.duration}
                    </p>
                    <p className="project-info-data">
                      Description: {project.description}
                    </p>
                  </div>
                  <div className="project-info-image-container">
                    {project.photos.map((photo, index) => {
                      return (
                        <div key={index}>
                          <img src={getImageUrl(photo)} alt="" />
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
