import { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Releases from './components/Releases';
import Telemetry from './components/Telemetry';
import Footer from './components/Footer';
import ProjectDetailsPage from './components/ProjectDetailsPage';
import { projects } from './data/projectsData';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  // Sync hash with project slug for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project-')) {
        const slug = hash.replace('project-', '');
        const found = projects.find((p) => p.slug === slug);
        if (found) {
          setActiveProject(found);
          window.scrollTo(0, 0);
          return;
        }
      }
      if (hash === '' || hash === 'releases') {
        setActiveProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project) => {
    setActiveProject(project);
    window.location.hash = `project-${project.slug}`;
    window.scrollTo(0, 0);
  };

  const handleBackToMain = () => {
    setActiveProject(null);
    window.location.hash = 'releases';
    window.scrollTo(0, 0);
  };

  return (
    <div className="text-on-background font-body-md selection:bg-secondary-container selection:text-white relative min-h-screen">
      {/* Interactive Dot Matrix Canvas Background */}
      <CanvasBackground />

      {/* Navigation Header - Hidden on Project Details page */}
      {!activeProject && <Header />}

      {/* Main Content Area */}
      <main className={`${activeProject ? 'pt-8' : 'pt-16'} relative z-10`}>
        {activeProject ? (
          <ProjectDetailsPage project={activeProject} onBack={handleBackToMain} />
        ) : (
          <>
            <Hero />
            <Specs />
            <Releases onSelectProject={handleSelectProject} />
            <Telemetry />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Decorative Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[60]"></div>
    </div>
  );
}

export default App;
