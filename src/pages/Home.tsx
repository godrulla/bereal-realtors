import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/SearchBar';
import { PropertyCard } from '@/components/PropertyCard';
import { featuredProperties, testimonials } from '@/data/properties';
import { Quote } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center overflow-hidden rounded-b-[3rem] shadow-2xl"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
        <div className="relative z-20 text-white px-4 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight animate-in fade-in slide-in-from-top-8 duration-1000">
            Encuentra tu Paraíso en <span className="text-primary">Puerto Plata</span>
          </h1>
          <p className="text-lg md:text-xl text-textSecondary animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Descubre las mejores propiedades en venta y alquiler en la hermosa costa norte de la República Dominicana.
          </p>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="container max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          Propiedades <span className="text-primary">Destacadas</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div key={property.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8 py-3 text-lg transition-all hover:scale-105">
            <Link to="/properties">Ver Todas las Propiedades</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-surface py-16 px-4 md:px-8 rounded-t-[3rem] shadow-inner mt-16">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¿Por Qué Elegir <span className="text-primary">Bereal Realtors</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Bereal Realtors, no solo vendemos propiedades; ayudamos a construir sueños. Con años de experiencia en el mercado inmobiliario de Puerto Plata, ofrecemos un servicio personalizado, transparente y eficiente.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center text-base">
                <span className="text-primary mr-2 text-xl">&bull;</span> Amplio conocimiento del mercado local
              </li>
              <li className="flex items-center text-base">
                <span className="text-primary mr-2 text-xl">&bull;</span> Asesoramiento experto y personalizado
              </li>
              <li className="flex items-center text-base">
                <span className="text-primary mr-2 text-xl">&bull;</span> Compromiso total con tus objetivos
              </li>
            </ul>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              <Link to="/about">Conoce Más Sobre Nosotros</Link>
            </Button>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Oficina de Bereal Realtors"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Tu Futuro Comienza Aquí</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          Lo Que Dicen Nuestros <span className="text-accent">Clientes</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="bg-card p-6 rounded-xl shadow-lg border border-border/50 h-full flex flex-col justify-between">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 md:px-8 text-center rounded-t-[3rem] shadow-2xl">
        <div className="container max-w-screen-md mx-auto space-y-6 animate-in fade-in zoom-in-95 duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            ¿Listo para Encontrar tu Hogar Ideal?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Contáctanos hoy mismo y deja que nuestros expertos te guíen en cada paso del camino.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-4 text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            <Link to="/contact">Contáctanos Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
