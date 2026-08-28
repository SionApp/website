import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getUpcomingEvents, formatEventDateChip } from "@/data/events";
import { useEvents } from "@/hooks/useEvents";
import churchHistory from "@/assets/church-history.jpg";
import { CHURCH_INFO } from "@/data/church-info";

gsap.registerPlugin(ScrollTrigger);

/**
 * "Nosotros" split section: upcoming activities (left) + church history
 * photo (right). Replaces the previous full-width event-card grid; the
 * event-card grid itself now lives on the /eventos page.
 */
const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { events } = useEvents();
  const activities = getUpcomingEvents(events, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".activities-reveal",
        { y: 32, opacity: 0, rotationX: -8 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ perspective: "1400px" }}
    >
      {/* Left: upcoming activities */}
      <div className="activities-reveal bg-background px-6 sm:px-10 py-14 sm:py-16">
        <div className="text-xs font-bold tracking-[0.1em] text-primary mb-5">
          PRÓXIMAS ACTIVIDADES
        </div>

        {activities.length > 0 ? (
          <div className="flex flex-col gap-4 max-w-md">
            {activities.map((event, index) => {
              const { day, month } = formatEventDateChip(event.date);
              return (
                <div
                  key={event.id}
                  className={`flex items-center gap-3.5 ${
                    index < activities.length - 1 ? "border-b border-border pb-4" : ""
                  }`}
                >
                  <div className="bg-navy text-navy-foreground text-center rounded-[5px] px-2.5 py-1.5 min-w-[46px]">
                    <div className="text-[10px] opacity-70">{month}</div>
                    <div className="text-base font-bold">{day}</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-navy dark:text-foreground">
                      {event.title}
                    </div>
                    <div className="text-xs text-muted-foreground">{event.location}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground max-w-md">
            No hay actividades próximas por el momento. Vuelve pronto para ver las novedades.
          </p>
        )}

        <Link
          to="/eventos"
          className="inline-block mt-5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Ver Todas las Actividades →
        </Link>
      </div>

      {/* Right: church history photo */}
      <div className="activities-reveal tilt-3d relative min-h-[280px] lg:min-h-0">
        <img
          src={churchHistory}
          alt="Historia de Iglesia Sion"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white max-w-[260px]">
          <div className="text-xs font-bold tracking-[0.05em] text-primary mb-1">
            NUESTRA HISTORIA
          </div>
          <div className="font-serif text-xl font-bold">
            Cambiando vidas desde {CHURCH_INFO.foundingYear}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
