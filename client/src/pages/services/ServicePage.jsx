import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
