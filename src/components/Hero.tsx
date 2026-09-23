import { ArrowDown, MapPin } from "lucide-react";
import { business, heroImage, softwareCatalog } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";
import { WhatsAppButton, GhostButton, BrowserFrame } from "@/components/ui";

const TICKET = [
  ["Diagnóstico", "sin cargo"],
  ["Presupuesto", "antes de tocar nada"],
  ["Garantía", "por escrito"],
];

export function Hero() {
  const featured = softwareCatalog[0];

  return (
    <section className="relative overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0 text-ink/60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-14 sm:px-8 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10 lg:pb-28">
        <div>
          <p className="label inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-3 py-1.5 text-muted">
            <MapPin size={13} className="text-signal" />
            Federal, Entre Ríos
          </p>
          <h1 className="font-display mt-6 text-[clamp(2.6rem,7vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Reparamos tu tecnología.{" "}
            <span className="relative whitespace-nowrap text-signal">
              Programamos
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-signal/40"
              >
                <path d="M2 10 C 60 2, 120 2, 160 8 S 260 14, 298 4" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>{" "}
            tu negocio.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70">
            PCs, notebooks y celulares que vuelven a andar — y sistemas de gestión propios que ya
            funcionan en talleres, laboratorios y gimnasios. Todo desde un mismo local, con alguien
            que te atiende en persona.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton message="Hola! Quiero hacer una consulta." size="lg">
              Consultar por WhatsApp
            </WhatsAppButton>
            <GhostButton href="#servicios">
              Ver servicios
              <ArrowDown size={16} />
            </GhostButton>
          </div>
        </div>

        {/* Composición: foto del local + ticket de reparación + captura de un sistema propio. */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-ink sm:aspect-[5/5] lg:ml-10">
            <ImageSlot image={heroImage} folder="local" tone="dark" priority width={1200} height={1200} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-2 bottom-10 w-64 rotate-[-3deg] rounded-2xl border border-line bg-card p-5 shadow-[0_24px_48px_-24px_rgba(17,18,20,0.5)] sm:left-0 sm:w-72">
            <div className="flex items-center justify-between">
              <p className="label text-muted">Orden de trabajo</p>
              <span className="h-2 w-2 rounded-full bg-signal" />
            </div>
            <dl className="mt-4 space-y-2.5">
              {TICKET.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-3 border-b border-dashed border-line pb-2.5 last:border-0 last:pb-0">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="text-right text-sm font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="absolute -right-3 -top-6 hidden w-56 rotate-[4deg] sm:block">
            <BrowserFrame address={featured.url?.label ?? featured.name}>
              <div className="h-32 bg-white">
                <ImageSlot
                  image={featured.screenshots[0]}
                  folder={`catalogo/${featured.slug}`}
                  fit="cover"
                  className="object-top"
                  width={480}
                  height={320}
                />
              </div>
            </BrowserFrame>
          </div>
        </div>
      </div>
      <p className="sr-only">{business.description}</p>
    </section>
  );
}
