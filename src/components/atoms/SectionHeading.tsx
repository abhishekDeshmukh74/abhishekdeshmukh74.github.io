import React from "react";

interface SectionHeadingProps {
  title: string;
  headingClassName?: string;
  hrClassName?: string;
  showHr?: boolean;
}

const SectionHeading = ({
  title,
  headingClassName = "",
  hrClassName = "",
  showHr = true,
}: SectionHeadingProps) => {
  return (
    <>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center ${headingClassName}`}
      >
        <span className="text-white/30 font-light" aria-hidden="true">&lt;</span>
        <span className="text-[#00f050]"> {title} </span>
        <span className="text-white/30 font-light" aria-hidden="true">/&gt;</span>
      </h2>
      {showHr && (
        <hr
          className={`border-[#00f050] border-t-2 w-24 my-6 mx-auto ${hrClassName}`}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default SectionHeading;
