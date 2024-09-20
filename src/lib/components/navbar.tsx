"use client";
import { CSSProperties, useEffect, useState } from "react";
import JakartaClock from "./jakartaclock";
import { GoCopy } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleScroll();
    }, 50);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 30) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyles: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    transition: "opacity 0.3s ease-out, visibility 0.3s ease-in-out",
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText("hchrisnath@gmail.com")
      .then(() => {
        setIsToastVisible(true);
        setTimeout(() => {
          setIsToastVisible(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <nav
      style={navbarStyles}
      className="fixed flex flex-row min-w-full md:px-40 px-4 md:py-16 py-4 justify-between md:text-lg"
    >
      <section className="font-bold w-1/3">CHRISTOPHER NATHAN</section>
      <section className="md:flex hidden w-1/3  justify-center">
        <JakartaClock />
      </section>
      <section className="flex w-1/3 justify-end">
        <button
          onClick={handleCopy}
          className="text-3xl md:text-sm md:bg-zinc-800 md:px-8 px-4 md:py-2 py-1 rounded-full flex items-center hover:bg-zinc-700"
        >
          <span className="hidden md:flex">hchrisnath@gmail.com &nbsp;</span>
          <span className="md:flex hidden"><GoCopy /></span>
          <span className="md:hidden"><MdOutlineMailOutline/></span>
        </button>
        {isToastVisible && (
          <div
            className="toast toast-bottom toast-center text-sm items-center"
            style={{
              transition: "opacity 0.4s ease-in-out",
              opacity: isToastVisible ? 1 : 0,
            }}
          >
            <div className="alert">
              <span>Email copied to clipboard.</span>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
