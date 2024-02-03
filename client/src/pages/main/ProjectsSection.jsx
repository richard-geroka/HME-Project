import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import photoism from '../../assets/images/photoism1.png';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Carousel slide={false} data-bs-theme="dark">
            <Carousel.Item>
              <Image
                src={photoism}
                fluid
                rounded
                className="p-lg-5 mx-lg-4 mb-5"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={photoism} fluid className="p-lg-5 mx-lg-4 mb-5" />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={photoism}
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
