import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StackSection from './components/StackSection';
import LearningPathSection from './components/LearningPathSection';
import ProjectsSection from './components/ProjectsSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StackSection />
        <LearningPathSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}