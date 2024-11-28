import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthForm } from './components/auth/AuthForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { LandingPage } from './components/landing/LandingPage';
import { useAuthStore } from './store/authStore';

export function App() {
  const { user, loading, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-300 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/dashboard" /> : <AuthForm />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Router>
  );
}