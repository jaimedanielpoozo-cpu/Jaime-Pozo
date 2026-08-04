import logo from '../assets/nextparts-logo.png';
import FadeIn from '../components/FadeIn';

export default function NextPartsFooter() {
  return (
    <FadeIn as="footer" y={24} className="border-t border-border/15 bg-background px-6 py-6 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Next Parts" className="h-8 w-8 rounded-lg" />
          <p className="max-w-xs text-xs text-muted-foreground">
            Mayorista de repuestos para camiones Mercedes-Benz, Iveco, Scania y Volvo.
          </p>
        </div>

        <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
          <a href="mailto:info@nextparts.com.ar" className="hover:text-foreground">
            info@nextparts.com.ar
          </a>
          <span className="hidden sm:inline">·</span>
          <span>Lun a vie de 8 a 18 hs</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="#nosotros" className="hover:text-foreground">
            Acerca de nosotros
          </a>
          <a href="#catalogo" className="hover:text-foreground">
            Catálogo
          </a>
          <a href="#contacto" className="hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-7xl border-t border-border/15 pt-3 text-center text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Next Parts. Todos los derechos reservados.
      </div>
    </FadeIn>
  );
}
