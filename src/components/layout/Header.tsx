import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Header = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  return (
    <header className="bg-cyber-darker border-b border-cyber-teal/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyber-dark rounded border border-cyber-teal/20">
            <Terminal className="h-6 w-6 text-cyber-teal" />
          </div>
          <span className="text-xl font-bold text-cyber-teal font-mono">Access Terminal</span>
        </div>
        <button
          onClick={handleSignOut}
          className="cyber-button"
        >
          <LogOut className="h-5 w-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};