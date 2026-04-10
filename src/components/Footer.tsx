import { Heart, Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    <footer className="bg-primary text-primary-foreground dark:bg-background dark:text-foreground dark:border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-background">
                <img 
                  src={sionLogo} 
                  alt="Iglesia Sion" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Iglesia Evangélica Pentecostal Sion</h3>
                <p className="text-sm opacity-70">Cambiando vidas</p>
              </div>
            </div>
            <p className="opacity-80 mb-4">
              Transformando vidas a través del amor de Cristo desde 1936.
              Una iglesia donde todos son bienvenidos.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 opacity-80">
              <li><button onClick={() => handleNavigation('#inicio')} className="hover:text-accent transition-colors text-left">Inicio</button></li>
              <li><button onClick={() => handleNavigation('#servicios')} className="hover:text-accent transition-colors text-left">Servicios</button></li>
              <li><button onClick={() => handleNavigation('#nosotros')} className="hover:text-accent transition-colors text-left">Acerca de Nosotros</button></li>
              <li><button onClick={() => handleNavigation('#contacto')} className="hover:text-accent transition-colors text-left">Contacto</button></li>
              <li><Link to="/galeria" className="hover:text-accent transition-colors">Galería</Link></li>
              {/* <li><button onClick={() => handleNavigation('#streaming')} className="hover:text-accent transition-colors text-left">En Vivo</button></li> */}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios de Servicio</h4>
            <ul className="space-y-2 opacity-80">
              <li>🌅 Primer Servicio: 9:00 AM</li>
              <li>☀️ Segundo Servicio: 11:30 AM</li>
              <li>🌙 Servicio Nocturno: 6:00 PM</li>
              <li>📖 Estudio Bíblico: Miércoles 7:00 PM</li>
              <li>👥 Grupos Pequeños: Viernes 7:30 PM</li>
              <li>🎵 Alabanza: Sábados 7:00 PM</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 opacity-80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Calle Ampies, Coro 4101, Falcón<br />
                  Venezuela
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+58 412-7590431</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">iglesiaevangelicapsion@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center">
          <p className="opacity-60 text-sm flex items-center justify-center">
            © 2026 Iglesia Evangélica Pentecostal Sion. Hecho con
            <Heart className="w-4 h-4 mx-1 text-red-400" />
            para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;