import CollapsibleNavbar from '../../components/CollapsibleNavbar';
import Footer from '../../components/Footer';
import ProjectHero from './ProjectHero';
import ProjectInfo from './ProjectInfo';

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
        <ProjectInfo />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
