import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Zap, Calculator, Home } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Enchanting Table', icon: Home },
    { path: '/combinations', label: 'Combinations', icon: Zap },
    { path: '/calculator', label: 'XP Calculator', icon: Calculator }
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-sm border-2 border-purple-600 rounded-full px-6 py-3 shadow-2xl">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  className={`${
                    isActive
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-transparent text-purple-200 hover:bg-purple-700 hover:text-white'
                  } font-bold transition-all duration-300 transform hover:scale-105`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;