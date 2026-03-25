import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function BuyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground text-center mb-4">Encuentra Tu Hogar Ideal con Bereal Realtors</h1>
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
        Nuestros expertos te guiarán en cada paso del proceso de compra para que encuentres la propiedad perfecta que se ajuste a tus necesidades y presupuesto.
      </p>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Criterios de Búsqueda</CardTitle>
          <CardDescription>Dinos qué tipo de propiedad estás buscando.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="location">Ubicación Preferida</Label>
              <Input id="location" placeholder="Ej: Sosúa, Cabarete, Puerto Plata" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="propertyType">Tipo de Propiedad</Label>
              <Select>
                <SelectTrigger id="propertyType">
                  <SelectValue placeholder="Selecciona un tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="terreno">Terreno</SelectItem>
                  <SelectItem value="comercial">Comercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="minPrice">Precio Mínimo</Label>
                <Input id="minPrice" type="number" placeholder="Ej: 100000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="maxPrice">Precio Máximo</Label>
                <Input id="maxPrice" type="number" placeholder="Ej: 500000" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="beds">Mínimo de Habitaciones</Label>
                <Input id="beds" type="number" placeholder="Ej: 2" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="baths">Mínimo de Baños</Label>
                <Input id="baths" type="number" placeholder="Ej: 2" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactName">Tu Nombre</Label>
              <Input id="contactName" placeholder="Tu Nombre Completo" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contactEmail">Tu Correo Electrónico</Label>
              <Input id="contactEmail" type="email" placeholder="tu@ejemplo.com" />
            </div>
            <Button type="submit" className="w-full">Enviar Criterios</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
