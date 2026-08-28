import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Play } from "lucide-react";
import worshipCommunity from "@/assets/worship-community.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustBadges = [
  { icon: Heart, label: "Adoración" },
  { icon: BookOpen, label: "Crecer" },
  { icon: Users, label: "Servir" },
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-text-item",
        { y: 32, opacity: 0, rotationX: -8 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.85, stagger: 0.12, delay: 0.15 },
      );
      tl.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
        "-=0.5",
      );

      // Subtle parallax zoom on the right-side photo while scrolling away
      gsap.fromTo(
        bgRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (anchor: string) => {
    document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[460px]"
      style={{ perspective: "1400px" }}
    >
      {/* Left: copy */}
      <div className="flex flex-col justify-center bg-background px-6 sm:px-10 lg:px-14 py-16 lg:py-20">
        <div className="max-w-xl">
          <span className="hero-text-item block text-xs font-bold tracking-[0.1em] text-primary mb-3">
            BIENVENIDO A CASA
          </span>
          <h1 className="hero-text-item font-serif text-4xl md:text-[40px] leading-[1.18] font-bold text-navy dark:text-foreground mb-5">
            Ama a Dios.
            <br />
            Ama a la Gente.
            <br />
            <span className="text-primary">Transforma Vidas.</span>
          </h1>
          <p className="hero-text-item text-sm text-muted-foreground leading-relaxed mb-7 max-w-md">
            Somos una iglesia comprometida con predicar el Evangelio y formar discípulos
            que transforman su comunidad en Coro, Falcón.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <Button
              size="lg"
              className="hero-btn rounded-[4px] bg-navy text-navy-foreground hover:bg-navy/90 font-bold"
              onClick={() => scrollTo("#contacto")}
            >
              Planifica tu Visita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-btn rounded-[4px] border-border text-navy dark:text-foreground font-bold"
              onClick={() => scrollTo("#streaming")}
            >
              <Play className="w-4 h-4 mr-2" />
              Ver Video
            </Button>
          </div>

          <div className="hero-text-item flex flex-wrap gap-6 text-xs font-semibold text-foreground/70">
            {trustBadges.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: full-bleed photo with gradient toward the text side */}
      <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${worshipCommunity})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
