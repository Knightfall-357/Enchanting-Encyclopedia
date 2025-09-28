import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Star, Zap, Shield, Sword, Pickaxe, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { enchantments } from '../data/mock';

const EnchantmentDetail = () => {
  const { id } = useParams();
  const enchantment = enchantments.find(e => e.id === id);

  if (!enchantment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center">
        <Card className="bg-gradient-to-br from-amber-50 to-amber-200 border-4 border-amber-800 p-8">
          <p className="text-purple-900 text-xl font-bold">Enchantment not found!</p>
          <Link to="/">
            <Button className="mt-4 bg-purple-800 hover:bg-purple-700 text-white">
              Return to Enchanting Table
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'melee-weapon': return <Sword className="w-6 h-6" />;
      case 'ranged-weapon': return <Star className="w-6 h-6" />;
      case 'tool': return <Pickaxe className="w-6 h-6" />;
      case 'armor': return <Shield className="w-6 h-6" />;
      case 'helmet': return <Shield className="w-6 h-6" />;
      case 'boots': return <Shield className="w-6 h-6" />;
      case 'leggings': return <Shield className="w-6 h-6" />;
      case 'universal': return <BookOpen className="w-6 h-6" />;
      case 'curse': return <AlertTriangle className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-8 px-4">
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <Link to="/">
          <Button className="mb-6 bg-purple-800 hover:bg-purple-700 text-white border-2 border-purple-600 font-bold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Enchanting Table
          </Button>
        </Link>

        {/* Main enchantment book */}
        <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 border-4 border-amber-800 shadow-2xl relative overflow-hidden">
          {/* Book binding */}
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-amber-800 via-amber-900 to-amber-800 border-r-2 border-amber-700">
            <div className="absolute left-1 top-0 bottom-0 w-px bg-amber-600"></div>
            <div className="absolute left-3 top-0 bottom-0 w-px bg-amber-600"></div>
          </div>

          <CardHeader className="pl-12 pb-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className={`p-3 rounded-full border-2 ${getCategoryColor(enchantment.category)}`}>
                {getCategoryIcon(enchantment.category)}
              </div>
              <div>
                <CardTitle className="text-4xl font-bold text-purple-900 font-serif tracking-wide mb-2">
                  {enchantment.name}
                </CardTitle>
                <Badge className={`${getCategoryColor(enchantment.category)} border-2 text-sm font-bold`}>
                  {enchantment.category.toUpperCase()}
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pl-12 pr-8 pb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Description and Effects */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Description
                  </h3>
                  <p className="text-amber-900 leading-relaxed font-medium bg-amber-50/50 p-4 rounded-lg border border-amber-300">
                    {enchantment.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Effects
                  </h3>
                  <p className="text-amber-900 leading-relaxed font-medium bg-amber-50/50 p-4 rounded-lg border border-amber-300">
                    {enchantment.effects}
                  </p>
                </div>
              </div>

              {/* Stats and Requirements */}
              <div className="space-y-6">
                <div className="bg-purple-900/10 border-2 border-purple-300 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Enchantment Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-800 flex items-center">
                        <Star className="w-4 h-4 mr-2" />
                        Max Level:
                      </span>
                      <span className="text-purple-900 font-bold text-lg">{enchantment.maxLevel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-purple-800 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Experience Cost:
                      </span>
                      <span className="text-purple-900 font-bold text-sm">{enchantment.experienceCost}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/10 border-2 border-blue-300 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Requirements</h3>
                  <p className="text-amber-900 font-medium">{enchantment.requirements}</p>
                </div>

                <div className="bg-green-900/10 border-2 border-green-300 rounded-lg p-4">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">Applicable Items</h3>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {enchantment.applicableItems.map((item, index) => (
                        <Badge key={index} className="bg-green-800 text-green-200 border border-green-600 font-bold">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    {enchantment.itemIcons && (
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-bold text-purple-900">Item Icons:</span>
                        <div className="flex space-x-2">
                          {enchantment.itemIcons.map((icon, index) => (
                            <span key={index} className="text-2xl" title={enchantment.applicableItems[index]}>
                              {icon}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {enchantment.incompatible.length > 0 && (
                  <div className="bg-red-900/10 border-2 border-red-300 rounded-lg p-4">
                    <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Incompatible With
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {enchantment.incompatible.map((incomp, index) => (
                        <Badge key={index} className="bg-red-800 text-red-200 border border-red-600 font-bold">
                          {incomp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnchantmentDetail;