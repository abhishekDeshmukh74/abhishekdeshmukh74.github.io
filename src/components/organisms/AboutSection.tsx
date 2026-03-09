import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { about } from "../../info";
import SectionHeading from "../atoms/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        tl.from(".about-heading", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        tl.from(".about-hr", {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 1,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-hr",
            scroller: "body",
            start: "top 85%",
            scrub: 3,
          },
        });

        const words = gsap.utils.toArray(".about-text span");
        tl.from(words, {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            scroller: "body",
            start: "top 85%",
            end: "top 20%",
            scrub: 3,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: aboutRef }
  );

  const splitText = (text: string) =>
    text.split(" ").map((word: string, i: number) => (
      <span key={i} className="inline-block">
        {word}&nbsp;
      </span>
    ));

  return (
    <section ref={aboutRef}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <SectionHeading
          title="About Me"
          headingClassName="about-heading"
          hrClassName="about-hr"
        />
        <p className="about-text text-base sm:text-lg md:text-xl leading-loose text-gray-300 font-montserrat text-start">
          {splitText(about)}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
