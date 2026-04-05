import React from "react";
import type { Experience } from "../../types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 w-full">
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-600/40"
          style={{ backgroundColor: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            loading="lazy"
            className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
            <h3 className="text-white font-bold text-base sm:text-lg leading-snug tracking-wide">
              {experience.title}
            </h3>
            <span className="text-gray-400 text-sm font-spacemono whitespace-nowrap flex-shrink-0">
              {experience.date}
            </span>
          </div>
          <p className="text-pista text-sm font-montserrat-extrabold mt-1 tracking-wide">
            {experience.company_name}
          </p>
        </div>
      </div>

      {/* Points */}
      <ul className="space-y-2.5">
        {experience.points.map((point: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pista flex-shrink-0" aria-hidden="true" />
            <p className="text-gray-200 text-sm md:text-base leading-relaxed font-montserrat tracking-wide">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
