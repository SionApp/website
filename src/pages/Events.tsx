import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard, { EventProps } from "@/components/EventCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useEvents } from "@/hooks/useEvents";
import { supabase } from "@/integrations/supabase/client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const { events, loading } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (loading) return;
    gsap.fromTo(".event-card",
      { y: 32, opacity: 0, rotationX: -8 },
      { y: 0, opacity: 1, rotationX: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" }
    );
  }, [loading]);

  const handleRegister = (event: EventProps) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleSubmitRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const form = e.target as HTMLFormElement;
    const firstName = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const [name, ...rest] = firstName.trim().split(" ");

    setIsSubmitting(true);
    const { error } = await supabase.rpc("register_event_interest", {
      p_event_id: selectedEvent.id,
      p_first_name: name,
      p_last_name: rest.join(" ") || name,
      p_email: email,
      p_phone: phone,
    });
    setIsSubmitting(false);

    if (error) {
      toast({
        title: "No pudimos completar la inscripción",
        description: "Intentá de nuevo en unos minutos.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Inscripción Exitosa!",
      description: `Te has inscrito correctamente a ${selectedEvent.title}`,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="bg-navy py-16 sm:py-20 text-center px-4">
        <div className="text-xs font-bold tracking-[0.1em] text-primary mb-3">
          PANEL ADMIN → EVENTOS
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
          Actividades y Eventos
        </h1>
        <p className="text-text-on-navy text-sm max-w-xl mx-auto">
          Descubre lo que Dios está haciendo en nuestra comunidad y sé parte de ello. Cada
          tarjeta nace de un evento publicado desde el panel admin.
        </p>
      </div>

      <main className="container mx-auto px-4 py-14 sm:py-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <EventCard event={event} onRegister={handleRegister} />
            </div>
          ))}

          {events.length % 3 !== 0 && (
            <div className="event-card border border-dashed border-primary/40 rounded-[10px] flex flex-col items-center justify-center text-center p-7 min-h-[260px]">
              <span className="text-xs font-bold tracking-[0.05em] text-primary mb-2">
                PRÓXIMAMENTE
              </span>
              <span className="text-sm text-muted-foreground">
                Nuevos eventos aparecerán aquí en cuanto se publiquen desde el panel admin.
              </span>
            </div>
          )}
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
              <Input id="name" name="name" placeholder="Tu nombre" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" className="bg-background/50" />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Confirmar Inscripción"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Events;
