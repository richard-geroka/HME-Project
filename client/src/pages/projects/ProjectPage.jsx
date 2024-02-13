import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import ProjectHero from './ProjectHero';

const ProjectPage = () => {
  return (
    <>
      <header>
        <nav>
          <CollapsibleNavbar />
        </nav>
      </header>
      <main>
        <ProjectHero />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
