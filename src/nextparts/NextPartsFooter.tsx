import { Link } from 'react-router-dom';
import logo from '../assets/nextparts-logo.png';

export default function NextPartsFooter({ visible }: { visible: boolean }) {
  return (
    <footer
      className={`overflow-hidden border-t border-border/15 bg-background transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-xs text-muted-foreground sm:px-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Next Parts" className="h-5 w-5 rounded-md" />
          <span className="hidden sm:inline">Mayorista de repuestos para camiones.</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <a href="mailto:info@nextparts.com.ar" className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground">
            info@nextparts.com.ar - © 2026 Todos los derechos reservados.
          </a>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Lun a vie 8–18 hs</span>
          <a href="#nosotros" className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground">
            Nosotros
          </a>
          <a href="#contacto" className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground">
            Contacto
          </a>
          <Link to="/politica-de-privacidad" className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground">
            Política de Privacidad
          </Link>
          <Link to="/aviso-legal" className="transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground">
            Aviso Legal
          </Link>
        </div>

        <span className="hidden text-[10px] sm:inline">
          © {new Date().getFullYear()} Next Parts
        </span>
      </div>
    </footer>
  );
}
