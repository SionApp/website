import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CHURCH_INFO } from "@/data/church-info";
import sionLogo from "@/assets/sion-logo-final.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (anchor: string) => {
    if (location.pathname === '/') {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${anchor}`);
    }
  };

  return (
    <footer className="bg-navy text-text-on-navy border-t border-navy-secondary">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-background">
                <img src={sionLogo} alt="Iglesia Sion" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Iglesia Sion</h3>
            </div>
            <p className="opacity-75 text-sm leading-relaxed">
              Amando a Dios, amando a la gente, transformando vidas en Coro, Falcón desde{" "}
              {CHURCH_INFO.foundingYear}.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" aria-label="Facebook" className="w-8 h-8 bg-navy-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 bg-navy-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 bg-navy-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Enlaces</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li><button onClick={() => handleNavigation('#inicio')} className="hover:text-primary transition-colors text-left">Inicio</button></li>
              <li><button onClick={() => handleNavigation('#nosotros')} className="hover:text-primary transition-colors text-left">Nosotros</button></li>
              <li><button onClick={() => handleNavigation('#servicios')} className="hover:text-primary transition-colors text-left">Servicios</button></li>
              <li><Link to="/eventos" className="hover:text-primary transition-colors">Actividades</Link></li>
              <li><Link to="/galeria" className="hover:text-primary transition-colors">Galería</Link></li>
              <li><button onClick={() => handleNavigation('#contacto')} className="hover:text-primary transition-colors text-left">Contacto</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-3 text-sm">Contacto</h4>
            <div className="space-y-2.5 opacity-80 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{CHURCH_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{CHURCH_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{CHURCH_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-secondary pt-6 text-center">
          <p className="opacity-60 text-sm flex items-center justify-center">
            © 2026 Iglesia Evangélica Pentecostal Sion. Hecho con
            <Heart className="w-4 h-4 mx-1 text-live" />
            para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
