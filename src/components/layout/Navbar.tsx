
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, User, Bell } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold">P</span>
          </div>
          <span className="text-xl font-bold text-primary">PeerLearn</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'nav-link-active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/chat" className={`nav-link ${isActive('/chat') ? 'nav-link-active' : ''}`}>
            Chat
          </Link>
          <Link to="/sessions" className={`nav-link ${isActive('/sessions') ? 'nav-link-active' : ''}`}>
            Sessions
          </Link>
          <Link to="/notes" className={`nav-link ${isActive('/notes') ? 'nav-link-active' : ''}`}>
            Notes
          </Link>
          <Link to="/quizzes" className={`nav-link ${isActive('/quizzes') ? 'nav-link-active' : ''}`}>
            Quizzes
          </Link>
          <Link to="/groups" className={`nav-link ${isActive('/groups') ? 'nav-link-active' : ''}`}>
            Study Groups
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <User size={20} className="text-gray-600" />
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <LogOut size={20} className="text-gray-600" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
