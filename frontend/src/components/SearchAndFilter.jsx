import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { categories } from '../data/mock';

const SearchAndFilter = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, enchantments }) => {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const getFilterCount = () => {
    let count = 0;
    if (searchTerm) count++;
    if (selectedCategory !== 'all') count++;
    return count;
  };

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-amber-200 border-4 border-amber-800 shadow-lg mb-8">
      <CardContent className="p-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-600 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search enchantments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg bg-white border-2 border-purple-300 focus:border-purple-500 rounded-lg font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-purple-800 hover:bg-purple-700 text-white font-bold flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {getFilterCount() > 0 && (
              <Badge className="bg-red-600 text-white ml-2 px-2 py-1 text-xs">
                {getFilterCount()}
              </Badge>
            )}
          </Button>

          {getFilterCount() > 0 && (
            <Button
              onClick={clearFilters}
              variant="outline"
              className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="space-y-4 p-4 bg-purple-900/10 rounded-lg border-2 border-purple-300">
            <div>
              <h3 className="font-bold text-purple-900 mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`${
                      selectedCategory === category.id
                        ? 'bg-purple-800 text-white'
                        : 'bg-white text-purple-800 border-2 border-purple-300 hover:bg-purple-50'
                    } font-bold transition-colors`}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mt-4 text-center">
          <span className="text-purple-800 font-bold text-lg">
            {enchantments.length} enchantment{enchantments.length !== 1 ? 's' : ''} found
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchAndFilter;