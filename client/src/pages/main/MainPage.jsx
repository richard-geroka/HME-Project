import CollapsibleNavbar from '../../components/CollapsibleNavbar';
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
      </main>
    </>
  );
};

export default MainPage;
