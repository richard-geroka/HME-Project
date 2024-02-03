import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import design from '../../assets/images/carousel-test.png';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Carousel
            fade
            className="border"
            style={{ width: '50rem' }}
            data-bs-theme="dark"
          >
            <Carousel.Item>
              <Image src={design} />
              <Carousel.Caption>
                <h3 className="text-success">Photoism</h3>
                <p className="text-success">SM Lanang</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={design} />
              <Carousel.Caption>
                <h3 className="text-success">Photoism</h3>
                <p className="text-success">SM Lanang</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={design} />
              <Carousel.Caption>
                <h3 className="text-success">Photoism</h3>
                <p className="text-success">SM Lanang</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
