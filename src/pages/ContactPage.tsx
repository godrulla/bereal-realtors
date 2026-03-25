import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground text-center mb-4">Contáctanos</h1>
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
        Estamos listos para responder a tus preguntas y ayudarte en tu búsqueda inmobiliaria.
        Envíanos un mensaje o visítanos en nuestra oficina.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
            <CardDescription>Completa el formulario y nos pondremos en contacto contigo pronto.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Tu Nombre</Label>
                <Input id="name" placeholder="Tu Nombre Completo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Tu Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="tu@ejemplo.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Ej: Consulta sobre una propiedad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Tu Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={6} />
              </div>
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Nuestra Oficina</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Calle Principal #123, Centro Ciudad, <br />
                  Puerto Plata, República Dominicana
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">+1 (809) 555-REAL</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">info@berealrealtors.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Horario de Atención</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>Lunes - Viernes: 9:00 AM - 6:00 PM</li>
                <li>Sábados: 10:00 AM - 2:00 PM</li>
                <li>Domingos: Cerrado</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
