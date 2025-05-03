
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('reveal-active');
            }
            
            setTimeout(() => {
              if (contentRef.current) {
                contentRef.current.classList.add('reveal-active');
              }
            }, 300);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      className="section-padding bg-dark-card"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold mb-12 text-center reveal-on-scroll"
        >
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div 
          ref={contentRef}
          className="grid md:grid-cols-2 gap-10 items-center reveal-on-scroll"
        >
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <p className="text-gray-300 mb-4">
              Hello! I'm Haresh L S, a passionate UI/UX and Graphic Designer dedicated to creating visually engaging and intuitive digital experiences.
            </p>
            <p className="text-gray-300 mb-4">
              With a keen eye for aesthetics and a user-centered approach, I transform complex ideas into elegant, functional designs that captivate users and drive business goals.
            </p>
            <p className="text-gray-300">
              I believe that great design is about solving problems and telling stories. Every project is an opportunity to create something meaningful that connects with people on a deeper level.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="glass-card p-6 rounded-xl border-l-4 border-accent-cyan">
              <h3 className="text-xl font-semibold mb-2">My Design Philosophy</h3>
              <p className="text-gray-400">Design should be both beautiful and functional, creating experiences that delight users while solving real problems.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-l-4 border-accent-pink">
              <h3 className="text-xl font-semibold mb-2">My Approach</h3>
              <p className="text-gray-400">I combine research, creativity, and technical knowledge to deliver designs that are innovative, user-friendly, and visually striking.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-l-4 border-accent-cyan">
              <h3 className="text-xl font-semibold mb-2">My Goal</h3>
              <p className="text-gray-400">To create digital experiences that leave a lasting impression and help brands connect with their audience in meaningful ways.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
