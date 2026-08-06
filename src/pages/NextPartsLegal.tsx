import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../nextparts/nextparts.css';
import FadeIn from '../components/FadeIn';
import logo from '../assets/nextparts-logo.png';

export default function NextPartsLegal() {
  useEffect(() => {
    document.title = 'Aviso Legal · Next Parts';
  }, []);

  return (
    <div className="np-theme min-h-screen bg-background" style={{ overflowX: 'clip' }}>
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Next Parts" className="h-9 w-9 rounded-lg" />
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground"
        >
          ← Volver al inicio
        </Link>
      </nav>

      <div className="mx-auto max-w-3xl px-6 pb-24 sm:px-10">
        <FadeIn as="h1" y={16} duration={0.6} className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">
          Aviso <em className="not-italic text-muted-foreground">Legal</em>
        </FadeIn>

        <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
          <p>
            next parts es un catálogo mayorista de repuestos para camiones Mercedes-Benz, Iveco,
            Scania y Volvo, destinado a talleres, casas de repuestos y empresas de flotas.
          </p>
          <p>
            Los precios y el stock exhibidos están sujetos a variación sin previo aviso y al tipo
            de cambio de referencia indicado en cada edición del catálogo. La información se
            ofrece a título orientativo y no constituye una oferta vinculante hasta su
            confirmación por parte de next parts.
          </p>
          <p>
            Las marcas, logos y nombres comerciales de terceros mencionados en el catálogo
            (Mercedes-Benz, Iveco, Scania, Volvo, entre otros) se utilizan únicamente con fines de
            identificación de compatibilidad de piezas y pertenecen a sus respectivos titulares.
          </p>
          <p>
            El acceso a la lista mayorista y a los precios requiere una cuenta autorizada. next
            parts se reserva el derecho de admisión y de suspender cuentas ante un uso indebido de
            la plataforma.
          </p>
          <p>
            Para consultas sobre este aviso legal, escribinos a{' '}
            <a
              href="mailto:info@nextparts.com.ar"
              className="text-foreground underline transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-muted-foreground"
            >
              info@nextparts.com.ar
            </a>
            .
          </p>
        </div>

        <div className="mt-16 border-t border-border/15 pt-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
