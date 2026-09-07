import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
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
        <ProjectsSection />
        <ExperienceSection />
        <HowIWorkSection />
        <BuildingInPublicSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
