
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">Haresh L S</h3>
            <p className="text-gray-400">UI/UX & Graphic Designer</p>
          </div>
          
          <div className="flex space-x-6">
            {['instagram', 'linkedin', 'twitter', 'dribbble'].map((social) => (
              <a 
                key={social}
                href={`https://${social}.com`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-cyan transition-colors"
                aria-label={`Follow on ${social}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Haresh L S. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
