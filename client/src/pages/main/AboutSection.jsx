import teampic from '../../assets/images/hmeteam1.png';
import HoverButtonLink from '../../components/HoverButtonLink';

const AboutSection = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="wrapper">
          <h2 className="mb-3">Who we are and what we do -</h2>
          <div className="about-container-grid">
            <div className="col-image">
              <img src={teampic} alt="HME team picture" />
            </div>
            <div className="col-about-text">
              <p>
                We are a team of architects, engineers and builders. We will
                build your dream into reality.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <HoverButtonLink
                className={'hero-btn'}
                link={'#contact'}
                content={'Contact us'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
