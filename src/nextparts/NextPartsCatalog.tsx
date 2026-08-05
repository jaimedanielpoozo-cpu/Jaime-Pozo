import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function NextPartsCatalog() {
  const [gateVisible, setGateVisible] = useState(true);

  useEffect(() => {
    function onMsg(e: MessageEvent) {
      if (e.data?.type === 'np-gate') setGateVisible(e.data.visible);
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <section id="catalogo" className={`bg-background ${gateVisible ? '' : 'pt-4 sm:pt-6'}`}>
      {!gateVisible && (
        <FadeIn
          as="h2"
          y={14}
          className="px-6 text-center text-lg font-medium uppercase tracking-widest text-muted-foreground"
        >
          Catálogo
        </FadeIn>
      )}

      <div className={gateVisible ? 'h-screen w-full' : 'mt-2 h-screen w-full'}>
        <iframe
          src="/catalogo.html"
          title="Catálogo Next Parts"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
