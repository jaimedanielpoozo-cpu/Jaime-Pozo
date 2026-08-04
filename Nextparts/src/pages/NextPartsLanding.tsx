import { useEffect } from 'react';
import '../nextparts/nextparts.css';
import NextPartsHero from '../nextparts/NextPartsHero';
import NextPartsAbout from '../nextparts/NextPartsAbout';
import NextPartsContact from '../nextparts/NextPartsContact';
import NextPartsCatalog from '../nextparts/NextPartsCatalog';
import NextPartsFooter from '../nextparts/NextPartsFooter';

export default function NextPartsLanding() {
  useEffect(() => {
    document.title = 'Next Parts · Mayorista de Autopartes';
  }, []);

  return (
    <div className="np-theme" style={{ overflowX: 'clip' }}>
      <NextPartsHero />
      <NextPartsAbout />
      <NextPartsContact />
      <NextPartsCatalog />
      <NextPartsFooter />
    </div>
  );
}
