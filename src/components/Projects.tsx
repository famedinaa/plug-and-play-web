import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { softwareCatalog, collaborations } from "@/lib/content";
import { ICONS } from "@/lib/icons";
import { ImageSlot } from "@/components/ImageSlot";
import { SectionLabel, BrowserFrame, ExternalLink } from "@/components/ui";

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <SectionLabel index="03">Proyectos</SectionLabel>
            <h2 className="font-display mt-5 text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">
              Software hecho acá,
              <br />
              <span className="text-muted">andando en negocios reales.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/70 md:justify-self-end">
            No son maquetas: cada sistema nació de un problema concreto de un cliente y hoy se
            puede instalar en tu negocio, con tu nombre y tu logo.
          </p>
        </div>

        <div className="mt-20 space-y-28">
          {softwareCatalog.map((p, i) => {
            const Icon = ICONS[p.icon];
            const flipped = i % 2 === 1;
            const folder = `catalogo/${p.slug}`;
            return (
              <article key={p.slug} className="reveal grid gap-12 lg:grid-cols-12 lg:items-center">
                <div className={`lg:col-span-5 ${flipped ? "lg:order-2 lg:col-start-8" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper">
                      <Icon size={20} />
                    </span>
                    <span className="label text-muted">{p.sector}</span>
                  </div>
                  <h3 className="font-display mt-6 text-5xl font-extrabold tracking-[-0.03em] md:text-6xl">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-xl leading-snug text-ink/80">{p.tagline}</p>
                  <ul className="mt-7 space-y-3">
                    {p.highlights.slice(0, 4).map((h) => (
                      <li key={h} className="flex gap-3 text-ink/75">
                        <Check size={18} className="mt-0.5 shrink-0 text-signal" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <Link
                      href={`/catalogo/${p.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-signal"
                    >
                      Ver ficha completa
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </Link>
                    {p.url && <ExternalLink href={p.url.href} label={p.url.label} />}
                  </div>
                  <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted">
                    <span className="live-dot h-2 w-2 rounded-full bg-live text-live" />
                    {p.status}
                  </p>
                </div>

                <div className={`relative isolate lg:col-span-7 ${flipped ? "lg:order-1 lg:col-start-1" : ""}`}>
                  <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-signal-soft/60 md:-inset-10" />
                  <BrowserFrame address={p.url?.label ?? `${p.slug}.local`}>
                    <div className="aspect-[16/10] bg-white">
                      <ImageSlot
                        image={p.screenshots[0]}
                        folder={folder}
                        className="object-top"
                        width={1440}
                        height={900}
                      />
                    </div>
                  </BrowserFrame>
                  {p.screenshots[1] && (
                    <BrowserFrame
                      className={`absolute -bottom-10 hidden w-[46%] sm:block ${flipped ? "-left-4" : "-right-4"}`}
                    >
                      <div className="aspect-[16/10] bg-white">
                        <ImageSlot
                          image={p.screenshots[1]}
                          folder={folder}
                          className="object-top"
                          width={720}
                          height={450}
                        />
                      </div>
                    </BrowserFrame>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-32 grid gap-4 md:grid-cols-2">
          {collaborations.map((c) => (
            <div key={c.name} className="reveal flex flex-col rounded-3xl border border-line bg-card p-8">
              <p className="label text-muted">{c.role}</p>
              <h3 className="font-display mt-4 text-3xl font-bold tracking-tight">{c.name}</h3>
              <p className="mt-2 text-ink/70">{c.description}</p>
              {c.url && (
                <div className="mt-6">
                  <ExternalLink href={c.url.href} label={c.url.label} />
                </div>
              )}
            </div>
          ))}
          <Link
            href="/servicios/saas-a-medida"
            className="reveal group flex flex-col justify-between rounded-3xl bg-signal p-8 text-white transition hover:bg-signal-dark"
          >
            <p className="label text-white/75">¿Tu rubro no está?</p>
            <div>
              <h3 className="font-display mt-4 text-3xl font-bold tracking-tight">
                Lo desarrollamos a medida.
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                Contanos tu caso
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
