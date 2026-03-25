import React from 'react';
import { featuredProperties } from '@/data/properties'; // Import properties data
import { PropertyCard } from '@/components/PropertyCard'; // Import PropertyCard

export function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground text-center mb-4">Nuestras Propiedades</h1>
      <p className="text-lg text-muted-foreground text-center mb-8">Explora nuestra selección de propiedades disponibles en Puerto Plata y sus alrededores.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      {featuredProperties.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No hay propiedades disponibles en este momento.</p>
      )}
    </div>
  );
}
