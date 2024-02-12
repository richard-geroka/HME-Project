import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
