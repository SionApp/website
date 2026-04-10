import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import sionLogo from "@/assets/sion-logo-final.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (anchor: string) => {
    if (location.pathname === '/') {
      // Si estamos en la página principal, navegar directamente al anchor
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página, ir al home con el anchor
      navigate(`/${anchor}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-background">
              <img
                src={sionLogo}
                alt="Iglesia Sion"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Iglesia Evangélica Pentecostal Sion</h1>
              <p className="text-sm text-muted-foreground">Cambiando vidas</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleNavigation('#inicio')} className="text-muted-foreground hover:text-foreground transition-colors">
              Inicio
            </button>
            <button onClick={() => handleNavigation('#servicios')} className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </button>
            <button onClick={() => handleNavigation('#nosotros')} className="text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
            </button>
            {/* <button onClick={() => handleNavigation('#streaming')} className="text-muted-foreground hover:text-foreground transition-colors">
              En Vivo
            </button> */}
            <Link to="/galeria" className="text-muted-foreground hover:text-foreground transition-colors">
              Galería
            </Link>
            <Link to="/eventos" className="text-muted-foreground hover:text-foreground transition-colors">
              Actividades
            </Link>
            <button onClick={() => handleNavigation('#contacto')} className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="default" size="sm">
              Únete a Nosotros
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => handleNavigation('#inicio')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                Inicio
              </button>
              <button onClick={() => handleNavigation('#servicios')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                Servicios
              </button>
              <button onClick={() => handleNavigation('#nosotros')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                Nosotros
              </button>
              <button onClick={() => handleNavigation('#streaming')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                En Vivo
              </button>
              <Link to="/galeria" className="text-muted-foreground hover:text-foreground transition-colors">
                Galería
              </Link>
              <Link to="/eventos" className="text-muted-foreground hover:text-foreground transition-colors">
                Actividades
              </Link>
              <button onClick={() => handleNavigation('#contacto')} className="text-muted-foreground hover:text-foreground transition-colors text-left">
                Contacto
              </button>
              <Button variant="default" size="sm" className="mt-4 self-start">
                Únete a Nosotros
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;