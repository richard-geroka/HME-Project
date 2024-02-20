import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import photoism from '../../assets/images/photoism1.png';
import photoismtwo from '../../assets/images/photoism2.png';
import photoismthree from '../../assets/images/photoism3.png';
import HoverButtonLink from '../../components/HoverButtonLink';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
          <h2 className="projects-h2 text-center text-success mb-4">
            Our recent projects -
          </h2>
          <div className="d-flex flex-row gap-4 justify-content-center align-items-center flex-wrap w-100">
            <Carousel
              slide={false}
              data-bs-theme="dark"
              className="border border-3 border-success mb-3"
              interval={1000}
            >
              <Carousel.Item>
                <Image src={photoism} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={photoismtwo} fluid />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={photoismthree} fluid />
              </Carousel.Item>
            </Carousel>
            <div className="main-page-project-text d-flex flex-column gap-1 justify-content-start align-items-start">
              <p className="text-success fs-5">
                <span className="first-word-bold">Project:</span> Photism
              </p>
              <p className="text-success fs-5">
                <span className="first-word-bold">Location:</span> SM Lanang
              </p>
              <p className="text-success fs-5">
                <span className="first-word-bold">Duration:</span> 3 Months
              </p>
              <p className="text-success fs-5">
                <span className="first-word-bold">Description:</span> Short and
                brief description about Photoism. Short and brief description
                about Photoism
              </p>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <HoverButtonLink
                  link={'/projects'}
                  content={'View all projects'}
                  className={'hero-btn'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
