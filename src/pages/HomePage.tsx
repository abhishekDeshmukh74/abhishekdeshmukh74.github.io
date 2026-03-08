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
      <Navbar />

      <main className="w-full">
        <section id="home" className="min-h-screen">
          <HeroSection />
        </section>

        <section id="about" className="min-h-screen py-10 sm:py-16">
          <AboutSection />
        </section>

        <section id="experience" className="py-10 sm:py-16">
          <ExperienceSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects" className="min-h-screen py-10 sm:py-16 md:py-20">
          <ProjectsSection />
        </section>

      </main>
    </div>
  );
};

export default HomePage;
