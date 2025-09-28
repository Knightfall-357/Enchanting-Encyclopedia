import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Zap, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { experienceLevels } from '../data/mock';

const ExperienceCalculator = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentXP, setCurrentXP] = useState(0);
  const [targetLevel, setTargetLevel] = useState(30);
  const [enchantingCost, setEnchantingCost] = useState(0);

  // Calculate XP needed for a specific level
  const getXPForLevel = (level) => {
    if (level <= 16) {
      return level * level + 6 * level;
    } else if (level <= 31) {
      return 2.5 * level * level - 40.5 * level + 360;
    } else {
      return 4.5 * level * level - 162.5 * level + 2220;
    }
  };

  // Calculate total XP needed from current to target
  const calculations = useMemo(() => {
    const currentTotalXP = getXPForLevel(currentLevel) + currentXP;
    const targetTotalXP = getXPForLevel(targetLevel);
    const xpNeeded = Math.max(0, targetTotalXP - currentTotalXP);
    
    // Calculate how much XP can be used for enchanting after reaching target
    const xpAfterTarget = Math.max(0, currentTotalXP + xpNeeded - targetTotalXP);
    const enchantingPossible = Math.floor(xpAfterTarget / enchantingCost) || 0;

    // Different XP sources and their rates
    const xpSources = [
      { name: 'Mining Coal/Diamond', xpPerAction: 3, description: 'Per ore mined' },
      { name: 'Killing Hostile Mobs', xpPerAction: 5, description: 'Per mob killed' },
      { name: 'Breeding Animals', xpPerAction: 7, description: 'Per breeding' },
      { name: 'Fishing', xpPerAction: 6, description: 'Per fish caught' },
      { name: 'Smelting (Stack)', xpPerAction: 64, description: 'Per 64 items smelted' },
      { name: 'Trading with Villagers', xpPerAction: 8, description: 'Per trade' },
      { name: 'Enderdragon', xpPerAction: 12000, description: 'Per dragon killed' },
      { name: 'Wither', xpPerAction: 50, description: 'Per wither killed' }
    ];

    const sourcesWithActions = xpSources.map(source => ({
      ...source,
      actionsNeeded: Math.ceil(xpNeeded / source.xpPerAction)
    }));

    return {
      currentTotalXP,
      targetTotalXP,
      xpNeeded,
      enchantingPossible,
      sourcesWithActions
    };
  }, [currentLevel, currentXP, targetLevel, enchantingCost]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-red-900 to-purple-900 py-8 px-4">
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
            <div className="w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back button */}
        <Link to="/">
          <Button className="mb-6 bg-purple-800 hover:bg-purple-700 text-white border-2 border-purple-600 font-bold">
            Back to Enchanting Table
          </Button>
        </Link>

        {/* Main card */}
        <Card className="bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 border-4 border-amber-800 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-purple-900 font-serif text-center flex items-center justify-center">
              <Calculator className="w-8 h-8 mr-3" />
              Experience Calculator
            </CardTitle>
            <p className="text-center text-amber-800 font-medium">
              Calculate XP needed for enchanting and plan your grinding strategy
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Input Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-bold text-purple-900 mb-2">Current Level</label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(parseInt(e.target.value) || 0)}
                  className="bg-white border-2 border-purple-300 font-medium"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-purple-900 mb-2">Current XP in Level</label>
                <Input
                  type="number"
                  min="0"
                  value={currentXP}
                  onChange={(e) => setCurrentXP(parseInt(e.target.value) || 0)}
                  className="bg-white border-2 border-purple-300 font-medium"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-purple-900 mb-2">Target Level</label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={targetLevel}
                  onChange={(e) => setTargetLevel(parseInt(e.target.value) || 30)}
                  className="bg-white border-2 border-purple-300 font-medium"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-purple-900 mb-2">Enchanting Cost (XP)</label>
                <Input
                  type="number"
                  min="0"
                  value={enchantingCost}
                  onChange={(e) => setEnchantingCost(parseInt(e.target.value) || 0)}
                  className="bg-white border-2 border-purple-300 font-medium"
                  placeholder="Enter enchant cost"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* XP Summary */}
              <Card className="border-2 border-blue-500 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg text-blue-700">
                    <Target className="w-5 h-5 mr-2" />
                    XP Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-800 font-medium">Current Total XP:</span>
                    <Badge className="bg-blue-600 text-white font-bold">
                      {calculations.currentTotalXP.toLocaleString()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800 font-medium">Target XP:</span>
                    <Badge className="bg-blue-600 text-white font-bold">
                      {calculations.targetTotalXP.toLocaleString()}
                    </Badge>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-blue-900 font-bold">XP Needed:</span>
                    <Badge className="bg-blue-800 text-white font-bold text-lg">
                      {calculations.xpNeeded.toLocaleString()}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Level Progress */}
              <Card className="border-2 border-green-500 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg text-green-700">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-800 mb-1">
                      {currentLevel} → {targetLevel}
                    </div>
                    <div className="text-green-700 font-medium">
                      {targetLevel - currentLevel} levels to go
                    </div>
                  </div>
                  
                  {calculations.xpNeeded === 0 && (
                    <div className="text-center text-green-800 font-bold">
                      🎉 Target reached!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Enchanting Info */}
              <Card className="border-2 border-purple-500 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg text-purple-700">
                    <Zap className="w-5 h-5 mr-2" />
                    Enchanting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {enchantingCost > 0 ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-purple-800 font-medium">Cost per enchant:</span>
                        <Badge className="bg-purple-600 text-white font-bold">
                          {enchantingCost} XP
                        </Badge>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-purple-900 font-bold">Enchants possible:</span>
                        <Badge className="bg-purple-800 text-white font-bold text-lg">
                          {calculations.enchantingPossible}
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-purple-700">
                      Enter enchanting cost to calculate
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* XP Sources */}
            {calculations.xpNeeded > 0 && (
              <Card className="border-2 border-yellow-500 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-yellow-800">
                    🎯 XP Grinding Strategies
                  </CardTitle>
                  <p className="text-yellow-700">Choose your preferred method to reach {targetLevel} levels:</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {calculations.sourcesWithActions.map((source, index) => (
                      <div key={index} className="bg-white border border-yellow-300 rounded-lg p-4">
                        <h4 className="font-bold text-yellow-900 mb-2">{source.name}</h4>
                        <div className="space-y-1 text-sm">
                          <div className="text-yellow-800">{source.description}</div>
                          <div className="font-bold text-yellow-900 text-lg">
                            {source.actionsNeeded.toLocaleString()} actions
                          </div>
                          <div className="text-yellow-700 text-xs">
                            +{source.xpPerAction} XP each
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceCalculator;