/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { PageId, ProjectItem } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContextPeek, { PeekState } from './components/ContextPeek';
import InitialLoader from './components/InitialLoader';
import ProjectModal from './components/ProjectModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import AchievementsPage from './pages/AchievementsPage';
import JourneyPage from './pages/JourneyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId | '404'>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Context Peek state
  const [peek, setPeek] = useState<PeekState>({
    visible: false,
    title: '',
    tags: [],
    x: 0,
    y: 0,
  });

  // Map URL pathname or hash to PageId
  const getPageFromLocation = useCallback((): PageId | '404' => {
    // Check hash first (e.g. #/projects or #projects)
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (hash) {
      const validPages: PageId[] = [
        'home',
        'about',
        'projects',
        'experience',
        'skills',
        'achievements',
        'journey',
        'contact',
      ];
      if (validPages.includes(hash as PageId)) return hash as PageId;
      return '404';
    }

    // Check pathname
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (!path || path === 'home' || path === 'index.html') return 'home';

    const validPages: PageId[] = [
      'about',
      'projects',
      'experience',
      'skills',
      'achievements',
      'journey',
      'contact',
    ];
    if (validPages.includes(path as PageId)) return path as PageId;

    return '404';
  }, []);

  // Sync state on load and popstate
  useEffect(() => {
    const initialPage = getPageFromLocation();
    setCurrentPage(initialPage);

    const handlePopState = () => {
      setCurrentPage(getPageFromLocation());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getPageFromLocation]);

  // Navigate handler that updates URL hash and page
  const navigateTo = useCallback((page: PageId | '404') => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Context Peek Handlers
  const handleHoverPeek = useCallback(
    (title: string, tags: string[], e: React.MouseEvent) => {
      setPeek({
        visible: true,
        title,
        tags,
        x: e.clientX,
        y: e.clientY,
      });
    },
    [],
  );

  const handleLeavePeek = useCallback(() => {
    setPeek((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f1f5f9] text-[#1a2433]">
      {/* Fast Initial Splash Screen */}
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}

      {/* Context Peek Tooltip Follower */}
      <ContextPeek peek={peek} />

      {/* Floating Navbar */}
      <Navbar
        currentPage={currentPage === '404' ? 'home' : currentPage}
        onNavigate={(p) => navigateTo(p)}
      />

      {/* Main Content Area with Route Transition */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onSelectProject={setSelectedProject}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'experience' && (
          <ExperiencePage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'skills' && (
          <SkillsPage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'achievements' && (
          <AchievementsPage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'journey' && (
          <JourneyPage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
            onHoverPeek={handleHoverPeek}
            onLeavePeek={handleLeavePeek}
          />
        )}
        {currentPage === '404' && <NotFoundPage onNavigate={navigateTo} />}
      </main>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Editorial Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
