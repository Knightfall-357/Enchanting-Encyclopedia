import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const EnchantmentCard = ({ enchantment }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'melee-weapon': return 'bg-red-900/50 text-red-200 border-red-600';
      case 'ranged-weapon': return 'bg-orange-900/50 text-orange-200 border-orange-600';
      case 'tool': return 'bg-blue-900/50 text-blue-200 border-blue-600';
      case 'armor': return 'bg-rose-900/50 text-rose-200 border-rose-600';
      case 'helmet': return 'bg-indigo-900/50 text-indigo-200 border-indigo-600';
      case 'boots': return 'bg-cyan-900/50 text-cyan-200 border-cyan-600';
      case 'leggings': return 'bg-teal-900/50 text-teal-200 border-teal-600';
      case 'universal': return 'bg-yellow-900/50 text-yellow-200 border-yellow-600';
      case 'curse': return 'bg-gray-900/50 text-gray-200 border-gray-600';
      default: return 'bg-gray-900/50 text-gray-200 border-gray-600';
    }
  };

  return (
    <Link to={`/enchantment/${enchantment.id}`} className="group block">
      <Card className="h-full bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 border-4 border-amber-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/30 to-amber-300/50 opacity-50"></div>
        
        {/* Particle effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: '2s'
              }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
          ))}
        </div>

        <CardHeader className="relative z-10 pb-3">
          <div className="flex items-center space-x-3 mb-2">
            <div className="bg-purple-800 p-2 rounded-full border-2 border-purple-600">
              <BookOpen className="w-5 h-5 text-purple-200" />
            </div>
            <Badge className={`${getCategoryColor(enchantment.category)} border-2 text-xs font-bold`}>
              {enchantment.category.toUpperCase()}
            </Badge>
          </div>
          
          <CardTitle className="text-xl font-bold text-purple-900 group-hover:text-purple-700 transition-colors font-serif tracking-wide">
            {enchantment.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 pt-0">
          <p className="text-amber-900 mb-4 text-sm leading-relaxed font-medium">
            {enchantment.description}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-600" />
              <span className="text-xs font-bold text-purple-800">
                Max Level: {enchantment.maxLevel}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-purple-800">
                Cost: {enchantment.experienceCost}
              </span>
            </div>

            {/* Item Icons */}
            {enchantment.itemIcons && (
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-purple-800">Items:</span>
                <div className="flex space-x-1">
                  {enchantment.itemIcons.map((icon, index) => (
                    <span key={index} className="text-lg" title={enchantment.applicableItems[index]}>
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Book binding effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-800 via-amber-900 to-amber-800"></div>
          <div className="absolute left-1 top-0 bottom-0 w-px bg-amber-700"></div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EnchantmentCard;