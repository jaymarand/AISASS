import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, ArrowRight } from 'lucide-react';
import { Hero } from './Hero';
import { Features } from './Features';
import { SocialProof } from './SocialProof';
import { Pricing } from './Pricing';
import { Footer } from '../layout/Footer';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark-300 flex flex-col">
      <header className="border-b border-primary/10 bg-dark-200/50 backdrop-blur-lg fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 max-w-8xl flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Terminal className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold gradient-text">Ultimate AI</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/auth')}
              className="btn-outline"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="btn-primary flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Hero />
        <Features />
        <SocialProof />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
};