import React from "react";
import Particles from "../reacthome/Particles/Particles";
import SplashCursor from '../reactbits1/SplashCursor/SplashCursor';

const Skill = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl font-extrabold mb-4 drop-shadow-lg">
          About Me
        </h1>
        <p className="text-white text-lg max-w-2xl drop-shadow">
          I am a passionate full-stack developer with a love for creating beautiful and functional web experiences. Welcome to my portfolio!
        </p>
      </div>

      {/* Cursor component (keep it inside relative if needed) */}
      <div className="absolute inset-0 z-20">
        <SplashCursor />
      </div>
    </div>
  );
};

export default Skill;
