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
        <section>
          <ServicesSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
