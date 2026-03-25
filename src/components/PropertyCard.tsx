import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  area: number;
  link: string;
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  link,
}: PropertyCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-semibold text-foreground truncate">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{location}</p>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between text-lg font-bold text-primary mb-4">
          <span>{formattedPrice}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span>{beds} Camas</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span>{baths} Baños</span>
          </div>
          <div className="flex items-center space-x-1">
            <Ruler className="h-4 w-4" />
            <span>{area} m²</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={link} className="w-full">
          <Button className="w-full">Ver Detalles</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
