import logo from '../assets/nextparts-logo.png';
import ivecoLogo from '../assets/brands/iveco.png';
import mercedesLogo from '../assets/brands/mercedes.png';
import scaniaLogo from '../assets/brands/scania.png';
import volvoLogo from '../assets/brands/volvo.png';

const brandSatellites = [
  { name: 'Iveco', src: ivecoLogo, className: 'left-[-12%] top-[4%] sm:left-[-18%] md:left-[-22%]', float: 'brand-float-1', delay: '0.5s' },
  { name: 'Mercedes-Benz', src: mercedesLogo, className: 'left-[2%] top-[62%] sm:left-[-2%] md:left-[-4%]', float: 'brand-float-2', delay: '0.65s' },
  { name: 'Scania', src: scaniaLogo, className: 'right-[2%] top-[62%] sm:right-[-2%] md:right-[-4%]', float: 'brand-float-3', delay: '0.8s' },
  { name: 'Volvo', src: volvoLogo, className: 'right-[-12%] top-[4%] sm:right-[-18%] md:right-[-22%]', float: 'brand-float-4', delay: '0.95s' },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Acerca de nosotros', href: '#nosotros' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function NextPartsHero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="lava-lamp-bg absolute inset-0 z-0">
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
        <div className="relative h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64">
          <img
            src={logo}
            alt="Next Parts"
            className="animate-fade-rise h-full w-full rounded-[2rem] shadow-2xl"
          />

          {brandSatellites.map((brand) => (
            <div key={brand.name} className={`absolute ${brand.className} ${brand.float}`}>
              <div
                className="brand-chip animate-fade-rise h-12 w-12 p-2 sm:h-16 sm:w-16 sm:p-2.5 md:h-[4.5rem] md:w-[4.5rem] md:p-3"
                style={{ animationDelay: brand.delay }}
              >
                <img src={brand.src} alt={brand.name} />
              </div>
            </div>
          ))}
        </div>

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
