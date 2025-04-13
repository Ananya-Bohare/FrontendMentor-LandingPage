import heroImage from '../assets/hero2.png';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between p-8 max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="max-w-md mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl  text-blue-800 leading-tight">
          Improve your front-end coding skills by building real projects
          {/* Zigzag Underline */}
      <svg
        className="absolute hidden md:block top-[23%] left-[2%] w-40 h-2"
        viewBox="0 0 180 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M0 10 L5 0 L10 10 L15 0 L20 10 L25 0 L30 10 L35 0 L40 10 L45 0 L50 10 L55 0 L60 10 L65 0 L70 10 L75 0 L80 10 L85 0 L90 10 L95 0 L100 10 L105 0 L110 10 L115 0 L120 10 L125 0 L130 10 L135 0 L140 10 L145 0 L150 10 L155 0 L160 10 L165 0 L170 10 L175 0 L180 10 L185 0 L190 10 L195 0 L200 10 L205 0 L210 10 L215 0 L220 10 L225 0 L230 10 L235 0 L240 10 L245 0 L250 10 L255 0 L260 10 L265 0 L270 10 L275 0 L280 10 L285 0 L290 10 L295 0 L300 10 L305 0 L310 10 L315 0 L320 10 L325 0 L330 10 L335 0 L340 10 L345 0 L350 10 L355 0 L360 10 L365 0 L370 10 L375 0 L380 10 L385 0 L390 10 L395 0 L400 10"
            stroke="#4DB6AC"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      
        </h1>
        <div className="w-full md:text-left">
        <p className="text-md md:text-md text-gray-700 mt-4 leading-[1.8]">
          Solve real-world HTML, CSS, and JavaScript challenges whilst working
          to professional designs. Join over 12,000 developers building
          projects, reviewing code, and helping each other get better.
        </p>

        {/* Login Button */}
        <button className="mt-6 flex items-center justify-center bg-red-600 text-white font-semibold py-2 px-8 rounded-full hover:bg-red-800 transition duration-300">
          Login with GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.24c-3.34.73-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.08 1.83 2.83 1.3 3.52 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.23-3.2-.12-.3-.53-1.5.12-3.16 0 0 1-.32 3.28 1.23a11.43 11.43 0 015.96 0c2.3-1.54 3.28-1.23 3.28-1.23.65 1.66.24 2.86.12 3.16.76.84 1.23 1.9 1.23 3.2 0 4.6-2.82 5.6-5.5 5.9.44.38.8 1.1.8 2.22v3.3c0 .32.22.7.82.58A12 12 0 0012 0z" />
          </svg>
        </button>
      </div>
      </div>

      {/* Circle - Half inside, half outside */}
      <svg
  className="
    absolute hidden md:block
    bottom-[-4.9%] right-[-2%] w-28 h-28
    text-slate-200
  "
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" />
</svg>
{/* straight line*/}
<svg
  className="
    absolute 
    top-[-4%] right-[8%] 
    w-[4px] h-16 sm:w-[6px] sm:h-20 md:w-[6px] md:h-24 
    text-slate-200
    block
  "
  viewBox="0 0 4 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line x1="1" y1="1" x2="1" y2="100" stroke="currentColor" strokeWidth="12" />
</svg>


<svg
  className="
    absolute hidden md:block
    top-[-20%] right-[-12%] w-80 h-[30vh] 
   text-teal-400
  "
  viewBox="0 0 60 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M2 100 Q20 10, 80 50"
    stroke="currentColor"
    strokeWidth="1"
    fill="none"
  />
</svg>

<svg
  className="
    absolute hidden md:block
    top-[-6%] right-[33%] w-30 h-16 
    text-red-300
  "
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M25 50 V5 H40"
    stroke="currentColor"
    strokeWidth="4"
    fill="none"
  />
</svg>
{/* 2 equal lines*/}
<svg
  className="
    absolute hidden md:block 
    top-[40%] w-20 h-40 right-[-12%]
    text-slate-200 justify-end"
  viewBox="0 0 40 70"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <line x1="20" y1="30" x2="40" y2="30"
    stroke="currentColor"
    strokeWidth="2"
  />
  <line x1="20" y1="40" x2="40" y2="40"
    stroke="currentColor"
    strokeWidth="2"
  />
</svg>

{/* grid of blue dots*/}
<svg
  className="absolute hidden md:block 
   top-[50%] right-[39%] w-10 h-40] text-teal-500"
  viewBox="0 0 70 120"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
 {/* row1*/}
  <circle cx="10" cy="10" r="7" fill="currentColor" />
  <circle cx="30" cy="10" r="7" fill="currentColor" />
  <circle cx="50" cy="10" r="7" fill="currentColor" />

 {/* row2*/}
  <circle cx="10" cy="30" r="7" fill="currentColor" />
  <circle cx="30" cy="30" r="7" fill="currentColor" />
  <circle cx="50" cy="30" r="7" fill="currentColor" />

  {/* row3*/}
  <circle cx="10" cy="50" r="7" fill="currentColor" />
  <circle cx="30" cy="50" r="7" fill="currentColor" />
  <circle cx="50" cy="50" r="7" fill="currentColor" />

  {/* row4*/}
  <circle cx="10" cy="70" r="7" fill="currentColor" />
  <circle cx="30" cy="70" r="7" fill="currentColor" />
  <circle cx="50" cy="70" r="7" fill="currentColor" />

  {/* row5*/}
  <circle cx="10" cy="90" r="7" fill="currentColor" />
  <circle cx="30" cy="90" r="7" fill="currentColor" />
  <circle cx="50" cy="90" r="7" fill="currentColor" />

 {/* row6*/}
  <circle cx="10" cy="110" r="7" fill="currentColor" />
  <circle cx="30" cy="110" r="7" fill="currentColor" />
  <circle cx="50" cy="110" r="7" fill="currentColor" />
</svg>

{/* two small curved lines*/}
<svg
  className="w-10 h-40 absolute hidden md:block top-[13%] left-[34.4%] text-teal-500"
  viewBox="0 0 40 40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* line1*/}
  <path
    d="M6 25 Q9 4, 27 5"
    stroke="currentColor"
    strokeWidth="3"
    fill="none"
  />
  
  {/* line2*/}
  <path
    d="M15 26 Q12 13, 30 10"
    stroke="currentColor"
    strokeWidth="3"
    fill="none"
  />
</svg>

{/* triple curly brace pattern*/}
  <svg
    className="absolute hidden md:block 
     top-[40%] left-[28%] w-40 h-80 text-slate-200"
    viewBox="0 0 120 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
      {/* Curly Brace 1 */}
        <path
          d="M10 10c-5 0 -5 5 -5 5v15s0 5-5 5c5 0 5 5 5 5v15s0 5 5 5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M24 10c-5 0 -5 5 -5 5v15s0 5-5 5c5 0 5 5 5 5v15s0 5 5 5"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M38 10c-5 0 -5 5 -5 5v15s0 5-5 5c5 0 5 5 5 5v15s0 5 5 5"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      {/* arrow*/}
      <svg
        className="absolute hidden md:block 
         top-[91%] left-[47%] w-20 h-20 "
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 30 L60 50 L30 70"
          fill="none"
          stroke="#F7B6B6"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>



      {/* Image Section */}
      <div className="w-full md:w-1/2 flex-shrink-0 flex justify-center md:justify-end mt-8 md:mt-0">
    <img
      src={heroImage}
      alt="Hero Image"
      className="w-[300px] md:w-[450px] h-auto object-cover md:top-50 md:right-30 absolute md:relative"
    />
  </div>
    </div>

    
  );
};

export default Hero;



