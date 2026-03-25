import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '../../components/ui/button'; // <-- Añadir esta línea

export function Footer() {
  return (
    <footer className="bg-surface text-muted-foreground py-12 mt-16 border-t border-border">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2 text-foreground">
            <Building className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl">Bereal Realtors</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Tu socio de confianza para encontrar el hogar perfecto en Puerto Plata, República Dominicana.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition-colors text-sm">Inicio</Link></li>
            <li><Link to="/properties" className="hover:text-primary transition-colors text-sm">Propiedades</Link></li>
            <li><Link to="/sell" className="hover:text-primary transition-colors text-sm">Vender Propiedad</Link></li>
            <li><Link to="/buy" className="hover:text-primary transition-colors text-sm">Comprar Propiedad</Link></li>
            <li><Link to="/agents" className="hover:text-primary transition-colors text-sm">Nuestros Agentes</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors text-sm">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 mr-1 text-primary" />
              <span>Puerto Plata, República Dominicana</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 mr-1 text-primary" />
              <span>+1 (809) 555-1234</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 mr-1 text-primary" />
              <span>info@berealrealtors.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter (Placeholder) */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Mantente Informado</h3>
          <p className="text-sm mb-4">
            Suscríbete a nuestro boletín para recibir las últimas propiedades y noticias.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="p-2 rounded-md bg-background border border-border text-foreground text-sm focus:ring-primary focus:border-primary"
            />
            <Button type="submit" className="w-full rounded-md">Suscribirse</Button>
          </form>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto text-center text-xs text-muted-foreground mt-10 pt-6 border-t border-border/50">
        &copy; {new Date().getFullYear()} Bereal Realtors. Todos los derechos reservados.
      </div>
    </footer>
  );
}
