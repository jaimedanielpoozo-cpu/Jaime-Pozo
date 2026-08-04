export default function NextPartsFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <span
            className="text-2xl tracking-tight text-foreground"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="font-bold">next</span> <span className="font-normal">parts</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Mayorista de repuestos para camiones Mercedes-Benz, Iveco, Scania y Volvo.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-widest text-foreground">Contacto</span>
          <a href="mailto:info@nextparts.com.ar" className="hover:text-foreground">
            info@nextparts.com.ar
          </a>
          <span>Lunes a viernes de 8 a 18 hs</span>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span className="text-xs uppercase tracking-widest text-foreground">Navegación</span>
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

      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Next Parts. Todos los derechos reservados.
      </div>
    </footer>
  );
}
