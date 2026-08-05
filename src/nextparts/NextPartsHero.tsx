import { useEffect, useRef } from 'react';
import logo from '../assets/nextparts-logo.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Acerca de nosotros', href: '#nosotros' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function NextPartsHero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el || !('IntersectionObserver' in window)) return;
    // Pausa la animación del fondo cuando el Hero sale de pantalla, para
    // no seguir gastando GPU en un blur animado que no se está viendo
    // mientras se scrollea a "Acerca de nosotros" o al catálogo.
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle('paused', !entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div ref={bgRef} className="lava-lamp-bg absolute inset-0 z-0">
        <span className="lava-blob lava-blob-1" />
        <span className="lava-blob lava-blob-2" />
        <span className="lava-blob lava-blob-3" />
        <span className="lava-blob lava-blob-4" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-8 py-6">
        <img src={logo} alt="Next Parts" className="h-11 w-11 rounded-xl" />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={
                i === 0
                  ? 'text-sm text-foreground'
                  : 'text-sm text-muted-foreground transition-colors hover:text-foreground'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#catalogo"
          className="liquid-glass cursor-pointer rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
        >
          Ver catálogo
        </a>
      </nav>

      <div className="relative z-10 flex flex-col items-center px-6 pb-40 pt-20 text-center">
        <img
          src={logo}
          alt="Next Parts"
          className="animate-fade-rise h-40 w-40 rounded-[2rem] shadow-2xl sm:h-56 sm:w-56 md:h-64 md:w-64"
        />

        <h1 className="animate-fade-rise mt-12 max-w-7xl text-5xl font-bold leading-[0.95] tracking-[-2.46px] sm:text-7xl md:text-8xl">
          La nueva era del <em className="not-italic text-muted-foreground">abastecimiento de autopartes.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Calidad, tecnología y confianza para talleres, casas de repuestos y empresas de flotas.
        </p>

        <a
          href="#catalogo"
          className="liquid-glass animate-fade-rise-delay-2 mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
        >
          Ver catálogo
        </a>
      </div>
    </section>
  );
}
