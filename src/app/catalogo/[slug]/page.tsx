import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, AppWindow, CheckCircle2, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OtherSoftware } from "@/components/OtherSoftware";
import { Gallery } from "@/components/Gallery";
import { softwareCatalog, getSoftwareBySlug, whatsappLink, business } from "@/lib/content";

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

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.25),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Link
              href="/catalogo"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al catálogo
            </Link>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-neutral-950">
                <AppWindow size={26} />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{product.name}</h1>
                <p className="mt-2 max-w-xl text-white/70">{product.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">¿Qué incluye?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-neutral-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-500" size={19} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">¿Te interesa {product.name}?</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-600">
            Contanos sobre tu negocio y te contamos cómo instalarlo.
          </p>
          <a
            href={whatsappLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            <MessageCircle size={18} />
            Escribinos por WhatsApp
          </a>
        </section>

        <Gallery title="Capturas" images={product.screenshots} folder={`catalogo/${product.slug}`} />

        <OtherSoftware excludeSlug={product.slug} />
      </main>
      <Footer />
    </>
  );
}
