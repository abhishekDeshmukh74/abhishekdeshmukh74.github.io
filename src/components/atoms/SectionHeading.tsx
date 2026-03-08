import React from "react";

interface SectionHeadingProps {
  title: string;
  headingClassName?: string;
  hrClassName?: string;
}

const SectionHeading = ({
  title,
  headingClassName = "",
  hrClassName = "",
}: SectionHeadingProps) => {
  return (
    <>
      <h2
        className={`text-5xl md:text-6xl font-extrabold tracking-wide text-center ${headingClassName}`}
      >
        <span className="text-white/30 font-light">&lt;</span>
        <span className="text-[#00f050]"> {title} </span>
        <span className="text-white/30 font-light">/&gt;</span>
      </h2>
      <hr
        className={`border-[#00f050] border-t-2 w-24 my-6 mx-auto ${hrClassName}`}
      />
    </>
  );
};

export default SectionHeading;
