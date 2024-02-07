import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import AboutSection from './AboutSection';
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
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
};

export default MainPage;
