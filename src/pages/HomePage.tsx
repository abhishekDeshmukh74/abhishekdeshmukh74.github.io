import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
import AboutSection from "../components/organisms/AboutSection";
import ExperienceSection from "../components/organisms/ExperienceSection";
import SkillsSection from "../components/organisms/SkillsSection";
import ProjectsSection from "../components/organisms/ProjectsSection";

const HomePage = () => {
  return (
    <div className="w-full">
      <header>
        <Navbar />
      </header>

      <main id="main-content" className="w-full relative z-10">
        <section id="home" aria-label="Hero" className="min-h-screen">
          <HeroSection />
        </section>

        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-[#00f050]/30 to-transparent mx-8 sm:mx-16" />

        <section id="about" aria-label="About Me" className="min-h-screen py-10 sm:py-16 scroll-mt-20 sm:scroll-mt-24">
          <AboutSection />
        </section>

        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-[#00f050]/30 to-transparent mx-8 sm:mx-16" />

        <section id="experience" aria-label="Work Experience" className="py-10 sm:py-16 scroll-mt-20 sm:scroll-mt-24">
          <ExperienceSection />
        </section>

        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-[#00f050]/30 to-transparent mx-8 sm:mx-16" />

        <section id="skills" aria-label="Skills" className="scroll-mt-20 sm:scroll-mt-24">
          <SkillsSection />
        </section>

        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-[#00f050]/30 to-transparent mx-8 sm:mx-16" />

        <section id="projects" aria-label="Projects" className="min-h-screen py-10 sm:py-16 md:py-20 scroll-mt-20 sm:scroll-mt-24">
          <ProjectsSection />
        </section>

      </main>
    </div>
  );
};

export default HomePage;
