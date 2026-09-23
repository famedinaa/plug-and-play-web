import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ImageSlot } from "@/components/ImageSlot";
import { BrowserFrame, ExternalLink } from "@/components/ui";
import { ICONS } from "@/lib/icons";
import { business, softwareCatalog } from "@/lib/content";

export const metadata: Metadata = {
  title: `Catálogo de software — ${business.name}`,
  description: "Sistemas propios, listos para instalar en tu negocio.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Catálogo de software"
          title="Sistemas listos para tu negocio."
          tagline="Además del desarrollo a medida, tenemos sistemas propios que podés instalar hoy, con tu nombre y tu logo."
        />

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softwareCatalog.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <article
                  key={s.slug}
                  className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(17,18,20,0.4)]"
                >
                  <div className="bg-signal-soft/60 p-5 pb-0">
                    <BrowserFrame className="translate-y-2 rounded-b-none transition group-hover:translate-y-0">
                      <div className="aspect-[16/10] bg-white">
                        <ImageSlot
                          image={s.screenshots[0]}
                          folder={`catalogo/${s.slug}`}
                          className="object-top"
                          width={720}
                          height={450}
                        />
                      </div>
                    </BrowserFrame>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper">
                        <Icon size={18} />
                      </span>
                      <span className="label text-muted">{s.sector}</span>
                    </div>
                    <h2 className="font-display mt-5 text-3xl font-bold tracking-tight">
                      {/* El link cubre toda la tarjeta; el link externo queda por encima. */}
                      <Link href={`/catalogo/${s.slug}`} className="after:absolute after:inset-0">
                        {s.name}
                      </Link>
                    </h2>
                    <p className="mt-2 text-ink/70">{s.description}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
                        Ver ficha
                        <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                      </span>
                      {s.url && (
                        <span className="relative z-10">
                          <ExternalLink href={s.url.href} label={s.url.label} />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <CtaBand
          title="¿No encontrás lo que necesitás?"
          text="También hacemos desarrollo de software a medida para tu negocio."
          message="Hola! Quiero consultar por un desarrollo de software a medida."
        />
      </main>
      <Footer />
    </>
  );
}
