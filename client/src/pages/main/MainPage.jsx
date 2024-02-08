import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import ServicesSection from './ServicesSection';

const MainPage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <HeroSection />
        <ServicesSection checkIsMain={'true'} />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
