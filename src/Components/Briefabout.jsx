import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/sneha.jpg";
import BackgroundImg from "../assets/p-17.jpg";

const Briefabout = () => {
  return (
    
    <section className="text-white py-16 px-8 bg-gradient-to-r from-[#131212] to-[#808]
">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        
        <div className="w-[180px] h-[360px] rounded-[6rem] overflow-hidden shadow-lg md:w-1/4">
          <img
            src={ProfileImg}
            alt="Tapaswini Dash"
            className="w-80 h-80 object-cover rounded-[60px] shadow-2xl"
          />
        </div>

      
        <div className="w-full md:w-1/2 text-left">
          <p className=" px-4 py-1 inline-block  rounded-br-full font-semibold bg-amber-50 text-black mb-2 shadow-lg transform transition-transform duration-300 shadow-blue-950 text-sm uppercase tracking-widest">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight ">
            Crafting Ideas Into <br /> Beautiful Web Interfaces
          </h2>
          <p className="text-lg leading-relaxed mb-6 tinos-regular">
            Hey there! I’m <span className="font-semibold text-white">Tapaswini Dash</span>, an aspiring web developer passionate about crafting interactive and user-friendly web interfaces. I love turning creative ideas into real-world web solutions. I’m currently growing my full-stack skills and excited to collaborate on meaningful projects.
          </p>
          <Link to="/about">
            <button className="px-6 py-2 bg-white text-pink-600 rounded-full shadow hover:bg-pink-100 transition-all duration-300">
              Know More →
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Briefabout;
