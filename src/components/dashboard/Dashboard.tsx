import React from 'react';
import { Header } from '../layout/Header';
import { Terminal, Cpu, MessageSquare, Sparkles } from 'lucide-react';

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-cyber-teal mb-8 font-mono">AI Control Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="cyber-card">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare className="h-6 w-6 text-cyber-teal" />
              <h2 className="text-xl font-semibold text-cyber-teal font-mono">Chat AI</h2>
            </div>
            <p className="text-cyber-teal/70 mb-4">
              Engage in natural conversations with our advanced AI assistant.
            </p>
            <button className="cyber-button-primary w-full">
              Start Chat
            </button>
          </div>

          <div className="cyber-card">
            <div className="flex items-center space-x-3 mb-4">
              <Cpu className="h-6 w-6 text-cyber-teal" />
              <h2 className="text-xl font-semibold text-cyber-teal font-mono">Code Assistant</h2>
            </div>
            <p className="text-cyber-teal/70 mb-4">
              Get help with coding, debugging, and technical solutions.
            </p>
            <button className="cyber-button-primary w-full">
              Start Coding
            </button>
          </div>

          <div className="cyber-card">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="h-6 w-6 text-cyber-teal" />
              <h2 className="text-xl font-semibold text-cyber-teal font-mono">Image Generation</h2>
            </div>
            <p className="text-cyber-teal/70 mb-4">
              Create unique images using advanced AI algorithms.
            </p>
            <button className="cyber-button-primary w-full">
              Generate Images
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};