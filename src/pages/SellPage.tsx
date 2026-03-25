import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function SellPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground text-center mb-4">Vende Tu Propiedad con Bereal Realtors</h1>
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
        Estamos aquí para ayudarte a vender tu propiedad de forma rápida, eficiente y al mejor precio.
        Completa el formulario a continuación y uno de nuestros expertos se pondrá en contacto contigo.
      </p>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Información de la Propiedad</CardTitle>
          <CardDescription>Cuéntanos sobre la propiedad que deseas vender.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="propertyType">Tipo de Propiedad</Label>
              <Input id="propertyType" placeholder="Ej: Casa, Apartamento, Terreno" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Dirección Completa</Label>
              <Input id="address" placeholder="Calle, Número, Sector, Ciudad" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="beds">Número de Habitaciones</Label>
                <Input id="beds" type="number" placeholder="Ej: 3" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="baths">Número de Baños</Label>
                <Input id="baths" type="number" placeholder="Ej: 2" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="area">Área de Construcción (m²)</Label>
              <Input id="area" type="number" placeholder="Ej: 200" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Descripción Adicional</Label>
              <Textarea id="description" placeholder="Cualquier detalle relevante sobre la propiedad..." rows={5} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Tu Nombre</Label>
              <Input id="name" placeholder="Tu Nombre Completo" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Tu Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="tu@ejemplo.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Tu Teléfono</Label>
              <Input id="phone" type="tel" placeholder="Ej: 809-555-1234" />
            </div>
            <Button type="submit" className="w-full">Enviar Información</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
