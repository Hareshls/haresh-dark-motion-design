
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Finance App Redesign',
    category: 'UI/UX Design',
    description: 'A modern finance application with intuitive user interface and seamless experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    link: '#'
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'Web Design',
    description: 'A fully responsive e-commerce platform with elegant visual design and smooth navigation.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    link: '#'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Graphic Design',
    description: 'Complete brand identity system including logo, color palette, typography, and guidelines.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Series of visually consistent social media assets that increased engagement by 40%.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    link: '#'
  },
];

const categories = ['All', 'UI/UX Design', 'Web Design', 'Graphic Design', 'Digital Marketing'];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,229,255,0.3)] hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <a 
          href={project.link}
          className="inline-flex items-center text-accent-cyan hover:text-white transition-colors"
        >
          View Project 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
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
      id="projects" 
      className="section-padding bg-dark-card"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold mb-12 text-center reveal-on-scroll"
        >
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full transition-all',
                activeCategory === category 
                  ? 'bg-accent-cyan text-black font-medium' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
