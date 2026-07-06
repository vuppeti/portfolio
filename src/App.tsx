import { HashRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>© 2026 Sai Prakash Reddy Vuppeti. Built with React + TypeScript.</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
