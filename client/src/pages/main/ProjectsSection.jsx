import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import photoism from '../../assets/images/photoism1.png';
import photoismtwo from '../../assets/images/photoism2.png';
import photoismthree from '../../assets/images/photoism3.png';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
          <h2 className="projects-h2 text-center text-success mb-2">
            Our recent projects -
          </h2>
          <Carousel
            slide={false}
            data-bs-theme="dark"
            className="border border-3 border-success"
            interval={1000}
          >
            <Carousel.Item>
              <Image
                src={photoism}
                fluid
                // className="p-lg-5 mx-lg-4 mb-5"
              />
              <CarouselCaption>
                <p className="fs-4 fw-bold">PHOTOISM</p>
              </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={photoismtwo} fluid />
              <CarouselCaption>
                <p className="fs-4 fw-bold">PHOTOISM</p>
              </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={photoismthree}
                fluid
                // className="p-lg-5 mx-lg-4 mb-5"
              />
              <CarouselCaption>
                <p className="fs-4 fw-bold">PHOTOISM</p>
              </CarouselCaption>
            </Carousel.Item>
          </Carousel>
          <Link to={'/projects'} className="hero-btn">
            View all projects
          </Link>
          {/* <HoverButtonLink
            className={'hero-btn'}
            link={'#'}
            content={'View all projects'}
          /> */}
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
