import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import churchHeroEnhanced from "@/assets/church-hero-enhanced.jpg";
import pastorEnhanced from "@/assets/pastor-enhanced.jpg";
import churchHistory from "@/assets/church-history.jpg";
import worshipCommunity from "@/assets/worship-community.jpg";

gsap.registerPlugin(ScrollTrigger);

interface GalleryTile {
  id: number;
  src: string;
  caption: string;
  className: string;
}

const tiles: GalleryTile[] = [
  { id: 1, src: churchHeroEnhanced, caption: "Culto Dominical", className: "col-span-2 row-span-2" },
  { id: 2, src: pastorEnhanced, caption: "Pastor Othiel", className: "" },
  { id: 3, src: churchHistory, caption: "Nuestra Historia", className: "" },
  { id: 4, src: worshipCommunity, caption: "Comunidad Adorando", className: "row-span-2" },
  { id: 5, src: churchHistory, caption: "Vida en Comunidad", className: "" },
];

const Gallery = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-tile",
        { y: 32, opacity: 0, rotationX: -8, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="bg-navy py-16 sm:py-20 text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">Galería</h1>
        <p className="text-text-on-navy text-sm max-w-xl mx-auto">
          Momentos de nuestra familia de fe: cultos, comunidad e historia.
        </p>
      </div>

      <main className="container mx-auto px-4 py-14 sm:py-16 flex-1">
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] sm:auto-rows-[220px] gap-4"
          style={{ perspective: "1200px" }}
        >
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className={`gallery-tile tilt-3d group relative rounded-lg overflow-hidden cursor-pointer ${tile.className}`}
            >
              <img
                src={tile.src}
                alt={tile.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 text-white text-sm font-semibold translate-y-1.5 opacity-85 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {tile.caption}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
