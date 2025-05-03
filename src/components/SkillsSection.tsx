
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'Figma',
    percentage: 95,
    color: 'from-[#FF7262] to-[#FF4D00]',
    icon: '🖌️'
  },
  {
    name: 'Photoshop',
    percentage: 90,
    color: 'from-[#31A8FF] to-[#00C8FF]',
    icon: '🎨'
  },
  {
    name: 'Illustrator',
    percentage: 85,
    color: 'from-[#FF9A00] to-[#FF7C00]',
    icon: '✏️'
  },
  {
    name: 'Canva',
    percentage: 92,
    color: 'from-[#00C4CC] to-[#00B3A0]',
    icon: '📱'
  }
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(skill.percentage);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (barRef.current) {
      observer.observe(barRef.current);
    }
    
    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [delay, skill.percentage]);
  
  return (
    <div className="mb-8" ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-xl mr-2">{skill.icon}</span>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-gray-400">{width}%</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} progress-bar-fill`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('reveal-active');
            }
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
      id="skills" 
      className="section-padding"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold mb-12 text-center reveal-on-scroll"
        >
          Software <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            
            {skills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Design Skills</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Brand Identity', 'Typography', 'Color Theory'].map((skill) => (
                  <div key={skill} className="bg-gray-800/50 rounded-lg p-3 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-accent-cyan mr-2"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Additional Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent-pink mr-2"></div>
                  <p className="text-gray-300">Responsive design for web and mobile platforms</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent-pink mr-2"></div>
                  <p className="text-gray-300">Creating cohesive visual languages and style guides</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent-pink mr-2"></div>
                  <p className="text-gray-300">User testing and incorporating feedback</p>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-accent-pink mr-2"></div>
                  <p className="text-gray-300">Collaborating with development teams</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
