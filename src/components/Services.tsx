import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, serviceImage, softwareCatalog, type Service } from "@/lib/content";
import { ICONS } from "@/lib/icons";
import { ImageSlot } from "@/components/ImageSlot";
import { SectionLabel } from "@/components/ui";

/** Los servicios de reparación llevan foto grande; el resto, tarjetas compactas. */
const FEATURED = new Set(["reparacion-de-pcs", "reparacion-de-celulares"]);

function CardHeader({ service, tone = "dark" }: { service: Service; tone?: "dark" | "light" }) {
  const Icon = ICONS[service.icon];
  return (
    <div className="flex items-start justify-between gap-4">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${
          tone === "light" ? "bg-white/10 text-white" : "bg-ink text-paper"
        } transition group-hover:rotate-[-6deg] group-hover:bg-signal group-hover:text-white`}
      >
        <Icon size={20} />
      </div>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border transition group-hover:border-signal group-hover:bg-signal group-hover:text-white ${
          tone === "light" ? "border-white/20 text-white" : "border-ink/15"
        }`}
      >
        <ArrowUpRight size={17} />
      </span>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 md:py-32">
      <div className="grid gap-6 md:grid-cols-2 md:items-end">
        <div>
          <SectionLabel index="01">Servicios</SectionLabel>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
            Lo que hacemos,
            <br />
            <span className="text-muted">bien hecho.</span>
          </h2>
        </div>
        <p className="max-w-md text-lg text-ink/70 md:justify-self-end">
          Reparación con diagnóstico sin cargo, venta con asesoramiento real y software propio
          para negocios. Tocá cualquier servicio para ver el detalle.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {services.map((s) => {
          const href = `/servicios/${s.slug}`;

          if (FEATURED.has(s.slug)) {
            return (
              <Link
                key={s.slug}
                href={href}
                className="reveal group flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(17,18,20,0.35)] lg:col-span-3"
              >
                <div className="relative h-60 overflow-hidden md:h-72">
                  <ImageSlot
                    image={serviceImage(s.slug)}
                    folder="servicios"
                    className="transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <CardHeader service={s} />
                  <h3 className="font-display mt-6 text-2xl font-bold tracking-tight md:text-3xl">{s.title}</h3>
                  <p className="mt-2 text-ink/70">{s.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="rounded-full border border-line bg-paper px-3 py-1 text-xs text-ink/70">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          }

          if (s.slug === "saas-a-medida") {
            return (
              <Link
                key={s.slug}
                href={href}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl bg-ink p-7 text-paper transition hover:-translate-y-1 lg:col-span-2"
              >
                <div className="dots pointer-events-none absolute inset-0 text-white/40 [mask-image:radial-gradient(circle_at_100%_0%,black,transparent_70%)]" />
                <div className="relative flex flex-1 flex-col">
                  <CardHeader service={s} tone="light" />
                  <h3 className="font-display mt-6 text-2xl font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-white/65">{s.description}</p>
                  <div className="mt-auto pt-6">
                    <p className="label text-white/45">Sistemas propios</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {softwareCatalog.map((p) => (
                        <span key={p.slug} className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs">
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={s.slug}
              href={href}
              className={`reveal group relative flex flex-col rounded-3xl p-7 transition hover:-translate-y-1 lg:col-span-2 ${
                s.comingSoon ? "border-2 border-dashed border-line" : "border border-line bg-card"
              }`}
            >
              <CardHeader service={s} />
              {s.comingSoon && (
                <span className="label mt-6 inline-flex w-fit rounded-full bg-signal-soft px-2.5 py-1 !text-[0.65rem] text-signal-dark">
                  Próximamente
                </span>
              )}
              <h3 className={`font-display text-2xl font-bold tracking-tight ${s.comingSoon ? "mt-3" : "mt-6"}`}>
                {s.title}
              </h3>
              <p className="mt-2 text-ink/70">{s.description}</p>
              {s.teaser && <p className="mt-auto pt-5 font-mono text-xs text-muted">↳ {s.teaser}</p>}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
