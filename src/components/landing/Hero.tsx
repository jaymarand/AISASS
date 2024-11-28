import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 max-w-8xl"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Brilliant{' '}
            <span className="gradient-text">AI Partner</span>
            {' '}for Everything
          </h1>
          <p className="text-xl text-secondary/70 mb-8">
            Get instant help with{' '}
            <TypeAnimation
              sequence={[
                'writing',
                2000,
                'analysis',
                2000,
                'coding',
                2000,
                'creative work',
                2000,
              ]}
              repeat={Infinity}
              className="text-accent"
            />
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => navigate('/auth')}
              className="btn-primary flex items-center gap-2 text-lg"
            >
              Try Ultimate AI Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-secondary/60">
              <Users className="w-5 h-5" />
              <span>10,000+ professionals already using</span>
            </div>
          </div>
        </div>

        <div className="relative mt-16 bg-dark-200 rounded-xl p-6 border border-primary/10">
          <div className="absolute -top-4 left-4 bg-dark-100 px-4 py-1 rounded-full text-sm text-secondary/60">
            Live Demo
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary">You</span>
              </div>
              <div className="flex-1">
                <p className="text-secondary/80">Can you help me write a blog post about AI trends?</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent">AI</span>
              </div>
              <div className="flex-1">
                <TypeAnimation
                  sequence={[
                    "I'd be happy to help you write a blog post about AI trends. Let's start by outlining the key topics we should cover...",
                  ]}
                  speed={70}
                  className="text-secondary/80"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};