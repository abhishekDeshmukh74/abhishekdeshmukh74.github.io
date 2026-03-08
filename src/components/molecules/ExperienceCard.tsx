import React from "react";
import type { Experience } from "../../constants";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-600/40"
          style={{ backgroundColor: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-9 h-9 object-contain"
          />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg leading-tight">
            {experience.title}
          </h3>
          <p className="text-pista text-sm font-montserrat mt-0.5">
            {experience.company_name}
          </p>
        </div>
        <span className="ml-auto text-gray-400 text-xs font-spacemono whitespace-nowrap">
          {experience.date}
        </span>
      </div>

      {/* Points */}
      <ul className="space-y-2.5">
        {experience.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pista flex-shrink-0" />
            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-montserrat">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
