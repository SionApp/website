import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EventCard, { EventProps } from "@/components/EventCard";

const Newsletter = () => {
  // Mock Data - In production this would come from Supabase
  const events: EventProps[] = [
    {
      id: 1,
      title: "Retiro Espiritual 2026",
      description: "Únete a nosotros para un fin de semana de renovación espiritual en las montañas.",
      date: "2026-04-02",
      time: "6:00 PM",
      location: "Posada Privada",
      category: "retiro",
      image: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2690&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Conferencia de Jóvenes",
      description: "Tres días de enseñanza, adoración y compañerismo para jóvenes de 13 a 25 años.",
      date: "2026-02-28",
      time: "7:00 PM",
      location: "Iglesia Sion",
      category: "jovenes",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  const hasSpecialEvents = events.length > 0;

  return (
    <section id="newsletter" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Actividades y Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente informado sobre nuestras actividades especiales y eventos comunitarios
          </p>
        </div>

        {hasSpecialEvents ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {events.map((event) => (
                <div key={event.id} className="h-[450px]">
                  <EventCard event={event} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/eventos">
                <Button size="lg" variant="outline" className="group bg-primary text-primary-foreground">
                  Ver Todas las Actividades
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          // Contenido por defecto cuando no hay eventos especiales
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
                  alt="Servicios Regulares"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-center p-8">
                  <div className="text-white max-w-lg">
                    <h3 className="text-3xl font-bold mb-2">Servicios Regulares</h3>
                    <p className="text-lg opacity-90">Te invitamos a nuestros servicios dominicales. Ven y experimenta el amor de Dios en comunidad.</p>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Lo que puedes experimentar:
                    </h4>
                    <ul className="space-y-3">
                      {["Adoración en vivo", "Enseñanza bíblica", "Oración comunitaria", "Compañerismo cristiano"].map((highlight, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Horarios de Servicios:
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                        <Clock className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Domingos</p>
                          <p className="text-sm text-muted-foreground">7:00 AM • 9:00 AM • 11:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="px-8">
                    <Users className="w-4 h-4 mr-2" />
                    Planifica tu Visita
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;