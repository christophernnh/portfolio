import React from "react";
import { IconType } from "react-icons";
import { FaReact, FaUnity } from "react-icons/fa";
import { SiFlask, SiPostgresql } from "react-icons/si";
import { RiNextjsLine, RiFirebaseLine } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import { Project } from "../types/project";
import Image from "next/image";

const icons: { [key: string]: IconType } = {
  FaReact: FaReact,
  SiFlask: SiFlask,
  IoLogoElectron: IoLogoElectron,
  RiNextjsLine: RiNextjsLine,
  TbBrandKotlin: TbBrandKotlin,
  RiFirebaseLine: RiFirebaseLine,
  FaUnity: FaUnity,
  SiPostgresql: SiPostgresql,
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const handleGitHubClick = () => {
    if (project.repo) {
      window.open(project.repo, "_blank");
    } else {
      alert("Repository not available");
    }
  };
  return (
    <div
      className="mb-2 group flex flex-col bg-neutral-800 rounded-sm h-96 justify-center text-5xl cursor-pointer hover:"
      onClick={handleGitHubClick}
    >
      <div className="h-1/2 flex flex-col py-4 px-4">
        <div className="text-sm">{project.type}</div>
        <div className="text-base">{project.name}</div>
        <div className="text-base h-full flex items-end space-x-2">
          {project.technologies.map((tech, index) => {
            const Icon = icons[tech];
            return Icon ? <Icon key={index} /> : null;
          })}
        </div>
      </div>
      <div className="h-3/4 w-full flex justify-center items-center overflow-hidden  ">
        <Image
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-out"
          src={project.image}
          alt={project.name}
          width={"1000"}
          height={"500"}

        />
      </div>
    </div>
  );
};

export default ProjectCard;
