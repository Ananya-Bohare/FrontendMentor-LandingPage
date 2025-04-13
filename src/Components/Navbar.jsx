import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../Constants";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-4 bg-white border-b border-neutral-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left Section: Logo and Brand Name */}
        <div className="flex items-center">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-lg font-semibold flex items-center relative">
            Frontend Mentor
            {/* Zigzag underline */}
        <svg
          className="absolute bottom-[-4px] left-[0%] w-20 h-2"
          viewBox="0 0 100 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10 L5 0 L10 10 L15 0 L20 10 L25 0 L30 10 L35 0 L40 10 L45 0 L50 10 L55 0 L60 10 L65 0 L70 10 L75 0 L80 10 L85 0 L90 10 L95 0 L100 10 L105 0 L110 10 L115 0 L120 10 L125 0 L130 10 L135 0 L140 10 L145 0 L150 10 L155 0 L160 10 L165 0 L170 10 L175 0 L180 10 L185 0 L190 10 L195 0 L200 10 L205 0 L210 10 L215 0 L220 10 L225 0 L230 10 L235 0 L240 10 L245 0 L250 10 L255 0 L260 10 L265 0 L270 10 L275 0 L280 10 L285 0 L290 10 L295 0 L300 10 L305 0 L310 10 L315 0 L320 10 L325 0 L330 10 L335 0 L340 10 L345 0 L350 10 L355 0 L360 10 L365 0 L370 10 L375 0 L380 10 L385 0 L390 10 L395 0 L400 10"
            stroke="#F8B7B7"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        
            <span
          className="bg-blue-700 text-white text-[8px] font-bold px-1 py-0.5 rounded-none absolute top-[-6px] right-[-15px] transform rotate-[20deg] leading-none"
          style={{ whiteSpace: "nowrap" }}>
           BETA
           </span>
           
          </span>
          
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="bg-white hidden lg:flex ml-auto space-x-12 text-sm font-bold italic">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-black hover:text-gray-700 transition-all"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: Login with GitHub Button */}
        <div className="hidden lg:flex ml-9">
          <a
            href="#"
            className="flex items-center bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all"
          >
            Login with GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.24c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.08 1.83 2.83 1.3 3.52 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.16 0 0 1-.32 3.28 1.23a11.43 11.43 0 015.96 0c2.3-1.54 3.28-1.23 3.28-1.23.65 1.66.24 2.86.12 3.16.76.84 1.23 1.9 1.23 3.2 0 4.6-2.82 5.6-5.5 5.9.44.38.8 1.1.8 2.22v3.3c0 .32.22.7.82.58A12 12 0 0012 0z" />
            </svg>
          </a>
        </div>
        <div className="lg:hidden md:flex flex-row justify-end">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
      </div>

      
    

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="bg-neutral-300 fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden font-bold italic">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <a
              href="#"
              className="flex items-center bg-black text-white py-2 px-8 rounded-full hover:bg-gray-800 transition-all"
            >
              Login with GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.24c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.08 1.83 2.83 1.3 3.52 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.16 0 0 1-.32 3.28 1.23a11.43 11.43 0 015.96 0c2.3-1.54 3.28-1.23 3.28-1.23.65 1.66.24 2.86.12 3.16.76.84 1.23 1.9 1.23 3.2 0 4.6-2.82 5.6-5.5 5.9.44.38.8 1.1.8 2.22v3.3c0 .32.22.7.82.58A12 12 0 0012 0z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
