import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SupplementarySection from './components/SupplementarySection';
import HowIWorkSection from './components/HowIWorkSection';
import BuildingInPublicSection from './components/BuildingInPublicSection';
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
        <SupplementarySection />
        <HowIWorkSection />
        <BuildingInPublicSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
