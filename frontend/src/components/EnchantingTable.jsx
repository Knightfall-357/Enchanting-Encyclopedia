import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const EnchantingTable = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-3 h-3 text-purple-400 opacity-60" />
          </div>
        ))}
      </div>

      {/* Main enchanting table */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 rounded-lg shadow-2xl p-8 border-4 border-purple-600">
        {/* Table surface */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border-2 border-gray-600 mb-6">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-4xl font-bold text-white font-serif tracking-wider">
              Enchanting Table
            </h1>
          </div>
          
          {/* Mystical runes */}
          <div className="flex justify-center space-x-8 mb-6">
            {['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ'].map((rune, index) => (
              <span
                key={index}
                className="text-3xl text-purple-300 animate-pulse font-bold"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {rune}
              </span>
            ))}
          </div>

          {/* Experience levels indicator */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-full h-4 mx-auto max-w-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
            <div className="text-center text-white text-sm font-bold pt-0.5">
              Experience Ready
            </div>
          </div>
        </div>

        {/* Floating books around the table */}
        <div className="absolute -top-4 -left-4 transform rotate-12 animate-bounce">
          <BookOpen className="w-8 h-8 text-blue-300" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="absolute -top-4 -right-4 transform -rotate-12 animate-bounce">
          <BookOpen className="w-8 h-8 text-red-300" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 rotate-6 animate-bounce">
          <BookOpen className="w-8 h-8 text-yellow-300" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </div>
  );
};

export default EnchantingTable;