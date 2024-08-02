"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoLogoDiscord } from "react-icons/io5";
import { GoCopy, GoDotFill } from "react-icons/go";

const DiscordCard = () => {
  const [profile, setProfile] = useState<any>(null);
  const userId = "387205686662266880";

  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `/api/discord?userId=${userId}`
        );
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleButtonClick = async () => {
    navigator.clipboard
      .writeText("christophernathanh")
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

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <section className="font-sans cursor-pointer text-md w-6/12">
      <div className="flex flex-col justify-between gap-y-3 items-center rounded-md px-6 py-5 h-full bg-neutral-800">
        <div className="flex flex-row items-center">
          Let's Chat On Discord!&nbsp;
          <IoLogoDiscord />
        </div>
        <div className="relative w-20 h-20">
        <img
          className="w-full h-full rounded-full"
          src={
            profile.avatar
              ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
              : ""
          }
          alt="Profile"
        />
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-neutral-800 rounded-full"></div>
      </div>
        <div className="tooltip tooltip-bottom" data-tip="Copy Username" >
          <button
            onClick={handleButtonClick}
            className="text-lg flex flex-row justify-center items-center text-gray-400 hover:text-white transition-all duration-300"
          >
            {profile.username}&nbsp;
            <GoCopy />
          </button>
        </div>
        {isToastVisible && (
          <div
            className="toast toast-bottom toast-center text-sm items-center"
            style={{
              transition: "opacity 0.4s ease-in-out",
              opacity: isToastVisible ? 1 : 0,
            }}
          >
            <div className="alert">
              <span>Username copied to clipboard.</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DiscordCard;
