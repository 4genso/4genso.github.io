import React from "react";

function ProjectCard({ projectName, techStack, projectInfo, children }) {
  return (
    <div className="m-8 p-8 border border-white rounded-xl flex flex-col items-center justify-center w-full hover:bg-gray-800">
      <div className="m-3">
        <h2 className="text-2xl">{projectName}</h2>
        <p className="text-gray-400 text-sm">
          <i>{techStack}</i>
        </p>
      </div>
      <article className="m-2 text-left text-base">{projectInfo}</article>
      <p className="text-gray-300">
        <i>see more here:</i>
      </p>
      {children}
    </div>
  );
}

export default ProjectCard;
