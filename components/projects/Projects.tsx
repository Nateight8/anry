import React from "react";
import { H2 } from "../ui/heading";
import Others from "./Others";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="">
      <div className="min-h-screen w-full flex items-center">
        <div className="w-full">
          <H2 className="mb-8">Top Projects</H2>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="h-48 bg-slate-950"></div>
            ))}
          </div>
        </div>
      </div>
      <Others />
    </div>
  );
}

export default Projects;
