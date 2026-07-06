import { whatsappLink } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/70">
          Reparación · Tecnología · Próximamente SaaS e impresión 3D
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          Le damos otra vida a tus dispositivos.
        </h1>
        <p className="max-w-xl text-lg text-white/70">
          Reparación de PCs y celulares, venta de artículos de tecnología, y muy pronto desarrollo
          de software a medida e impresión 3D — todo en un mismo lugar.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={whatsappLink("Hola! Quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Consultar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
