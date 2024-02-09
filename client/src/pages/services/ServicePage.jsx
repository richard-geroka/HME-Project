import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import HoverButtonLink from '../../components/HoverButtonLink';
import ServiceCards from '../../components/ServiceCards';
import ServiceHero from './ServiceHero';

const ServicePage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <div className="wrapper">
          <ServiceHero />
          <ServiceCards isMainPage={'false'} />
          <div className="d-flex flex-column justify-content-center align-items-center my-3 mt-lg-5">
            <HoverButtonLink
              className={'hero-btn'}
              link={'/contact'}
              content={'Get a quote'}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
