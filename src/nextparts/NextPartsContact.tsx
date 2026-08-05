import FadeIn from '../components/FadeIn';

export default function NextPartsContact() {
  return (
    <section
      id="contacto"
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center sm:px-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-4xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl"
      >
        Contact<em className="not-italic text-muted-foreground">o</em>
      </FadeIn>

      <FadeIn
        delay={0.15}
        y={20}
        className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        ¿Tenés una consulta o querés solicitar acceso mayorista? Escribinos, te respondemos a la
        brevedad.
      </FadeIn>

      <FadeIn
        delay={0.3}
        y={24}
        className="glass-card mt-12 flex w-full max-w-md flex-col gap-6 rounded-2xl border border-border/15 px-8 py-10"
      >
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
          <a
            href="mailto:info@nextparts.com.ar"
            className="mt-2 block text-lg text-foreground transition-colors hover:text-muted-foreground"
          >
            info@nextparts.com.ar
          </a>
        </div>
        <div className="h-px w-full bg-border/15" />
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Horario de atención
          </div>
          <div className="mt-2 text-lg text-foreground">Lunes a viernes de 8 a 18 hs</div>
        </div>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        <a
          href="mailto:info@nextparts.com.ar"
          className="glass-card mt-10 inline-block cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
        >
          Escribinos
        </a>
      </FadeIn>
    </section>
  );
}
