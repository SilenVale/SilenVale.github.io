import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import LearningPathSection from './components/LearningPathSection';
import BuildingInPublicSection from './components/BuildingInPublicSection';
import BeyondWorkSection from './components/BeyondWorkSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <LearningPathSection />
        <BuildingInPublicSection />
        <BeyondWorkSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
