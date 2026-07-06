import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  MessageCircle,
  Wrench,
  Smartphone,
  ShoppingBag,
  Code2,
  Printer,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OtherServices } from "@/components/OtherServices";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { services, getServiceBySlug, whatsappLink, business } from "@/lib/content";

const SLUGS_WITH_GALLERY = new Set(["reparacion-de-pcs", "reparacion-de-celulares"]);

const ICONS: Record<string, LucideIcon> = {
  wrench: Wrench,
  smartphone: Smartphone,
  "shopping-bag": ShoppingBag,
  code: Code2,
  printer: Printer,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — ${business.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.25),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
            <Link
              href="/#servicios"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver a servicios
            </Link>
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-neutral-950">
                <Icon size={26} />
              </div>
              <div>
                {service.comingSoon && (
                  <span className="mb-2 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                    Próximamente
                  </span>
                )}
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">{service.title}</h1>
                <p className="mt-2 max-w-xl text-white/70">{service.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-2xl font-bold tracking-tight">¿Qué incluye?</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-neutral-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-blue-500" size={19} />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {service.process && (
          <section className="bg-neutral-50 py-16">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="text-2xl font-bold tracking-tight">Cómo trabajamos</h2>
              <ol className="mt-8 space-y-6">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-neutral-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {service.comingSoon ? "¿Querés que te avisemos?" : "¿Consultamos tu caso?"}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-600">
            {service.comingSoon
              ? "Dejanos tu contacto y te avisamos apenas esté disponible este servicio."
              : "Contanos qué necesitás y te respondemos a la brevedad."}
          </p>
          <a
            href={whatsappLink(service.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            <MessageCircle size={18} />
            Escribinos por WhatsApp
          </a>
        </section>

        {SLUGS_WITH_GALLERY.has(service.slug) && <WorkshopGallery />}

        <OtherServices excludeSlug={service.slug} />
      </main>
      <Footer />
    </>
  );
}
