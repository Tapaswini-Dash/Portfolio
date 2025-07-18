import React from "react";
import profileImg from "../assets/sneha.png.jpg";
import BackgroundImg from "../assets/p-25.jpeg";
import Briefabout from "./Briefabout.jsx";
import Demoskill from "./Demoskill.jsx";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../reacthome/Particles/Particles"
const Home = () => {
  return (
    <>
      
      <div
        className="relative min-h-screen bg-black  bg-fixed bg-repeat bg-center flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10 md:gap-20 agbalumo-regular"
      
      >
             <div className="absolute inset-0 z-0" >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={250}
          particleSpread={12}
          speed={0.2}
          particleBaseSize={72}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
        <div className="absolute bg-white/60 z-0"></div>

        <div className=" p-6 sm:p-8 text-center md:text-left z-10">
          <p className="text-base text-gray-500 mb-1 tracking-wider uppercase">
            👋 Hello, I'm
          </p>

          <div className="text-3xl sm:text-4xl md:text-5xl font-bold jacques-francois-shadow-regular flex items-center flex-wrap">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-900 via-purple-700 to-blue-900">
              <Typewriter
                words={["Tapaswini Dash - Aspiring Full Stack Developer"]}
                loop={true}
                cursor={false}
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
            <span className="text-indigo-500 text-4xl animate-pulse ml-2">🦋</span>
          </div>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mt-4">
            I'm a Computer Science student at GIFT, Bhubaneswar, learning to build clean and creative websites using
            <span className="text-pink-500 font-medium"> HTML</span>,
            <span className="text-blue-500 font-medium"> CSS</span>,
            <span className="text-yellow-600 font-medium"> JavaScript</span>, and
            <span className="text-purple-500 font-medium"> React</span>.
            <br /><br />
            I may still be learning, but every project helps me grow. I love turning ideas into something real — and I’m excited to continue my journey as a future full-stack web developer.
          </p>

          <button className="mt-8 px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-purple-300 transition-all duration-500 shadow-lg">
            View My Projects
          </button>
        </div>

       
        <div className="w-[180px] h-[360px] rounded-[6rem] overflow-hidden shadow-lg z-10">
          <img
            src={profileImg}
            alt="Tapaswini Dash"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

     


<div className="mask-container">
  <div className="mask-box">
    <div className="box-wrap">
   
    </div>
  </div>
</div>


      
      <Briefabout />

      
      <div className="relative w-full overflow-hidden leading-none -mt-1 z-0">
        <svg
          width="100%"
          height="100px"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#5140be"
            fillOpacity="1"
            d="M0,160L48,155C96,150,192,150,288,165.3C384,160,480,160,576,176C672,192,768,224,864,229.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      
      <Demoskill />
    </>
  );
};

export default Home;


