import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, LinkIcon } from "lucide-react";
import { gsap } from "gsap";
import type { Project } from "../../constants";
import TagBadge from "../atoms/TagBadge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        boxShadow: "0 25px 50px -12px rgba(0, 240, 80, 0.3)",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(image, { scale: 1.15, duration: 0.8, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(image, { scale: 1, duration: 0.8, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "project-card group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50",
        "will-change-transform"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover will-change-transform"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent",
            "transition-opacity duration-300",
            isHovered ? "opacity-60" : "opacity-40"
          )}
        />

        {/* Action Buttons */}
        <div
          className={cn(
            "absolute top-4 right-4 flex gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          )}
        >
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.name} on GitHub`}
            className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:bg-gray-800/80 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.name}`}
              className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-600/50 hover:bg-gray-800/80 transition-colors"
            >
              <LinkIcon className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <TagBadge key={tagIndex} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
