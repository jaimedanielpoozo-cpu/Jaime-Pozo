import FadeIn from '../components/FadeIn';

export default function NextPartsCatalog() {
  return (
    <section id="catalogo" className="bg-background pt-24 sm:pt-28">
      <FadeIn
        as="h2"
        y={40}
        className="px-6 text-center text-4xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl"
      >
        Catálog<em className="not-italic text-muted-foreground">o</em>
      </FadeIn>

      <FadeIn delay={0.15} y={24} className="mt-10 h-[85vh] w-full">
        <iframe
          src="/catalogo.html"
          title="Catálogo Next Parts"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </FadeIn>
    </section>
  );
}
