import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import HeroSection from './HeroSection';
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
      </main>
    </>
  );
};

export default MainPage;
