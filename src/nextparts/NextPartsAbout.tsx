import FadeIn from '../components/FadeIn';
import ivecoLogo from '../assets/brands/iveco.png';
import mercedesLogo from '../assets/brands/mercedes.png';
import scaniaLogo from '../assets/brands/scania.png';
import volvoLogo from '../assets/brands/volvo.png';

const stats = [
  { value: '768+', label: 'Piezas en catálogo' },
  { value: '4', label: 'Marcas: Mercedes-Benz, Iveco, Scania, Volvo' },
  { value: 'USD', label: 'Precios en dólares' },
  { value: '24/7', label: 'Stock en tiempo real' },
];

const brands = [
  { name: 'Mercedes-Benz', src: mercedesLogo },
  { name: 'Iveco', src: ivecoLogo },
  { name: 'Scania', src: scaniaLogo },
  { name: 'Volvo', src: volvoLogo },
];

export default function NextPartsAbout() {
  return (
    <section id="nosotros" className="min-h-screen bg-background px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <FadeIn
          as="h2"
          y={40}
          blur
          className="text-4xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl"
        >
          Acerca de <em className="not-italic text-muted-foreground">nosotros</em>
        </FadeIn>

        <FadeIn
          delay={0.15}
          y={20}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Next Parts es un mayorista de repuestos para camiones Mercedes-Benz, Iveco, Scania y
          Volvo. Trabajamos con talleres, casas de repuestos y empresas de flotas, combinando
          tecnología y un catálogo siempre actualizado para que encuentres la pieza correcta sin
          demoras.
        </FadeIn>

        <div className="mt-16 grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.25 + i * 0.1} y={24}>
              <div className="glass-card h-full rounded-2xl border border-border/15 px-4 py-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_16px_40px_rgba(1,47,158,0.28)]">
                <div className="text-3xl font-bold sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 sm:gap-5">
          {brands.map((brand, i) => (
            <FadeIn key={brand.name} delay={0.55 + i * 0.08} y={16} className="h-16 w-24 sm:h-20 sm:w-28">
              <div className="brand-chip flex h-full w-full items-center justify-center p-3 sm:p-4">
                <img src={brand.src} alt={brand.name} className="h-full w-full object-contain" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
