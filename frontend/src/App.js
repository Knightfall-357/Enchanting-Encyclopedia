import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import EnchantingTable from "./components/EnchantingTable";
import EnchantmentCard from "./components/EnchantmentCard";
import EnchantmentDetail from "./components/EnchantmentDetail";
import SearchAndFilter from "./components/SearchAndFilter";
import EnchantmentCombinations from "./components/EnchantmentCombinations";
import ExperienceCalculator from "./components/ExperienceCalculator";
import { enchantments } from "./data/mock";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEnchantments = useMemo(() => {
    return enchantments.filter(enchantment => {
      const matchesSearch = enchantment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           enchantment.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || enchantment.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-red-900 to-purple-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enchanting Table Header */}
        <div className="mb-12">
          <EnchantingTable />
        </div>

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          enchantments={filteredEnchantments}
        />

        {/* Enchantments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEnchantments.map((enchantment) => (
            <EnchantmentCard key={enchantment.id} enchantment={enchantment} />
          ))}
        </div>

        {filteredEnchantments.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-amber-50 to-amber-200 border-4 border-amber-800 rounded-lg p-8 max-w-md mx-auto">
              <p className="text-purple-900 text-xl font-bold mb-2">No enchantments found!</p>
              <p className="text-amber-800">Try adjusting your search or filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enchantment/:id" element={<EnchantmentDetail />} />
          <Route path="/combinations" element={<EnchantmentCombinations />} />
          <Route path="/calculator" element={<ExperienceCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
