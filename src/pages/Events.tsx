import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard, { EventProps } from "@/components/EventCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { gsap } from "gsap";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

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
    },
    {
      id: 3,
      title: "Taller de Matrimonios",
      description: "Fortaleciendo los lazos del amor bajo la guía de Dios.",
      date: "2024-03-10",
      time: "5:00 PM",
      location: "Iglesia Sion",
      category: "familia",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Noche de Adoración",
      description: "Una noche especial dedicada a exaltar el nombre de Jesús.",
      date: "2024-03-25",
      time: "7:30 PM",
      location: "Iglesia Sion",
      category: "adoracion",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    gsap.fromTo(".event-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  const handleRegister = (event: EventProps) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would send data to Supabase
    toast({
      title: "¡Inscripción Exitosa!",
      description: `Te has inscrito correctamente a ${selectedEvent?.title}`,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Próximos <span className="text-primary">Eventos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre lo que Dios está haciendo en nuestra comunidad y sé parte de ello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <EventCard event={event} onRegister={handleRegister} />
            </div>
          ))}
        </div>
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card border-white/10">
          <DialogHeader>
            <DialogTitle>Inscripción al Evento</DialogTitle>
            <DialogDescription>
              Completa tus datos para registrarte en <span className="text-primary font-semibold">{selectedEvent?.title}</span>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitRegistration} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" placeholder="Tu nombre" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" placeholder="+1 234 567 890" className="bg-background/50" />
            </div>
            <Button type="submit" className="w-full">Confirmar Inscripción</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
