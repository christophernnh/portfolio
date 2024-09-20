"use client";
import Navbar from "@/lib/components/navbar";
import "./globals.css";
import { HiOutlineDownload } from "react-icons/hi";

import { TbBrandGithub } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

import TypeWriterHeader from "@/lib/components/typewriterheader";
import DiscordCard from "@/lib/components/discordcard";
import ProjectCard from "@/lib/components/projectcard";
import { Project } from "@/lib/types/project";

import projectjson from "../lib/assets/jsons/projects.json";

export default function Home() {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/christopher-hendris/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/christophernnh", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/christophernnh/", "_blank");
  };

  return (
    <main className="flex flex-col">
      <section className="flex flex-col mt-36 items-start border-b pb-6 mb-8 border-neutral-600">
        <div className="flex flex-row w-full">
          {/* profile left side */}

          <div className="md:w-1/2 md:pr-4">
            <div className="min-h-14 md:text-4xl text-6xl pb-4 pt-20 md:pt-0 font-medium">
              <TypeWriterHeader />
            </div>
            <div className="text-2xl md:text-lg md:pb-6 pb-40 flex flex-row flex-wrap">
              <span className="text-gray-400">I love bringing</span>&nbsp;
              <span className="text-white">visionary</span>&nbsp;
              <span className="text-gray-400">ideas to life through</span>&nbsp;
              <span className="text-white">code.</span>
            </div>

            <a
              href="/files/Christopher Nathan CV Sept 2024.pdf"
              download
              className="flex md:w-5/6 w-1/2 justify-center items-center py-3 rounded-md bg-white text-black font-bold hover:bg-slate-200"
            >
              Download Resume &nbsp; <HiOutlineDownload />
            </a>
            <div className="flex flex-row mt-6 md:text-lg">
              <button
                onClick={handleLinkedInClick}
                className="flex flex-row items-center mr-3 hover:text-neutral-300"
              >
                <LuLinkedin /> &nbsp; LinkedIn
              </button>
              <div>—</div>
              <button
                onClick={handleGitHubClick}
                className="flex flex-row items-center mx-3 hover:text-neutral-300"
              >
                <TbBrandGithub /> &nbsp; GitHub
              </button>
              <div>—</div>
              <button
                onClick={handleInstagramClick}
                className="flex flex-row items-center ml-3 hover:text-neutral-300"
              >
                <FaInstagram /> &nbsp; Instagram
              </button>
            </div>
          </div>
          {/* discord profile section */}
          <div className="md:flex hidden w-1/2 pl-4  justify-end">
            <DiscordCard />
          </div>
        </div>
      </section>
      {/* content section */}
      <section className="flex flex-col min-h-screen items-start">
        <div className="text-3xl pb-10 font-medium flex flex-row">
          <div className="text-gray-400">My Projects</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {projectjson.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
