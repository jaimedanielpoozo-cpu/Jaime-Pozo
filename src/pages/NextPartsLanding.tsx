import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../nextparts/nextparts.css';
import NextPartsHero from '../nextparts/NextPartsHero';
import NextPartsAbout from '../nextparts/NextPartsAbout';
import NextPartsContact from '../nextparts/NextPartsContact';
import NextPartsCatalog from '../nextparts/NextPartsCatalog';
import NextPartsFooter from '../nextparts/NextPartsFooter';

export default function NextPartsLanding() {
  const [gateVisible, setGateVisible] = useState(true);
  const [catalogAtBottom, setCatalogAtBottom] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    document.title = 'Next Parts · Mayorista de Autopartes';

    function onMsg(e: MessageEvent) {
      if (e.data?.type === 'np-gate') setGateVisible(e.data.visible);
      if (e.data?.type === 'np-catalog-bottom') setCatalogAtBottom(e.data.atBottom);
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Al entrar al catálogo (o al salir de él) el scroll vuelve arriba del todo,
  // así queda el catálogo pegado a la parte superior de la ventana (sin
  // Home/Sobre nosotros/Contacto arriba) o, al cerrar sesión, arranca de
  // nuevo desde el Home. Se salta el primer render para no forzar el
  // scroll al cargar la página por primera vez.
  useLayoutEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    window.scrollTo(0, 0);
  }, [gateVisible]);

  return (
    <div className="np-theme" style={{ overflowX: 'clip' }}>
      {gateVisible && (
        <>
          <NextPartsHero />
          <NextPartsAbout />
          <NextPartsContact />
        </>
      )}
      <NextPartsCatalog />
      <NextPartsFooter visible={!gateVisible && catalogAtBottom} />
    </div>
  );
}
