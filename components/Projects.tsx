"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Project from "./Project";

export default function Projects() {
  const ref = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
