import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CHURCH_INFO } from "@/data/church-info";

gsap.registerPlugin(ScrollTrigger);

interface LiveStreamData {
  is_live?: boolean;
  youtube_video_id?: string;
  title?: string;
}

interface LiveStreamProps {
  isLive: boolean;
  liveData?: LiveStreamData | null;
}

/**
 * "En Vivo" section — always mounted (see Index.tsx). Alternates its two
 * cards' content based on `isLive` from useLiveStreamStatus instead of the
 * whole section being hidden/swapped for Newsletter like before.
 */
const LiveStream = ({ isLive, liveData }: LiveStreamProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".live-reveal",
        { y: 32, opacity: 0, rotationX: -8 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [isLive]);

  return (
    <section
      ref={sectionRef}
      id="streaming"
      className="py-14 sm:py-16 bg-navy"
      style={{ perspective: "1200px" }}
    >
      <div className="container mx-auto px-4">
        <div className="live-reveal text-center text-primary text-xs font-bold tracking-[0.08em] mb-2">
          GESTIONADO DESDE EL PANEL ADMIN
        </div>
        <h2 className="live-reveal text-center font-serif text-2xl sm:text-3xl font-bold text-navy-foreground mb-8">
          Culto en Vivo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Live / off-air card */}
          {isLive && liveData?.youtube_video_id ? (
            <div className="live-reveal tilt-3d bg-navy-secondary rounded-md overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-live text-live-foreground text-[10px] font-bold px-2.5 py-1 rounded-sm animate-pulse">
                  ● EN VIVO
                </span>
                <span className="text-white text-sm truncate">
                  {liveData.title || "Culto en Vivo"}
                </span>
              </div>
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${liveData.youtube_video_id}?autoplay=1&mute=1`}
                  title={liveData.title || "Iglesia Sion - Culto en Vivo"}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ) : (
            <div className="live-reveal tilt-3d bg-navy-secondary rounded-md overflow-hidden">
              <div className="px-4 py-3 flex items-center gap-2">
                <span className="inline-flex items-center bg-navy-secondary-foreground/20 text-navy-foreground text-[10px] font-bold px-2.5 py-1 rounded-sm">
                  FUERA DE VIVO
                </span>
                <span className="text-white text-sm">Próxima transmisión</span>
              </div>
              <div className="aspect-video flex flex-col items-center justify-center gap-1.5 text-navy-foreground">
                <span className="text-xs">Próximo culto</span>
                <span className="font-serif text-2xl font-bold text-primary">
                  Domingo · {CHURCH_INFO.sundayServiceTimes[0]}
                </span>
              </div>
            </div>
          )}

          {/* Companion card: always shows the full Sunday schedule */}
          <div className="live-reveal tilt-3d bg-navy-secondary rounded-md overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-2">
              <span className="inline-flex items-center bg-navy-secondary-foreground/20 text-navy-foreground text-[10px] font-bold px-2.5 py-1 rounded-sm">
                HORARIOS
              </span>
              <span className="text-white text-sm">Cultos Dominicales</span>
            </div>
            <div className="aspect-video flex flex-col items-center justify-center gap-3 text-navy-foreground">
              {CHURCH_INFO.sundayServiceTimes.map((time) => (
                <span key={time} className="text-sm font-mono text-navy-foreground/90">
                  Domingo · {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
