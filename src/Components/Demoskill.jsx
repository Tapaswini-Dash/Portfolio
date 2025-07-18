import React from "react";
import {Link} from "react-router-dom";

 const Demoskill = () => {
    return (
    <section className ="bg-gradient-to-b from-[#302b63] to-[#b87bd8]

  text-medium  w-full   ">
        <div className="max-w-6xl mx-auto flex flex-col ">
        <div className=" flex justify-end md:justify-end pr-5 px-4 md:px-16 w-full
        ">
        <h1 className="font-lg font-bold text-3xl  inline-block mb-2 -tracking-normal mt-12 leading-tight rounded-bl-full shadow-lg shadow-amber-900 px-4 bg-amber-100 ">
            Tech Stack And Skills
        </h1>
        </div>


        <div className="grid grid-cols-12 gap-4 items-center mx-auto max-w-4xl bg-transparent shadow-md shadow-blue-200 p-6 text-right ml-110 mt-5   ">
            <div className="col-span-1 bg-gradient-to-b from-red-500 to-orange-600 via--400 h-full rounded-xl"></div>
<div className="text-shadow-emerald-950 col-span-11 leading-relaxed">
            Fueled by curiosity and creativity, I’m evolving every day as a developer. From mastering core coding principles to exploring full-stack tools, I aim to grow not just technically—but also in communication, teamwork, and creative problem-solving.
</div>

</div>
<div classNme="flex justify-center">
       <Link to="/Skill">
        <button className ="rounded-full bg-amber-600 mt-7 mb-10 px-6 py-1 mx-auto text-white shadow-amber-50 hover:bg-rose-300 transition-colors duration-300">
            Track My Skills →
        </button>
        </Link>
        </div>
       
       </div>
    
    </section>

 );
 };

 export default Demoskill;
 