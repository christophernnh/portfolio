"use client";
import Typewriter from "typewriter-effect";

const TypeWriterHeader = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(70)
          .typeString("Hi, I'm Christopher.")
          .start();
      }}
    />
  );
};

export default TypeWriterHeader;
