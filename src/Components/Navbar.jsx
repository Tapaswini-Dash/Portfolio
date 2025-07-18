import React from "react";
import GradientText from '../reacttext/GradientText/GradientText';
import {Link , useLocation , useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate ();

    const isActive = (path) => location.pathname ===path;
    return (
        <nav className ="shadow-lg h-16 bg-white/10 fixed top-0 left-0 w-full -md z-50

 text-black px-8">
        <div className ="flex justify-between items-center">
 <h1 className="text-3xl font-playfair italicbg-white shadow-md bg-transparent

 text-cyan-900 tracking-wide hover:text-pink-300 transition duration-300 
 playball-regular  
  ">
      
<GradientText
  colors={["#B026FF", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
   Tapaswini Dash
</GradientText>
 
</h1>

                <ul className="flex gap-6  hover:text-purple-500 transition-300 ">
                    <li className={`rounded-bl-sm px-4 py-2 bg-white/10 transition-all duration-300 shadow-lg ${
              isActive("/") 
                ? "text-[#FFD700] font-semibold shadow-amber-200" 
                : "text-black hover:text-blue-700"
            }`} >
                        
                        <Link to="/"
                       
        
                        >
                        Home
                        </Link>
                
                    </li>
                    <li className={`rounded-bl-sm px-4 py-2 bg-white/10 transition-all duration-300 shadow-lg ${
              isActive("/about") 
                ? "text-[#FFD700] font-semibold shadow-amber-200" 
                : "text-black hover:text-blue-700"
            }`}>
                        <Link to="/about"
                      
        
                        >About</Link>
                    </li>
                    <li className={`rounded-bl-sm px-4 py-2 bg-white/10 transition-all duration-300 shadow-lg ${
              isActive("/skill") 
                ? "text-[#FFD700]  font-semibold shadow-amber-200" 
                : "text-black hover:text-blue-700"
            }`}>
                        <Link to="/skill"
                     
        
                        >Skill</Link>
                    </li>
                    <li className={`rounded-bl-sm px-4 py-2 bg-white/10 transition-all duration-300 shadow-lg ${
              isActive("/work") 
                ? "text-[#FFD700] font-semibold shadow-amber-200" 
                : "text-black hover:text-blue-700"
            }`}>
                        <Link to="/work"
                     
        
                        >Project</Link>
                    </li>
                   
                </ul>
                <button 
                className="px-4 py-2 rounded border-none cursor-pointer bg-green-500 text-white"
                onClick={() => navigate("/contact")}>
                    Contact       
                      </button>
        </div>
        </nav>

    );

};

export default Navbar;