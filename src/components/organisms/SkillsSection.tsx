import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { skillSet } from "../../info";
import { Marquee } from "../magicui/marquee";
import SkillCard from "../molecules/SkillCard";
import SectionHeading from "../atoms/SectionHeading";

const SkillsSection = () => {
  const skillRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: skillRef.current,
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        tl.from(".skill-heading", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-heading",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        tl.from(".skill-hr", {
          scaleX: 0,
          opacity: 0,
          delay: 1,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skill-hr",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: skillRef }
  );

  const firstRow = skillSet.slice(0, skillSet.length / 2);
  const secondRow = skillSet.slice(skillSet.length / 2);

  return (
    <section ref={skillRef} className="relative z-10 pt-16 pb-0">
      <div className="px-4">
        <SectionHeading
          title="SKILLS"
          headingClassName="skill-heading"
          hrClassName="skill-hr"
        />
      </div>

      <div className="w-full min-h-screen overflow-hidden">
        <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden [perspective:800px]">
          <div
            className="flex flex-col items-center gap-6 md:gap-8 w-full"
            style={{
              transform:
                "translateZ(200px) rotateX(15deg) rotateY(5deg) rotateZ(-10deg)",
            }}
          >
            <div className="w-full">
              <Marquee
                reverse
                pauseOnHover={false}
                className="[--duration:30s] py-2"
                vertical={false}
              >
                {firstRow.map((item) => (
                  <SkillCard key={item.name} {...item} />
                ))}
              </Marquee>
            </div>
            <div className="w-full">
              <Marquee
                pauseOnHover={false}
                vertical={false}
                className="[--duration:25s] py-2"
              >
                {secondRow.map((item) => (
                  <SkillCard key={item.name} {...item} />
                ))}
              </Marquee>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-transparent" />
        </div>
      </div>
      <div className="h-24" />
    </section>
  );
};

export default SkillsSection;
