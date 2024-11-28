import React, { useState, useEffect } from 'react';
import { Mail, Lock, Github, Globe, X } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, signUp, error, clearError } = useAuthStore();

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (error) {
      // Error is handled by the store
    }
  };

  return (
    <div className="min-h-screen bg-dark-300 text-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 bg-dark-200 p-8 rounded-lg border border-primary/20 shadow-cyber relative">
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-4 right-4 text-secondary/50 hover:text-secondary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="inline-block p-3 bg-dark-100 rounded-lg border border-primary/20 shadow-cyber-sm">
            <div className="h-12 w-12 bg-dark-200 rounded transform rotate-45 border border-primary/30 flex items-center justify-center">
              <div className="transform -rotate-45">
                <Lock className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold font-mono gradient-text">
            Access Terminal
          </h1>
          <p className="text-secondary/70">Initialize authentication sequence</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="flex border-b border-primary/20">
          <button
            className={`flex-1 pb-2 font-mono ${
              isLogin
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary/50'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>
          <button
            className={`flex-1 pb-2 font-mono ${
              !isLogin
                ? 'text-primary border-b-2 border-primary'
                : 'text-secondary/50'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="text-sm text-secondary/70">Email</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="cyber-input pr-10"
                placeholder="NAME@EXAMPLE.COM"
              />
              <Mail className="absolute right-3 top-3 h-5 w-5 text-secondary/50" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-secondary/70">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="cyber-input pr-10"
                placeholder="......"
              />
              <Lock className="absolute right-3 top-3 h-5 w-5 text-secondary/50" />
            </div>
          </div>

          <button type="submit" className="cyber-button-primary w-full">
            <span>INITIALIZE {isLogin ? 'LOGIN' : 'REGISTRATION'}</span>
            <span className="ml-2">→</span>
          </button>
        </form>

        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-dark-200 text-secondary/70">
                External Access Points
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="cyber-button">
              <Github className="h-5 w-5" />
              <span>GITHUB</span>
            </button>
            <button className="cyber-button">
              <Globe className="h-5 w-5" />
              <span>GOOGLE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};