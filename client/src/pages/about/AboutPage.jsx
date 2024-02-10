import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';

const AboutPage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <AboutHero />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
