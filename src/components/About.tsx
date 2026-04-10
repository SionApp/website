import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Globe, ArrowRight } from "lucide-react";
import worshipCommunity from "@/assets/church-history.jpg";
import pastorSpeaking from "@/assets/pastor-enhanced.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = gsap.utils.toArray(".animate-on-scroll");

      sections.forEach((section: Element) => {
        gsap.fromTo(section,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            }
          }
        );
      });

      // Image Parallax
      const images = gsap.utils.toArray(".parallax-image");
      images.forEach((img: Element) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Compartimos el amor incondicional de Cristo"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos relaciones auténticas y duraderas"
    },
    {
      icon: BookOpen,
      title: "Verdad",
      description: "Fundamentados en la Palabra de Dios"
    },
    {
      icon: Globe,
      title: "Misión",
      description: "Llevamos el Evangelio a toda persona"
    }
  ];

  return (
    <section ref={sectionRef} id="nosotros" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Quiénes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos una iglesia cristiana evangélica comprometida con predicar el Evangelio
            y formar discípulos que transformen sus comunidades.
          </p>
        </div>

        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 animate-on-scroll">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Nuestra Historia
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hemos sido una luz en nuestra comunidad, predicando la Palabra de Dios
                con poder y dedicación. Comenzamos como un pequeño grupo de creyentes con el sueño
                de ver vidas transformadas por el poder del Evangelio.
              </p>
              <p>
                Hoy somos una familia de fe diversa y unida, comprometida con el crecimiento
                espiritual, el servicio a la comunidad y la expansión del Reino de Dios.
              </p>
            </div>
            {/* <Button variant="outline" size="lg" className="group bg-primary text-primary-foreground">
              Conoce Más de Nuestra Historia
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src={worshipCommunity}
                alt="Comunidad adorando juntos"
                className="parallax-image w-full h-[120%] object-cover -mt-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-32 animate-on-scroll">
          <h3 className="text-3xl font-bold text-center text-foreground mb-16">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <value.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pastor Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-on-scroll">
          <div className="lg:order-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Nuestro Pastor
              </h3>
              <h4 className="text-xl font-semibold text-primary">
                Pastor Othiel Morales
              </h4>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Con más de 30 años de ministerio, el Pastor Othiel ha dedicado su vida a
                predicar la Palabra de Dios con pasión y autenticidad. Su corazón por las
                almas perdidas y su amor por la iglesia local han sido pilares fundamentales
                de nuestro crecimiento.
              </p>
              <p>
                Junto a su esposa Mirian y sus dos hijos, forman una familia comprometida
                con el servicio a Dios y a la comunidad.
              </p>
            </div>
            {/* <Button variant="outline" size="lg" className="group bg-primary text-primary-foreground">
              Conoce al Equipo Pastoral
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button> */}
          </div>
          <div className="lg:order-1 relative group">
            <div className="absolute inset-0 bg-secondary rounded-2xl transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              <img
                src={pastorSpeaking}
                alt="Pastor predicando"
                className="parallax-image w-full h-[120%] object-cover -mt-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;