import HoverButtonLink from '../../components/HoverButtonLink';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="services" aria-label="Services">
        <div className="wrapper">
          <h2 className="services-h2 my-4 text-success text-center">
            Our professional services -
          </h2>
          <div className="d-flex flex-column justify-content-center align-items-center my-3 mt-lg-5">
            <HoverButtonLink
              className={'hero-btn'}
              link={'contact'}
              content={'Contact us'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
