import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

const agents = [
  {
    id: 'a1',
    name: 'Ana García',
    title: 'Agente Inmobiliario Senior',
    bio: 'Con más de 10 años de experiencia en el mercado de Puerto Plata, Ana es experta en propiedades residenciales y de inversión. Su dedicación y conocimiento local garantizan una experiencia sin igual.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'ana.garcia@bereal.com',
    phone: '809-555-1111',
  },
  {
    id: 'a2',
    name: 'Roberto Pérez',
    title: 'Especialista en Terrenos y Desarrollo',
    bio: 'Roberto se especializa en la venta y adquisición de terrenos para desarrollo comercial y residencial. Su visión estratégica es clave para inversionistas que buscan oportunidades en la región.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'roberto.perez@bereal.com',
    phone: '809-555-2222',
  },
  {
    id: 'a3',
    name: 'Sofía Martínez',
    title: 'Asesora de Propiedades de Lujo',
    bio: 'Sofía tiene una pasión por las propiedades de alta gama y un ojo para el detalle. Ayuda a clientes exigentes a encontrar villas y apartamentos de lujo que superen sus expectativas.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    email: 'sofia.martinez@bereal.com',
    phone: '809-555-3333',
  },
];

export function AgentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground text-center mb-4">Conoce a Nuestros Expertos</h1>
      <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
        Nuestro equipo de agentes inmobiliarios está dedicado a brindarte el mejor servicio y asesoramiento en el mercado de bienes raíces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agents.map((agent) => (
          <Card key={agent.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={agent.avatar} alt={agent.name} />
                <AvatarFallback>{agent.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">{agent.name}</CardTitle>
              <CardDescription className="text-primary">{agent.title}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">{agent.bio}</p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a href={`mailto:${agent.email}`} aria-label={`Enviar correo a ${agent.name}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href={`tel:${agent.phone}`} aria-label={`Llamar a ${agent.name}`}>
                    <Phone className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
