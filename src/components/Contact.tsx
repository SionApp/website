import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { CHURCH_INFO } from "@/data/church-info";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inputClass =
  "rounded-[4px] bg-navy border-navy-secondary text-white placeholder:text-navy-foreground/50 focus-visible:ring-primary";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="py-16 sm:py-20 bg-navy"
      style={{ perspective: "1200px" }}
    >
      <div className="container mx-auto px-4">
        <div className="contact-reveal text-center mb-12">
          <div className="text-xs font-bold tracking-[0.1em] text-primary mb-2">
            CONTÁCTANOS
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Estamos Aquí para Servirte
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <div className="contact-reveal bg-navy-secondary rounded-lg p-6 sm:p-7">
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <Input placeholder="Nombre completo" className={inputClass} />
              <Input placeholder="Teléfono" className={inputClass} />
            </div>
            <Input type="email" placeholder="Email" className={`${inputClass} mb-3`} />
            <Textarea
              placeholder="Tu mensaje..."
              className={`${inputClass} min-h-[110px] mb-4`}
            />
            <Button className="w-full rounded-[4px] bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              Enviar Mensaje
            </Button>
          </div>

          {/* Contact Information */}
          <div className="contact-reveal flex flex-col gap-4 text-text-on-navy text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-primary mb-0.5">Ubicación</div>
                {CHURCH_INFO.address}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-primary mb-0.5">Teléfono</div>
                {CHURCH_INFO.phone} (WhatsApp)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-primary mb-0.5">Email</div>
                {CHURCH_INFO.email}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <div className="font-bold text-primary mb-0.5">Horario de Oficina</div>
                {CHURCH_INFO.officeHours}
              </div>
            </div>

            <div className="flex gap-2.5 mt-1">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-navy-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-navy-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-navy-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
