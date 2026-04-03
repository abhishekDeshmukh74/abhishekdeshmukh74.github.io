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

      <main id="main-content" className="w-full">
        <section id="home" aria-label="Hero" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" aria-label="About Me" className="min-h-screen py-10 sm:py-16">
          <AboutSection />
        </section>

        <section id="experience" aria-label="Work Experience" className="py-10 sm:py-16">
          <ExperienceSection />
        </section>

        <section id="skills" aria-label="Skills">
          <SkillsSection />
        </section>

        <section id="projects" aria-label="Projects" className="min-h-screen py-10 sm:py-16 md:py-20">
          <ProjectsSection />
        </section>

      </main>
    </div>
  );
};

export default HomePage;
