import React from "react";
import { SiCreatereactapp } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="flex flex-col bg-neutral-800 rounded-sm h-96 justify-center text-5xl">
      <div className="h-1/2  flex flex-col py-4 px-4">
        <div className="text-sm">Web Application</div>
        <div>Project title</div>
        <div className="text-xs h-full flex items-end">learn more</div>
      </div>
      <div className="h-1/2 w-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src="https://www.ideamotive.co/hs-fs/hubfs/10%20Irresistible%20Examples%20of%20Web%20Design%20Best%20Practices%20for%202022%20-%20Wild%20Souls.png?width=2088&name=10%20Irresistible%20Examples%20of%20Web%20Design%20Best%20Practices%20for%202022%20-%20Wild%20Souls.png"
          alt="Project"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
