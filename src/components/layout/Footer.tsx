import React from 'react';
import { Github, Twitter, Linkedin, Mail, Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-primary/10 py-12">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold gradient-text">AI Growth Creators</h3>
            </div>
            <p className="text-secondary/70">
              Empowering professionals with cutting-edge AI solutions. Building the future of intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/aigrowthcreators" target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/aigrowthcreators" target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/aigrowthcreators" target="_blank" rel="noopener noreferrer" className="text-secondary/70 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@aigrowthcreators.com" className="text-secondary/70 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Products</h4>
            <ul className="space-y-2 text-secondary/70">
              <li className="hover:text-primary cursor-pointer">Ultimate AI Assistant</li>
              <li className="hover:text-primary cursor-pointer">AI Code Generator</li>
              <li className="hover:text-primary cursor-pointer">Content Creator</li>
              <li className="hover:text-primary cursor-pointer">Analytics Suite</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Resources</h4>
            <ul className="space-y-2 text-secondary/70">
              <li className="hover:text-primary cursor-pointer">Documentation</li>
              <li className="hover:text-primary cursor-pointer">API Reference</li>
              <li className="hover:text-primary cursor-pointer">Community</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Company</h4>
            <ul className="space-y-2 text-secondary/70">
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Press Kit</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary/70 text-sm">
              © {new Date().getFullYear()} AI Growth Creators. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary/70 hover:text-primary text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary/70 hover:text-primary text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-secondary/70 hover:text-primary text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};