import axios from 'axios';
import ProjectModal from './ProjectModal';

const ProjectInfo = () => {
  return (
    <>
      <section className="project-info">
        <div className="wrapper">
          <ProjectModal />
          <div className="project-info-container">
            <div className="project-info-col">
              <img
                src="../../../../server/public/images/projects-65b63748c304d887a531b157-1707809320734-1.jpeg"
                alt=""
              />
              <p className="project-info-data">Project Name: Photoism</p>
              <p className="project-info-data">Location: SM Lanang</p>
              <p className="project-info-data">Duration: 3 Months</p>
              <p className="project-info-data">
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Excepturi laboriosam beatae debitis asperiores
                perferendis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
