/* eslint-disable react/prop-types */
import HoverButtonLink from '../../components/HoverButtonLink';
import ServiceCards from '../../components/ServiceCards';

const ServicesSection = () => {
  return (
    <>
      <section className="services" id="services" aria-label="Services">
        <div className="wrapper">
          <ServiceCards isMainPage={'true'} />
          <div className="d-flex flex-column justify-content-center align-items-center my-3 mt-lg-5">
            <HoverButtonLink
              className={'hero-btn'}
              link={'/services'}
              content={'View all services'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
