import { useState, useEffect } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  es: {
    // Header
    'header.home': 'Inicio',
    'header.services': 'Servicios',
    'header.about': 'Nosotros',
    'header.live': 'En Vivo',
    'header.gallery': 'Galería',
    'header.contact': 'Contacto',
    'header.join': 'Únete a Nosotros',
    
    // Church Info
    'church.name': 'Iglesia Evangélica Pentecostal Sion',
    'church.slogan': 'Cambiando vidas',
    'church.description': 'Transformando vidas a través del amor de Cristo desde 1936. Una iglesia donde todos son bienvenidos.',
    
    // Live Stream
    'live.title': 'Servicio en Vivo',
    'live.banner': '🔴 ESTAMOS EN VIVO',
    'live.joinNow': 'Únete ahora al servicio',
    
    // Services
    'services.title': 'Horarios de Servicio',
    'services.first': 'Primer Servicio: 9:00 AM',
    'services.second': 'Segundo Servicio: 11:30 AM',
    'services.night': 'Servicio Nocturno: 6:00 PM',
    'services.bible': 'Estudio Bíblico: Miércoles 7:00 PM',
    'services.groups': 'Grupos Pequeños: Viernes 7:30 PM',
    'services.praise': 'Alabanza: Sábados 7:00 PM',
    
    // Footer
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.serviceHours': 'Horarios de Servicio',
    'footer.contact': 'Contacto',
    'footer.copyright': 'Hecho con amor para la gloria de Dios',
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.services': 'Services',
    'header.about': 'About Us',
    'header.live': 'Live',
    'header.gallery': 'Gallery',
    'header.contact': 'Contact',
    'header.join': 'Join Us',
    
    // Church Info
    'church.name': 'Sion Pentecostal Evangelical Church',
    'church.slogan': 'Changing lives',
    'church.description': 'Transforming lives through Christ\'s love since 1995. A church where everyone is welcome.',
    
    // Live Stream
    'live.title': 'Live Service',
    'live.banner': '🔴 WE ARE LIVE',
    'live.joinNow': 'Join the service now',
    
    // Services
    'services.title': 'Service Hours',
    'services.first': 'First Service: 9:00 AM',
    'services.second': 'Second Service: 11:30 AM',
    'services.night': 'Night Service: 6:00 PM',
    'services.bible': 'Bible Study: Wednesday 7:00 PM',
    'services.groups': 'Small Groups: Friday 7:30 PM',
    'services.praise': 'Praise: Saturday 7:00 PM',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.serviceHours': 'Service Hours',
    'footer.contact': 'Contact',
    'footer.copyright': 'Made with love for God\'s glory',
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    // Detect user's language from browser or geolocation
    const detectLanguage = () => {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.includes('en')) {
        setLanguage('en');
      } else {
        setLanguage('es');
      }
    };

    detectLanguage();
  }, []);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['es']?.[key] || key;
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return { t, language, changeLanguage };
};