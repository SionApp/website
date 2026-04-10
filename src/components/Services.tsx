import { useRef, useEffect } from "react";
import { Calendar, Clock, Users, Heart, Book, Mic2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Servicio Dominical",
      description: "Adoración, predicación y comunión",
      time: "Domingos 7:00 AM, 9:00 AM y 11:00 AM",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Estudio Bíblico",
      description: "Profundizando en la Palabra de Dios",
      time: "Sabados 7:00 AM",
      icon: Book,
      color: "text-blue-500"
    },
    {
      title: "Grupos Familiares",
      description: "Comunión íntima y crecimiento espiritual",
      time: "Martes 7:30 PM",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Alabanza y Adoración Juvenil",
      description: "Tiempo especial de adoración",
      time: "Sábados 2:00 PM",
      icon: Mic2,
      color: "text-purple-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="servicios" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Te invitamos a participar en nuestras actividades semanales diseñadas para
            fortalecer tu fe y construir comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group perspective-1000"
            >
              <Card className="h-full border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:bg-card relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="text-center pb-2 relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:shadow-primary/20`}>
                    <service.icon className={`w-10 h-10 ${service.color} transition-colors duration-300`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground font-medium mt-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.time}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block p-8 rounded-3xl bg-card/30 backdrop-blur-md border border-border/50">
            <p className="text-xl text-foreground mb-4 font-medium">
              ¿Primera vez visitando? ¡Te esperamos con los brazos abiertos!
            </p>
            <div className="flex items-center justify-center text-primary text-lg">
              <Calendar className="w-6 h-6 mr-3" />
              <span>No se requiere reservación - Ven como estés</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;