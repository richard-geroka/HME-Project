import handshake from '../../assets/images/handshake.png';
import HoverButtonLink from '../../components/HoverButtonLink';

const WhyOurServices = () => {
  return (
    <>
      <section className="our-services">
        <div className="our-services-container">
          <h2>Why choose our services ?</h2>
          <div className="our-services-grid">
            <div className="services-image-col">
              <img src={handshake} alt="People shaking hand" />
            </div>
            <div className="services-text-col">
              <p>
                We strive to provide our clients with honest and excellent
                services.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                quaerat! Culpa inventore facere perspiciatis optio nihil itaque
                numquam quidem unde reprehenderit dolorum? Nobis dolorum, rem
                temporibus corrupti est blanditiis illo?
              </p>
              <HoverButtonLink
                className={'hero-btn'}
                link={'/contact'}
                content={'Contact us'}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyOurServices;
