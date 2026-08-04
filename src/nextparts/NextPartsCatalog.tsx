import FadeIn from '../components/FadeIn';

export default function NextPartsCatalog() {
  return (
    <section id="catalogo" className="bg-background pt-24 sm:pt-28">
      <FadeIn
        as="h2"
        y={20}
        className="px-6 text-center text-lg font-medium uppercase tracking-widest text-muted-foreground"
      >
        Catálogo
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
