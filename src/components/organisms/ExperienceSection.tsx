import React, { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "../../info";
import ExperienceCard from "../molecules/ExperienceCard";
import SectionHeading from "../atoms/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.from(".exp-heading", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-heading",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        gsap.from(".exp-hr", {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exp-hr",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        const cards = gsap.utils.toArray<HTMLElement>(".exp-card");
        cards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              scroller: "body",
              start: "top 88%",
              end: "top 60%",
              scrub: 0.6,
            },
          });
        });
      });

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Experience"
          headingClassName="exp-heading"
          hrClassName="exp-hr"
        />

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-pista via-pista/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="exp-card relative flex gap-6 sm:gap-10">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 rounded-full border-2 border-pista bg-black flex items-center justify-center"
                  >
                    <div className="w-3 h-3 rounded-full bg-pista" aria-hidden="true" />
                  </motion.div>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <ExperienceCard experience={experience} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
