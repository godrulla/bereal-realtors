import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

export function SearchBar() {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching with:', { location, propertyType, priceRange });
    // Implement actual search logic or redirect to properties page with filters
  };

  return (
    <form onSubmit={handleSearch} className="bg-surface p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-4 border border-border/50 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Input
        type="text"
        placeholder="Ubicación (ej. Sosúa, Cabarete)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 min-w-[200px] bg-background text-foreground border-border focus:ring-primary focus:border-primary rounded-md"
      />
      <Select onValueChange={setPropertyType} value={propertyType}>
        <SelectTrigger className="w-full md:w-[180px] bg-background text-foreground border-border focus:ring-primary focus:border-primary rounded-md">
          <SelectValue placeholder="Tipo de Propiedad" />
        </SelectTrigger>
        <SelectContent className="bg-surface border-border text-foreground rounded-md">
          <SelectItem value="apartment">Apartamento</SelectItem>
          <SelectItem value="house">Casa</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
          <SelectItem value="land">Terreno</SelectItem>
          <SelectItem value="commercial">Comercial</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={setPriceRange} value={priceRange}>
        <SelectTrigger className="w-full md:w-[180px] bg-background text-foreground border-border focus:ring-primary focus:border-primary rounded-md">
          <SelectValue placeholder="Rango de Precio" />
        </SelectTrigger>
        <SelectContent className="bg-surface border-border text-foreground rounded-md">
          <SelectItem value="0-100000">Hasta $100,000</SelectItem>
          <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
          <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
          <SelectItem value="500000+">Más de $500,000</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full md:w-auto px-8 py-2 rounded-md">
        <Search className="h-5 w-5 mr-2" /> Buscar
      </Button>
    </form>
  );
}
