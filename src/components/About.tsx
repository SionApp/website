import { useRef, useEffect } from "react";
import pastorSpeaking from "@/assets/pastor-enhanced.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pastor section only. The former "Quiénes Somos" intro paragraph, the
 * history block (now in Newsletter.tsx) and the values grid were dropped —
 * none of them appear in the redesign's home layout (design_handoff_sion_redesign),
 * which goes straight from "Nosotros" (activities+history) to this pastor block.
 */
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pastor-reveal",
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
    <section ref={sectionRef} className="bg-background py-14 sm:py-16" style={{ perspective: "1200px" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-8 items-center">
          <img
            src={pastorSpeaking}
            alt="Pastor Othiel Morales"
            className="pastor-reveal tilt-3d w-full sm:w-[220px] h-[220px] object-cover rounded-lg mx-auto"
          />
          <div className="pastor-reveal">
            <div className="text-xs font-bold text-primary tracking-[0.05em] mb-2">
              NUESTRO PASTOR
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy dark:text-foreground mb-2.5">
              Pastor Othiel Morales
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Con más de 30 años de ministerio, el Pastor Othiel ha dedicado su vida a
              predicar la Palabra de Dios con pasión y autenticidad. Junto a su esposa
              Mirian, dedicados a predicar la Palabra con pasión y autenticidad, pilares
              fundamentales de nuestro crecimiento como familia de fe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
