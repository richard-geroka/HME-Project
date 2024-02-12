import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';

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
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
