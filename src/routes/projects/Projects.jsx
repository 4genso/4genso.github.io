import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import GithubIcon from "../../assets/github-mark.svg";

function Projects() {
  return (
    <>
      <main className="flex flex-col flex-1 text-center items-center justify-center p-10">
        <ProjectCard
          projectName={"B2B file transfer Web App (In Development)"}
          techStack={"TypeScript, WebRTC, PostgreSQL"}
          projectInfo={
            "Allows users to transfer files to other devices/users without worrying about file leaving a trace on the server."
          }
        >
          <div>To be Finished</div>
        </ProjectCard>

        <ProjectCard
          projectName={"Graph Algorithm Visualizer"}
          techStack={"TypeScript, React"}
          projectInfo={
            "This project was aimed to develop a pausable interactive visualizer that illustrates the evolving graph state as algorithms are executed. Users can input a custom set of nodes and edges, and select from a variety of algorithms, including DFS, BFS, Kruskal's, Prim's, and Dijkstra's."
          }
        >
          <a href="https://github.com/4genso/graph-algorithm-visualizer">
            <div>
              <img src={GithubIcon} alt="Github Link" className="h-12 m-1" />
            </div>
          </a>
        </ProjectCard>

        <ProjectCard
          projectName={"Spotify Pomodoro"}
          techStack={"TypeScript, React, Electron"}
          projectInfo={
            "A simple pomodoro app that can pause your Spotify music in breaks and resumes when you are focused on your work session."
          }
        >
          <a href="https://github.com/4genso/spotify-pomodoro">
            <div>
              <img src={GithubIcon} alt="Github Link" className="h-12 m-1" />
            </div>
          </a>
        </ProjectCard>
      </main>
    </>
  );
}

export default Projects;
