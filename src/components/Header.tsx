import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CHURCH_INFO } from "@/data/church-info";
import sionLogo from "@/assets/sion-logo-final.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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

  const navLinkClass = (active: boolean) =>
    active
      ? "text-primary border-b-2 border-primary pb-1 font-semibold transition-colors"
      : "text-foreground/70 hover:text-foreground transition-colors pb-1 border-b-2 border-transparent";

  return (
    <>
      {/* Thin navy top bar: address/phone + Sunday schedule */}
      <div className="hidden sm:flex items-center justify-between bg-navy text-text-on-navy text-xs px-6 lg:px-10 py-2">
        <span>
          {CHURCH_INFO.address} · {CHURCH_INFO.phone}
        </span>
        <span>{CHURCH_INFO.sundayScheduleShort}</span>
      </div>

      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden bg-background">
                <img
                  src={sionLogo}
                  alt="Iglesia Sion"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-serif font-bold text-lg text-navy dark:text-foreground">SION</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
              <button onClick={() => handleNavigation('#inicio')} className={navLinkClass(isHome)}>
                Inicio
              </button>
              <button onClick={() => handleNavigation('#nosotros')} className={navLinkClass(false)}>
                Nosotros
              </button>
              <button onClick={() => handleNavigation('#servicios')} className={navLinkClass(false)}>
                Servicios
              </button>
              <Link to="/eventos" className={navLinkClass(location.pathname === "/eventos")}>
                Actividades
              </Link>
              <Link to="/galeria" className={navLinkClass(location.pathname === "/galeria")}>
                Galería
              </Link>
              <button onClick={() => handleNavigation('#contacto')} className={navLinkClass(false)}>
                Contacto
              </button>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                className="rounded-[4px] bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => handleNavigation('#contacto')}
              >
                Planifica tu Visita
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
              <nav className="flex flex-col space-y-4 pt-4 text-sm font-semibold">
                <button onClick={() => handleNavigation('#inicio')} className="text-left text-foreground/70 hover:text-foreground transition-colors">
                  Inicio
                </button>
                <button onClick={() => handleNavigation('#nosotros')} className="text-left text-foreground/70 hover:text-foreground transition-colors">
                  Nosotros
                </button>
                <button onClick={() => handleNavigation('#servicios')} className="text-left text-foreground/70 hover:text-foreground transition-colors">
                  Servicios
                </button>
                <button onClick={() => handleNavigation('#streaming')} className="text-left text-foreground/70 hover:text-foreground transition-colors">
                  En Vivo
                </button>
                <Link to="/eventos" className="text-foreground/70 hover:text-foreground transition-colors">
                  Actividades
                </Link>
                <Link to="/galeria" className="text-foreground/70 hover:text-foreground transition-colors">
                  Galería
                </Link>
                <button onClick={() => handleNavigation('#contacto')} className="text-left text-foreground/70 hover:text-foreground transition-colors">
                  Contacto
                </button>
                <Button
                  variant="default"
                  size="sm"
                  className="mt-2 self-start rounded-[4px] bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleNavigation('#contacto')}
                >
                  Planifica tu Visita
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;