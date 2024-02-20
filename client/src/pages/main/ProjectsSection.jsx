import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import photoism from '../../assets/images/photoism1.png';
import photoismtwo from '../../assets/images/photoism2.png';
import photoismthree from '../../assets/images/photoism3.png';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';
import HoverButtonLink from '../../components/HoverButtonLink';

const ProjectsSection = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="wrapper d-flex flex-column justify-content-center align-items-center">
          <h2 className="projects-h2 text-center text-success mb-2">
            Our recent projects -
          </h2>
          <div
            className="d-flex flex-row gap-4 justify-content-center align-items-center flex-wrap"
            style={{ width: '100%' }}
          >
            <Carousel
              slide={false}
              data-bs-theme="dark"
              className="border border-3 border-success mb-3"
              interval={1000}
            >
              <Carousel.Item>
                <Image src={photoism} fluid />
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
                <Image src={photoismthree} fluid />
                <CarouselCaption>
                  <p className="fs-4 fw-bold">PHOTOISM</p>
                </CarouselCaption>
              </Carousel.Item>
            </Carousel>
            <div
              className="d-flex flex-column gap-1"
              style={{ maxWidth: '50%' }}
            >
              <p className="text-success fs-5">Project: Photism</p>
              <p className="text-success fs-5">Location: SM Lanang</p>
              <p className="text-success fs-5">Duration: 3 Months</p>
              <p className="text-success fs-5">
                Description: Short and brief description about Photoism. Short
                and brief description about Photoism
              </p>
              <div className="mt-1 d-flex flex-column justify-content-center align-items-start">
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
