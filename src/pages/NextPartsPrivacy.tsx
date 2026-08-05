import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../nextparts/nextparts.css';
import logo from '../assets/nextparts-logo.png';

export default function NextPartsPrivacy() {
  useEffect(() => {
    document.title = 'Política de Privacidad · Next Parts';
  }, []);

  return (
    <div className="np-theme min-h-screen bg-background" style={{ overflowX: 'clip' }}>
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Next Parts" className="h-9 w-9 rounded-lg" />
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver al inicio
        </Link>
      </nav>

      <div className="mx-auto max-w-3xl px-6 pb-24 sm:px-10">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">
          Política de <em className="not-italic text-muted-foreground">Privacidad</em>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Última actualización: 5 de agosto de 2026</p>

        <p className="mt-8 leading-relaxed text-muted-foreground">
          En Next Parts nos comprometemos a proteger la privacidad de las personas que utilizan
          nuestro sitio web y nuestros servicios.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          La presente Política de Privacidad explica qué información podemos recopilar a través
          del sitio web{' '}
          <a
            href="https://catalogo-nextparts-1.netlify.app/"
            className="text-foreground underline hover:text-muted-foreground"
          >
            https://catalogo-nextparts-1.netlify.app/
          </a>
          , con qué finalidad la utilizamos, cómo la protegemos y cuáles son los derechos de los
          titulares de los datos.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          El tratamiento de datos personales se realiza de acuerdo con la normativa argentina
          aplicable, incluyendo la Ley N.º 25.326 de Protección de los Datos Personales y su
          normativa reglamentaria.
        </p>

        <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              1. Responsable del tratamiento
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                El responsable del tratamiento de los datos personales recopilados a través del
                sitio es:
              </p>
              <p className="text-foreground">Next Parts</p>
              <p>Razón social: [COMPLETAR RAZÓN SOCIAL]</p>
              <p>CUIT: [COMPLETAR CUIT]</p>
              <p>Domicilio legal: [COMPLETAR DOMICILIO]</p>
              <p>Actividad: comercialización mayorista de repuestos para vehículos y camiones.</p>
              <p>
                Sitio web:{' '}
                <a
                  href="https://catalogo-nextparts-1.netlify.app/"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  https://catalogo-nextparts-1.netlify.app/
                </a>
              </p>
              <p>
                Correo electrónico de contacto:{' '}
                <a
                  href="mailto:info@nextparts.com.ar"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  info@nextparts.com.ar
                </a>
              </p>
              <p>
                Para consultas relacionadas específicamente con privacidad y protección de datos,
                los usuarios podrán comunicarse a través del correo electrónico indicado.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              2. ¿Qué datos podemos recopilar?
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Dependiendo de cómo utilices nuestro sitio, podemos recopilar diferentes tipos de
                información.
              </p>
              <p className="font-semibold text-foreground">
                Datos proporcionados directamente por el usuario
              </p>
              <p>
                Cuando una persona solicita acceso al catálogo, se comunica con nosotros o completa
                un formulario, podemos recopilar:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Nombre y apellido.</li>
                <li>Correo electrónico.</li>
                <li>Número de teléfono.</li>
                <li>Empresa.</li>
                <li>Información comercial proporcionada voluntariamente.</li>
                <li>Información necesaria para gestionar una solicitud de acceso al catálogo.</li>
                <li>Cualquier otro dato que el usuario decida proporcionar voluntariamente.</li>
              </ul>
              <p>No solicitamos datos personales sensibles para utilizar el catálogo.</p>
              <p className="font-semibold text-foreground">Datos de navegación</p>
              <p>
                Cuando una persona visita nuestro sitio, determinadas herramientas tecnológicas
                pueden recopilar información relacionada con la navegación, como:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Dirección IP.</li>
                <li>Tipo y versión de navegador.</li>
                <li>Sistema operativo.</li>
                <li>Dispositivo utilizado.</li>
                <li>Fecha y hora de acceso.</li>
                <li>Páginas visitadas.</li>
                <li>Tiempo de permanencia.</li>
                <li>Interacciones realizadas dentro del sitio.</li>
                <li>Información técnica relacionada con el funcionamiento y seguridad del sitio.</li>
                <li>Información relacionada con campañas publicitarias y su rendimiento.</li>
              </ul>
              <p>
                Parte de esta información puede ser recopilada mediante cookies, píxeles,
                identificadores y tecnologías similares.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              3. ¿Para qué utilizamos los datos?
            </h2>
            <div className="mt-3 space-y-3">
              <p>Los datos personales podrán ser utilizados para las siguientes finalidades:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Gestionar solicitudes de acceso al catálogo mayorista.</li>
                <li>Identificar y administrar usuarios autorizados.</li>
                <li>Responder consultas y solicitudes comerciales.</li>
                <li>Comunicarnos con clientes y potenciales clientes.</li>
                <li>Brindar información sobre productos y servicios.</li>
                <li>Gestionar solicitudes de cotización.</li>
                <li>Mejorar el funcionamiento y contenido del sitio.</li>
                <li>Analizar estadísticas de utilización del sitio.</li>
                <li>Detectar errores, abusos o actividades potencialmente fraudulentas.</li>
                <li>Mantener la seguridad del sitio y de las cuentas.</li>
                <li>Medir el rendimiento de campañas publicitarias.</li>
                <li>
                  Crear audiencias publicitarias o realizar acciones de remarketing, cuando
                  corresponda y de acuerdo con las preferencias y permisos aplicables.
                </li>
                <li>
                  Realizar acciones de marketing y comunicación comercial cuando exista una base
                  legal adecuada para ello.
                </li>
              </ul>
              <p>
                Los datos serán utilizados para finalidades determinadas, legítimas y relacionadas
                con los servicios ofrecidos. La Ley 25.326 exige que la información sea adecuada,
                pertinente y no excesiva respecto de la finalidad para la cual fue recopilada.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              4. Google Analytics
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                El sitio puede utilizar Google Analytics, un servicio de análisis web proporcionado
                por Google.
              </p>
              <p>
                Google Analytics permite obtener información estadística sobre cómo los visitantes
                utilizan el sitio, por ejemplo:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>cantidad de visitantes;</li>
                <li>páginas consultadas;</li>
                <li>duración de las visitas;</li>
                <li>dispositivo utilizado;</li>
                <li>navegador;</li>
                <li>origen aproximado del tráfico;</li>
                <li>interacciones realizadas en el sitio;</li>
                <li>información relacionada con campañas publicitarias.</li>
              </ul>
              <p>
                Google Analytics utiliza cookies y otros identificadores para medir las
                interacciones de los visitantes. Google indica que los clientes de Analytics no
                deben enviar información personal identificable a Analytics.
              </p>
              <p>
                La configuración de Analytics puede incluir mecanismos de consentimiento que
                permiten respetar la decisión del usuario respecto de determinadas categorías de
                almacenamiento y medición.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              5. Meta Pixel
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                El sitio puede utilizar Meta Pixel, herramienta proporcionada por Meta Platforms,
                Inc. y/o sus empresas vinculadas.
              </p>
              <p>Meta Pixel permite:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>medir conversiones;</li>
                <li>conocer el rendimiento de campañas publicitarias;</li>
                <li>crear o utilizar audiencias publicitarias;</li>
                <li>realizar campañas de remarketing;</li>
                <li>analizar determinadas interacciones de los visitantes con el sitio.</li>
              </ul>
              <p>
                La utilización de estas tecnologías puede implicar el tratamiento de
                identificadores, información del dispositivo, navegación e interacciones con el
                sitio.
              </p>
              <p>
                Las herramientas publicitarias de terceros se encuentran sujetas, además, a las
                políticas de privacidad de sus respectivos proveedores.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              6. Cookies y tecnologías similares
            </h2>
            <div className="mt-3 space-y-3">
              <p>El sitio puede utilizar cookies y tecnologías similares para:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>permitir el funcionamiento correcto del sitio;</li>
                <li>mantener determinadas preferencias;</li>
                <li>mejorar la experiencia de navegación;</li>
                <li>obtener estadísticas;</li>
                <li>medir campañas publicitarias;</li>
                <li>realizar acciones de publicidad y remarketing.</li>
              </ul>
              <p>Las cookies pueden ser propias o pertenecer a terceros proveedores de servicios.</p>
              <p>
                Cuando corresponda, el usuario podrá aceptar, rechazar o configurar determinadas
                categorías de cookies mediante el mecanismo de consentimiento disponible en el
                sitio.
              </p>
              <p>
                Google explica que, cuando el almacenamiento de Analytics o publicidad se encuentra
                rechazado mediante mecanismos de consentimiento, las etiquetas pueden modificar su
                comportamiento y limitar el uso de cookies correspondientes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              7. Formularios
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Cuando el usuario completa un formulario disponible en el sitio, los datos
                proporcionados serán utilizados exclusivamente para la finalidad informada en el
                momento de su recopilación.
              </p>
              <p>
                Por ejemplo, si una persona solicita acceso al catálogo, los datos podrán
                utilizarse para:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>evaluar la solicitud;</li>
                <li>crear o habilitar una cuenta;</li>
                <li>comunicarse con el solicitante;</li>
                <li>
                  brindar información comercial relacionada con los productos y servicios de Next
                  Parts.
                </li>
              </ul>
              <p>
                El envío de información a través de un formulario implica que el usuario
                proporciona voluntariamente los datos solicitados.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              8. Compartición de información con terceros
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Next Parts podrá utilizar proveedores tecnológicos necesarios para operar el sitio
                y prestar sus servicios.
              </p>
              <p>Entre ellos pueden encontrarse proveedores de:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>alojamiento web;</li>
                <li>bases de datos;</li>
                <li>formularios;</li>
                <li>analítica web;</li>
                <li>publicidad digital;</li>
                <li>correo electrónico;</li>
                <li>seguridad;</li>
                <li>infraestructura tecnológica.</li>
              </ul>
              <p>
                Actualmente el sitio puede utilizar servicios tecnológicos de terceros, incluyendo
                Netlify, Supabase, Google y Meta, dependiendo de las funcionalidades activas.
              </p>
              <p>
                Estos proveedores pueden procesar determinada información en calidad de proveedores
                tecnológicos y conforme a sus propias políticas y condiciones.
              </p>
              <p>No comercializamos ni vendemos los datos personales de nuestros usuarios a terceros.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              9. Transferencias internacionales
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Algunos de los proveedores tecnológicos utilizados por el sitio pueden almacenar o
                procesar información en servidores ubicados fuera de Argentina.
              </p>
              <p>
                En consecuencia, determinados datos pueden ser tratados internacionalmente por
                proveedores tecnológicos necesarios para prestar sus servicios.
              </p>
              <p>
                Cuando corresponda, dichas transferencias estarán sujetas a las condiciones y
                mecanismos establecidos por los proveedores y la normativa aplicable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              10. Seguridad
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Adoptamos medidas técnicas y organizativas razonables destinadas a proteger los
                datos personales contra:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>acceso no autorizado;</li>
                <li>pérdida;</li>
                <li>alteración;</li>
                <li>divulgación;</li>
                <li>destrucción;</li>
                <li>uso indebido.</li>
              </ul>
              <p>Sin embargo, ningún sistema informático puede garantizar una seguridad absoluta.</p>
              <p>
                Los usuarios también son responsables de mantener la confidencialidad de sus
                credenciales de acceso y de no compartir sus contraseñas con terceros.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              11. Conservación de los datos
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Los datos personales serán conservados durante el tiempo necesario para cumplir las
                finalidades para las cuales fueron recopilados.
              </p>
              <p>
                Cuando los datos ya no sean necesarios, serán eliminados, anonimizados o
                conservados cuando exista una obligación legal que justifique su mantenimiento.
              </p>
              <p>
                En el caso de cuentas de acceso al catálogo, podremos conservar determinados datos
                mientras la cuenta se encuentre activa o mientras resulte necesario para mantener
                la relación comercial, atender obligaciones legales o resolver eventuales reclamos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              12. Derechos de los titulares
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                De acuerdo con la normativa argentina, las personas titulares de datos personales
                tienen derecho, entre otros, a:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>conocer qué datos personales poseen;</li>
                <li>solicitar acceso a sus datos;</li>
                <li>solicitar la rectificación de datos incorrectos;</li>
                <li>solicitar la actualización de datos;</li>
                <li>solicitar la supresión cuando corresponda;</li>
                <li>conocer la finalidad del tratamiento;</li>
                <li>conocer quién es el responsable del tratamiento.</li>
              </ul>
              <p>
                La AAIP reconoce estos derechos y establece mecanismos para reclamar cuando un
                responsable no responde adecuadamente a una solicitud de acceso, rectificación o
                supresión.
              </p>
              <p>
                Para ejercer estos derechos, el usuario podrá comunicarse con:{' '}
                <a
                  href="mailto:info@nextparts.com.ar"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  info@nextparts.com.ar
                </a>
              </p>
              <p>
                La solicitud deberá indicar claramente qué derecho desea ejercer y proporcionar
                información suficiente para identificar la solicitud.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              13. Publicidad y comunicaciones comerciales
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Next Parts podrá utilizar información de contacto proporcionada voluntariamente
                para enviar comunicaciones relacionadas con productos, servicios, novedades,
                promociones o actividades comerciales cuando exista una base legal que lo permita.
              </p>
              <p>El usuario podrá solicitar en cualquier momento dejar de recibir comunicaciones comerciales.</p>
              <p>
                La solicitud de baja de comunicaciones comerciales no necesariamente implicará la
                eliminación de otros datos que debamos conservar por obligaciones legales,
                contractuales o de seguridad.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              14. Menores de edad
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                El sitio está dirigido principalmente a personas mayores de edad y a empresas o
                profesionales que solicitan acceso a un catálogo mayorista.
              </p>
              <p>No buscamos recopilar deliberadamente datos personales de menores de edad.</p>
              <p>
                Si un representante legal considera que un menor proporcionó información personal
                sin autorización, podrá comunicarse con nosotros para solicitar su revisión y
                eventual eliminación cuando corresponda.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              15. Enlaces a sitios de terceros
            </h2>
            <div className="mt-3 space-y-3">
              <p>El sitio puede contener enlaces a páginas web, redes sociales o servicios de terceros.</p>
              <p>
                Next Parts no es responsable por las prácticas de privacidad, contenido o seguridad
                de sitios externos.
              </p>
              <p>
                Recomendamos consultar las políticas de privacidad de cada tercero antes de
                proporcionar información personal.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              16. Cambios en esta Política de Privacidad
            </h2>
            <div className="mt-3 space-y-3">
              <p>Podremos actualizar esta Política de Privacidad cuando sea necesario para reflejar cambios en:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>nuestros servicios;</li>
                <li>las herramientas utilizadas;</li>
                <li>las tecnologías empleadas;</li>
                <li>la legislación aplicable;</li>
                <li>nuestras prácticas de tratamiento de datos.</li>
              </ul>
              <p>La versión vigente será publicada en esta página indicando su fecha de actualización.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              17. Contacto
            </h2>
            <div className="mt-3 space-y-3">
              <p>
                Para consultas relacionadas con esta Política de Privacidad o con el tratamiento de
                datos personales:
              </p>
              <p className="text-foreground">Next Parts</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:info@nextparts.com.ar"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  info@nextparts.com.ar
                </a>
              </p>
              <p>
                Sitio:{' '}
                <a
                  href="https://catalogo-nextparts-1.netlify.app/"
                  className="text-foreground underline hover:text-muted-foreground"
                >
                  https://catalogo-nextparts-1.netlify.app/
                </a>
              </p>
              <p className="font-semibold text-foreground">Autoridad de aplicación</p>
              <p>
                La Agencia de Acceso a la Información Pública (AAIP) es la autoridad de aplicación
                de la Ley N.º 25.326 en Argentina. La normativa reconoce derechos de acceso,
                rectificación y supresión de datos personales.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-border/15 pt-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
