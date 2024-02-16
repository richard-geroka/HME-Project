import axios from 'axios';
import ProjectModal from './ProjectModal';
import fitoutCard from '../../assets/images/photoism1.png';

const ProjectInfo = () => {
  return (
    <>
      <section className="project-info">
        <div className="wrapper">
          <div className="modal-container">
            <ProjectModal />
          </div>
          <div className="project-info-container">
            <div className="project-info-col">
              <div>
                <img src={fitoutCard} alt="" />
              </div>
              <div className="project-info-text">
                <p className="project-info-data">Project: Photoism</p>
                <p className="project-info-data">Location: SM Lanang</p>
                <p className="project-info-data">Duration: 3 Months</p>
                <p className="project-info-data">
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi laboriosam beatae debitis
                  asperiores perferendis.
                </p>
                <button className="hero-btn">View Photos</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectInfo;
