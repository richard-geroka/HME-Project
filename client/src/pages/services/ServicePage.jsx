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
        <div className="mt-5">
          <ServicesSection checkIsMain={'false'} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
