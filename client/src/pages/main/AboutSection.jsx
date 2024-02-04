import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import teampic from '../../assets/images/hmeteam.png';

const AboutSection = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col about-text">
            <h2 className="mb-3">Who we are and what we do -</h2>
            <p>
              We are a team of architects, engineers and builders. We will build
              your dream into reality.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              deleniti possimus saepe animi dolor dicta magni modi. Aut repellat
              odio, ipsa, similique exercitationem pariatur est voluptas tenetur
              recusandae sequi modi?
            </p>
            <Button variant="danger" size="lg" className="mt-4 mb-3">
              Contact Us
            </Button>
          </div>
          <div className="col">
            <Image src={teampic} fluid />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
