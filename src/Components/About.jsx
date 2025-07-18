import React from "react";
import Hyperspeed from "../reactbits/Hyperspeed/Hyperspeed";
import { hyperspeedPresets } from "../reactbits/Hyperspeed/HyperSpeedPresets";
import SplashCursor from '../reactbits1/SplashCursor/SplashCursor';

const About = () => {
  return (
    <div id="about" className="relative h-screen w-full overflow-hidden bg-black">
    
      <Hyperspeed effectOptions={hyperspeedPresets.four} />

     
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
          About Me
        </h1>
        <p className="text-white text-lg max-w-2xl drop-shadow">
          I am a passionate full-stack developer with a love for creating beautiful and functional web experiences. Welcome to my portfolio!
        </p>
      </div>
      <SplashCursor />
    </div>
  );
};

export default About;
