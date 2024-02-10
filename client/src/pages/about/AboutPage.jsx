import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import OurStory from './OurStory';

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
        <OurStory />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
