import logo from '../assets/nextparts-logo.png';
import FadeIn from '../components/FadeIn';

export default function NextPartsFooter() {
  return (
    <FadeIn as="footer" y={16} amount={0.5} className="border-t border-border/15 bg-background px-6 py-4 sm:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="Next Parts" className="h-6 w-6 rounded-md" />
          <span className="hidden sm:inline">Mayorista de repuestos para camiones.</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <a href="mailto:info@nextparts.com.ar" className="hover:text-foreground">
            info@nextparts.com.ar
          </a>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Lun a vie 8–18 hs</span>
          <a href="#nosotros" className="hover:text-foreground">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-foreground">
            Contacto
          </a>
        </div>

        <span className="hidden text-[10px] sm:inline">
          © {new Date().getFullYear()} Next Parts
        </span>
      </div>
    </FadeIn>
  );
}
