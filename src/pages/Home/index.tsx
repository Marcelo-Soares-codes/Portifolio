/* eslint-disable */

import { Header } from '../../components/Header';
import { HomeSection } from '../../sections/HomeSection';
import { AboutSection } from '../../sections/AboutSection';
import { EducationSection } from '../../sections/EducationSection';
import { ProjectsSection } from '../../sections/ProjectsSection';
import { SkillsSection } from '../../sections/SkillsSection';
import { ContactSection } from '../../sections/ContactSection';
import { Footer } from '../../components/Footer';
import { RevealWrapper } from '../../components/RevealWrapper';

const Home = () => {
  return (
    <main className=" bg-zinc-900 min-h-screen">
      <Header />

      <HomeSection />
      <RevealWrapper delay={0.1}>
        <AboutSection />
      </RevealWrapper>
      <RevealWrapper delay={0.2}>
        <EducationSection />
      </RevealWrapper>
      <RevealWrapper delay={0.3}>
        <ProjectsSection />
      </RevealWrapper>
      <RevealWrapper delay={0.4}>
        <SkillsSection />
      </RevealWrapper>
      <RevealWrapper delay={0.5}>
        <ContactSection />
      </RevealWrapper>

      <Footer />
    </main>
  );
};

export default Home;
