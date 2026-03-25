import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, DollarSign, Users, Phone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/ModeToggle'; // Import ModeToggle

const navLinks = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Propiedades', href: '/properties', icon: Building },
  { name: 'Vender', href: '/sell', icon: DollarSign },
  { name: 'Comprar', href: '/buy', icon: DollarSign },
  { name: 'Agentes', href: '/agents', icon: Users },
  { name: 'Contacto', href: '/contact', icon: Phone },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Bereal Realtors</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4"> {/* Changed to flex to include ModeToggle */}
          <ModeToggle /> {/* Add ModeToggle here */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="secondary" className="rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-105">
              Iniciar Sesión
            </Button>
            <Button className="rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-105">
              Listar Propiedad
            </Button>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-surface border-border">
            <div className="flex flex-col space-y-4 pt-8">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-foreground">Bereal Realtors</span>
              </Link>
              <Separator className="bg-border" />
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
              <Separator className="bg-border" />
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="secondary" className="w-full rounded-full">
                  Iniciar Sesión
                </Button>
                <Button className="w-full rounded-full">
                  Listar Propiedad
                </Button>
                <ModeToggle /> {/* Add ModeToggle here for mobile */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
