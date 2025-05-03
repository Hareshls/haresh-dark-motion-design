
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('opacity-100');
        titleRef.current.classList.remove('translate-y-8');
      }
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('opacity-100');
          subtitleRef.current.classList.remove('translate-y-8');
        }
        
        setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.classList.add('opacity-100');
            imageRef.current.classList.remove('translate-y-8', 'scale-95');
          }
          
          setTimeout(() => {
            if (ctaRef.current) {
              ctaRef.current.classList.add('opacity-100');
              ctaRef.current.classList.remove('translate-y-8');
            }
          }, 300);
        }, 300);
      }, 300);
    }, 300);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-4 opacity-0 translate-y-8 transition-all duration-700"
          >
            <span className="text-gradient">Haresh L S</span>
          </h1>
          
          <h2 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-6 opacity-0 translate-y-8 transition-all duration-700 delay-300"
          >
            UI/UX & Graphic Designer
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-md">
            Crafting digital experiences that blend aesthetics with functionality. 
            Transforming ideas into visually stunning designs that engage and inspire.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex space-x-4 opacity-0 translate-y-8 transition-all duration-700 delay-700"
          >
            <button 
              className="px-6 py-3 bg-accent-cyan text-black font-medium rounded-full hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in touch
            </button>
            <button 
              className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/5 transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View projects
            </button>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="order-1 md:order-2 text-center opacity-0 translate-y-8 scale-95 transition-all duration-700 delay-500"
        >
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-cyan/20 p-1 animate-float">
              {/* Replace with Haresh's actual image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-pink/30 flex items-center justify-center text-3xl text-white">
                HL
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent-cyan/20 animate-pulse-glow"></div>
            <div className="absolute -bottom-2 -left-6 w-16 h-16 rounded-full bg-accent-pink/20 animate-float"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-gray-400 mb-2">Scroll</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
