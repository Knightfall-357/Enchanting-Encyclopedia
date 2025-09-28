import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, AlertTriangle, CheckCircle, X, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { enchantments, enchantableItems } from '../data/mock';

const EnchantmentCombinations = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedEnchantments, setSelectedEnchantments] = useState([]);

  // Get enchantments that can be applied to the selected item
  const availableEnchantments = useMemo(() => {
    if (!selectedItem) return [];
    return enchantments.filter(enchantment => 
      enchantment.applicableItems.some(item => 
        item.toLowerCase().includes(selectedItem.toLowerCase()) || 
        selectedItem.toLowerCase().includes(item.toLowerCase()) ||
        enchantment.applicableItems.includes('All tools') ||
        enchantment.applicableItems.includes('All armor')
      )
    );
  }, [selectedItem]);

  // Check for conflicts between selected enchantments
  const conflicts = useMemo(() => {
    const conflictsList = [];
    selectedEnchantments.forEach((enchId, index) => {
      const enchantment = enchantments.find(e => e.id === enchId);
      enchantment.incompatible.forEach(incompatible => {
        const conflictEnch = enchantments.find(e => e.name === incompatible);
        if (conflictEnch && selectedEnchantments.includes(conflictEnch.id)) {
          conflictsList.push({
            enchantment1: enchantment.name,
            enchantment2: incompatible
          });
        }
      });
    });
    return conflictsList;
  }, [selectedEnchantments]);

  const addEnchantment = (enchantmentId) => {
    if (!selectedEnchantments.includes(enchantmentId)) {
      setSelectedEnchantments([...selectedEnchantments, enchantmentId]);
    }
  };

  const removeEnchantment = (enchantmentId) => {
    setSelectedEnchantments(selectedEnchantments.filter(id => id !== enchantmentId));
  };

  const clearAll = () => {
    setSelectedEnchantments([]);
    setSelectedItem('');
  };

  const getMaxExperienceCost = () => {
    if (selectedEnchantments.length === 0) return 0;
    
    // Calculate max experience cost for combining enchantments
    let totalCost = 0;
    selectedEnchantments.forEach(enchId => {
      const enchantment = enchantments.find(e => e.id === enchId);
      // Extract max level from experience cost string
      const costMatch = enchantment.experienceCost.match(/(\d+)-(\d+)/); 
      if (costMatch) {
        totalCost += parseInt(costMatch[2]); // Use max cost
      }
    });
    
    // Add anvil combination costs (exponential increase)
    const combinationCost = Math.pow(2, selectedEnchantments.length - 1) - 1;
    return totalCost + combinationCost * 10;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-8 px-4">
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
            <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
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
            <CardTitle className="text-3xl font-bold text-purple-900 font-serif text-center">
              🔮 Enchantment Combinations Checker
            </CardTitle>
            <p className="text-center text-amber-800 font-medium">
              Select an item and enchantments to check for conflicts and costs
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Item Selection */}
            <div>
              <label className="block text-lg font-bold text-purple-900 mb-3">Select Item Type</label>
              <Select value={selectedItem} onValueChange={setSelectedItem}>
                <SelectTrigger className="w-full bg-white border-2 border-purple-300 text-purple-900 font-medium">
                  <SelectValue placeholder="Choose an item to enchant..." />
                </SelectTrigger>
                <SelectContent>
                  {enchantableItems.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedItem && (
              <>
                {/* Available Enchantments */}
                <div>
                  <h3 className="text-lg font-bold text-purple-900 mb-3">Available Enchantments for {selectedItem}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {availableEnchantments.map((enchantment) => (
                      <Button
                        key={enchantment.id}
                        onClick={() => addEnchantment(enchantment.id)}
                        disabled={selectedEnchantments.includes(enchantment.id)}
                        className={`p-3 text-left h-auto ${
                          selectedEnchantments.includes(enchantment.id)
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-purple-800 hover:bg-purple-700'
                        } text-white font-medium`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold">{enchantment.name}</div>
                            <div className="text-sm opacity-90">Max Level: {enchantment.maxLevel}</div>
                          </div>
                          <Plus className="w-4 h-4" />
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Selected Enchantments */}
                {selectedEnchantments.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-purple-900">Selected Enchantments</h3>
                      <Button onClick={clearAll} variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                        Clear All
                      </Button>
                    </div>
                    <div className="space-y-2">
                      {selectedEnchantments.map((enchId) => {
                        const enchantment = enchantments.find(e => e.id === enchId);
                        return (
                          <div key={enchId} className="flex items-center justify-between bg-purple-100 border border-purple-300 rounded-lg p-3">
                            <div>
                              <span className="font-bold text-purple-900">{enchantment.name}</span>
                              <span className="text-sm text-purple-700 ml-2">Level {enchantment.maxLevel}</span>
                            </div>
                            <Button
                              onClick={() => removeEnchantment(enchId)}
                              size="sm"
                              variant="outline"
                              className="border-red-500 text-red-500 hover:bg-red-50"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Conflicts and Results */}
                {selectedEnchantments.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Conflicts */}
                    <Card className={`border-2 ${
                      conflicts.length > 0 ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'
                    }`}>
                      <CardHeader className="pb-3">
                        <CardTitle className={`flex items-center text-lg ${
                          conflicts.length > 0 ? 'text-red-700' : 'text-green-700'
                        }`}>
                          {conflicts.length > 0 ? (
                            <AlertTriangle className="w-5 h-5 mr-2" />
                          ) : (
                            <CheckCircle className="w-5 h-5 mr-2" />
                          )}
                          {conflicts.length > 0 ? 'Conflicts Detected!' : 'No Conflicts'}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {conflicts.length > 0 ? (
                          <div className="space-y-2">
                            {conflicts.map((conflict, index) => (
                              <div key={index} className="text-red-800 font-medium">
                                ⚠️ {conflict.enchantment1} conflicts with {conflict.enchantment2}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-green-800 font-medium">
                            ✅ All selected enchantments are compatible!
                          </p>
                        )}
                      </CardContent>
                    </Card>

                    {/* Cost Estimation */}
                    <Card className="border-2 border-blue-500 bg-blue-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center text-lg text-blue-700">
                          <Zap className="w-5 h-5 mr-2" />
                          Experience Cost
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="text-blue-800 font-bold text-2xl">
                            ~{getMaxExperienceCost()} levels
                          </div>
                          <div className="text-blue-700 text-sm">
                            Estimated maximum cost including anvil combinations
                          </div>
                          <div className="text-blue-600 text-xs">
                            * Actual cost may vary based on enchantment order and luck
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnchantmentCombinations;