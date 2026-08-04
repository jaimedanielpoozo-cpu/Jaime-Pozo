import FadeIn from '../components/FadeIn';

const stats = [
  { value: '768+', label: 'Piezas en catálogo' },
  { value: '4', label: 'Marcas: Mercedes-Benz, Iveco, Scania, Volvo' },
  { value: 'USD', label: 'Precios en dólares' },
  { value: '24/7', label: 'Stock en tiempo real' },
];

export default function NextPartsAbout() {
  return (
    <section id="nosotros" className="min-h-screen bg-background px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <FadeIn
          as="h2"
          y={40}
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
            <FadeIn
              key={stat.label}
              delay={0.25 + i * 0.1}
              y={24}
              className="liquid-glass rounded-2xl border border-border/15 px-4 py-8"
            >
              <div className="text-3xl font-bold sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
