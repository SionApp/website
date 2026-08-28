import { useRef, useEffect } from "react";
import { Clock, Heart, Book, Users, Mic2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Servicio Dominical",
      time: "Domingos 7:00 AM, 9:00 AM y 11:00 AM",
      icon: Heart,
    },
    {
      title: "Estudio Bíblico",
      time: "Sábados 7:00 AM",
      icon: Book,
    },
    {
      title: "Grupos Familiares",
      time: "Martes 7:30 PM",
      icon: Users,
    },
    {
      title: "Alabanza Juvenil",
      time: "Sábados 2:00 PM",
      icon: Mic2,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 32, opacity: 0, rotationX: -8 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-14 sm:py-16 text-center bg-background"
      style={{ perspective: "1200px" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-xs font-bold tracking-[0.1em] text-primary mb-2.5">
          NUESTROS SERVICIOS
        </div>
        <h2 className="font-serif text-3xl font-bold text-navy dark:text-foreground mb-9">
          Para Cada Etapa de tu Fe
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="tilt-3d border border-border rounded-md px-4 py-6"
            >
              <service.icon className="w-6 h-6 mx-auto mb-2.5 text-primary" />
              <div className="font-bold text-sm text-navy dark:text-foreground mb-1">
                {service.title}
              </div>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                <Clock className="w-3 h-3" />
                {service.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
