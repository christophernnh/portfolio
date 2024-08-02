"use client";
import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";

const JakartaClock = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-row">
      <div className="text-gray-400">
        <Clock format={"LTS"} ticking={true} timezone={"Asia/Jakarta"} />
      </div>&nbsp;Jakarta — Indonesia
    </div>
  );
};

export default JakartaClock;
