"use client";

import React from "react";
import { ReactTyped } from "react-typed";

const TypingEffect: React.FC = () => {
  return (
    <div className="mt-4 text-3xl font-extralight text-white">
      <ReactTyped
        strings={[
          "Olá, eu sou o Victor Guimarães 👋",
          "Sou desenvolvedor Full Stack 💻",
        ]}
        typeSpeed={50}  
        backSpeed={30}  
        backDelay={1500} 
        loop             
      />
    </div>
  );
};

export default TypingEffect;
