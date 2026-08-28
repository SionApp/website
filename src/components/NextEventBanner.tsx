import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getNextEvent } from "@/data/events";
import { useEvents } from "@/hooks/useEvents";

gsap.registerPlugin(ScrollTrigger);

/**
 * Floating "Próximo Evento" card that overlaps the hero's bottom edge.
 * Reads the nearest upcoming event from the shared events data (see
 * src/data/events.ts) and renders nothing if there is none scheduled.
 */
const NextEventBanner = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { events } = useEvents();
  const event = getNextEvent(events);

  useEffect(() => {
    if (!event || !cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 32, opacity: 0, rotationX: -8 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 90%" },
        },
      );
    }, cardRef);
    return () => ctx.revert();
  }, [event]);

  if (!event) return null;

  // ISO date-only strings parse as UTC midnight — format in UTC so the
  // authored calendar date never shifts a day under a negative local offset.
  const formattedDate = new Date(event.date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  });

  return (
    <div className="relative z-10 bg-background px-4 sm:px-6 pb-14 -mt-12" style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        className="tilt-3d mx-auto max-w-4xl bg-card border border-border rounded-lg shadow-[0_12px_34px_hsl(var(--navy)/0.18)] grid grid-cols-1 sm:grid-cols-[150px_1fr_auto] gap-5 items-center p-5 sm:p-6"
      >
        <div className="h-24 sm:h-[100px] rounded-md overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div>
          <span className="inline-block bg-primary text-primary-foreground text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-sm">
            PRÓXIMO EVENTO
          </span>
          <h3 className="font-serif text-lg font-bold text-navy dark:text-foreground mt-2 mb-1">
            {event.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {formattedDate} · {event.location} · Publicado desde el panel admin
          </p>
        </div>
        <Link to="/eventos" className="shrink-0">
          <span className="inline-block whitespace-nowrap bg-navy text-navy-foreground hover:bg-navy/90 transition-colors rounded-[4px] px-5 py-2.5 text-sm font-bold">
            Más información →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NextEventBanner;
