import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Highlights } from "@/components/Highlights";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ImageSlot } from "@/components/ImageSlot";
import { WhatsAppButton, BrowserFrame, ExternalLink } from "@/components/ui";
import { ICONS } from "@/lib/icons";
import { softwareCatalog, getSoftwareBySlug, business } from "@/lib/content";

export function generateStaticParams() {
  return softwareCatalog.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getSoftwareBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${business.name}`,
    description: product.description,
  };
}

export default async function SoftwarePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getSoftwareBySlug(slug);
  if (!product) notFound();
  const folder = `catalogo/${product.slug}`;

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          back={{ href: "/catalogo", label: "Volver al catálogo" }}
          icon={ICONS[product.icon]}
          eyebrow={product.sector}
          title={product.name}
          tagline={product.tagline}
          aside={
            <div className="relative isolate">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-signal-soft/60" />
              <BrowserFrame address={product.url?.label ?? `${product.slug}.local`}>
                <div className="aspect-[16/10] bg-white">
                  <ImageSlot
                    image={product.screenshots[0]}
                    folder={folder}
                    className="object-top"
                    width={1440}
                    height={900}
                    priority
                  />
                </div>
              </BrowserFrame>
            </div>
          }
        >
          <WhatsAppButton message={product.whatsappMessage} />
          {product.url && <ExternalLink href={product.url.href} label={product.url.label} />}
        </PageHero>

        <section className="border-b border-line bg-ink py-12 text-paper">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p className="font-display max-w-3xl text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
              {product.hook}
            </p>
            <p className="inline-flex shrink-0 items-center gap-2 font-mono text-xs text-white/60">
              <span className="live-dot h-2 w-2 rounded-full bg-live text-live" />
              {product.status}
            </p>
          </div>
        </section>

        <Highlights items={product.highlights} />

        <Gallery title="Capturas" images={product.screenshots} folder={folder} variant="screen" />

        <div className="pt-20 md:pt-24">
          <CtaBand
            title={`¿Te interesa ${product.name}?`}
            text="Contanos sobre tu negocio y te mostramos cómo quedaría con tu nombre y tu logo."
            message={product.whatsappMessage}
          />
        </div>

        <RelatedLinks
          title="Otros sistemas"
          items={softwareCatalog
            .filter((s) => s.slug !== product.slug)
            .map((s) => ({
              href: `/catalogo/${s.slug}`,
              icon: s.icon,
              title: s.name,
              description: s.description,
            }))}
        />
      </main>
      <Footer />
    </>
  );
}
