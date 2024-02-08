import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import ServicesSection from '../main/ServicesSection';

const ServicePage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <div className="service-page-container">
          <ServicesSection checkIsMain={'false'} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
