import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasVideo = !!project.video;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (!hasVideo) return;
    if (isHovered && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isHovered, hasVideo]);

  const displayUrl = project.live_link || project.source_code_link || "github.com";

  return (
    <div
      className="group project-card relative rounded-2xl overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Card background with gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full bg-[#1a1a1a] border border-white/[0.08] rounded-2xl overflow-hidden group-hover:border-white/[0.15] transition-all duration-500">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0d0d0d] border-b border-white/[0.06]" aria-hidden="true">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 mx-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.05] rounded-md max-w-md">
              <div className="w-3 h-3 rounded-full border border-white/20" />
              <span className="text-[11px] text-white/50 truncate">
                {displayUrl}
              </span>
            </div>
          </div>
        </div>

        {/* Video / Image container */}
        <div className="relative aspect-video">
          {hasVideo ? (
            <video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          )}

          {/* Play/Pause overlay */}
          {hasVideo && (
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            >
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-1" />
                )}
              </button>
            </div>
          )}

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#141414] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 bg-[#141414]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white text-lg">{project.name}</h3>
              <p className="mt-1.5 text-white/50 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            <a
              href={project.live_link || project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
              className="shrink-0 w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.2] transition-all duration-200"
            >
              <ArrowUpRight className="w-4 h-4 text-white/70" aria-hidden="true" />
            </a>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium text-white/50 bg-white/[0.05] rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
