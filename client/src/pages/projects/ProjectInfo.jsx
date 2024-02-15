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
              <img src="" alt="" />
              <p className="project-info-data"></p>
              <p className="project-info-data"></p>
              <p className="project-info-data"></p>
              <p className="project-info-data"></p>
              <p className="project-info-data"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
