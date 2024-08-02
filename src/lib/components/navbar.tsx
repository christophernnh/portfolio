"use client";
import { CSSProperties, useEffect, useState } from "react";
import JakartaClock from "./jakartaclock";
import { GoCopy } from "react-icons/go";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
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
    transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText("hchrisnath@gmail.com")
      .then(() => {
        console.log("Email copied to clipboard!");
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
      className="fixed flex flex-row min-w-full px-40 py-16 justify-between items-center text-lg"
    >
      <section className="font-bold w-1/3">CHRISTOPHER NATHAN</section>
      <section className="w-1/3 flex justify-center">
        <JakartaClock />
      </section>
      <section className="w-1/3 flex justify-end">
        <button
          onClick={handleCopy}
          className="text-sm bg-zinc-800 px-8 py-2 rounded-full flex items-center hover:bg-zinc-700"
        >
          hchrisnath@gmail.com &nbsp; <GoCopy />
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
