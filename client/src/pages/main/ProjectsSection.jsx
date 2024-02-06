import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import photoism from '../../assets/images/photoism1.png';
import photoismtwo from '../../assets/images/photoism2.png';
import photoismthree from '../../assets/images/photoism3.png';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="projects-h2 text-center text-success my-2">
            Our recent projects
          </h2>
          <Carousel
            slide={false}
            data-bs-theme="dark"
            className="border border-3 border-success rounded"
          >
            <Carousel.Item>
              <Image
                src={photoism}
                fluid
                rounded
                className="p-lg-5 mx-lg-4 mb-5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={photoismtwo} fluid className="p-lg-5 mx-lg-4 mb-5" />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={photoismthree}
                fluid
                rounded
                className="p-lg-5 mx-lg-4 mb-5"
              />
            </Carousel.Item>
          </Carousel>
          <Button variant="danger" size="lg" className="mt-2">
            View All Projects
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
