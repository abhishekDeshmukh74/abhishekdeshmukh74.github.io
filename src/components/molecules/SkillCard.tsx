import React from "react";
import { cn } from "@/lib/utils";
import type { SkillItem } from "../../types";

const SkillCard = ({ img, name }: SkillItem) => {
  return (
    <figure
      className={cn(
        "relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 overflow-hidden rounded-xl border border-gray-700/50 p-4 md:p-5",
        "hover:bg-gray-800/60 transition-transform duration-200 will-change-transform",
        "shadow-lg hover:shadow-xl hover:scale-[1.02]"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <img
          className="rounded-lg object-contain"
          width="32"
          height="32"
          alt={`${name} logo`}
          src={img}
          loading="lazy"
        />
        <figcaption className="text-sm font-medium text-white text-center leading-tight">
          {name}
        </figcaption>
      </div>
    </figure>
  );
};

export default SkillCard;
