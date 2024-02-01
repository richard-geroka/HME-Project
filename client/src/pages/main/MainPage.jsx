import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import HeroSection from './HeroSection';

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
      </main>
    </>
  );
};

export default MainPage;
