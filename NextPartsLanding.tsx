import { useEffect, useState } from 'react';
import '../nextparts/nextparts.css';
import NextPartsHero from '../nextparts/NextPartsHero';
import NextPartsAbout from '../nextparts/NextPartsAbout';
import NextPartsContact from '../nextparts/NextPartsContact';
import NextPartsCatalog from '../nextparts/NextPartsCatalog';
import NextPartsFooter from '../nextparts/NextPartsFooter';

export default function NextPartsLanding() {
  const [gateVisible, setGateVisible] = useState(true);

  useEffect(() => {
    document.title = 'Next Parts · Mayorista de Autopartes';

    function onMsg(e: MessageEvent) {
      if (e.data?.type === 'np-gate') setGateVisible(e.data.visible);
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <div className="np-theme" style={{ overflowX: 'clip' }}>
      <NextPartsHero />
      <NextPartsAbout />
      <NextPartsContact />
      <NextPartsCatalog />
      {!gateVisible && <NextPartsFooter />}
    </div>
  );
}
