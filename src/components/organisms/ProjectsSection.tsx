import React, { useRef, useEffect } from "react";
import { Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../../info/index";
import { profile } from "../../constants";
import ProjectCard from "../molecules/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const line = lineRef.current;
    const cta = ctaRef.current;

    const projectCards = gsap.utils.toArray<HTMLElement>(".project-card");

    gsap.set([title, subtitle, line, cta], { y: 100, opacity: 0, scale: 0.9 });
    gsap.set(projectCards, { opacity: 0, y: 40 });

    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "top 50%",
        scrub: 1,
        toggleActions: "play reverse play reverse",
      },
    });

    headerTl
      .to(title, { y: 0, opacity: 1, scale: 1, duration: 2, ease: "power3.out" })
      .to(
        subtitle,
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" },
        "-=1.2"
      )
      .to(
        line,
        { scaleX: 1, opacity: 1, duration: 1, ease: "power2.inOut" },
        "-=0.8"
      );

    projectCards.forEach((card, index) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "top 60%",
          scrub: 0.5,
          toggleActions: "play reverse play reverse",
        },
        delay: index * 0.1,
      });

      gsap.to(card, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    gsap.to(cta, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cta,
        start: "top 95%",
        end: "top 70%",
        scrub: 0.8,
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className='w-full min-h-screen py-20 px-4 md:px-8 will-change-transform'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pista font-montserrat-extrabold mb-6 will-change-transform'
          >
            Projects
          </h2>
          <p
            ref={subtitleRef}
            className='text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl font-montserrat mx-auto leading-relaxed will-change-transform'
          >
            A selection of projects spanning full-stack development, Gen AI integrations, and modern web experiences
          </p>
          <div className='mt-8 flex justify-center'>
            <div
              ref={lineRef}
              className='h-px w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent origin-center will-change-transform'
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 will-change-transform md:mx-auto'
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-20'>
          <div ref={ctaRef} className='will-change-transform'>
            <p className='text-gray-400 mb-6'>Want to see more of my work?</p>
            <a
              href={profile.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-600 text-white font-medium rounded-full hover:from-green-500 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25'
            >
              <Github className='w-5 h-5' />
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
