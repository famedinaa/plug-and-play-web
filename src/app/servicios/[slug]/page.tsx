import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Highlights } from "@/components/Highlights";
import { Process } from "@/components/Process";
import { CtaBand } from "@/components/CtaBand";
import { RelatedLinks } from "@/components/RelatedLinks";
import { WorkshopGallery } from "@/components/WorkshopGallery";
import { ImageSlot } from "@/components/ImageSlot";
import { WhatsAppButton } from "@/components/ui";
import { ICONS } from "@/lib/icons";
import { services, softwareCatalog, getServiceBySlug, serviceImage, business } from "@/lib/content";

const SLUGS_WITH_GALLERY = new Set(["reparacion-de-pcs", "reparacion-de-celulares"]);

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

  const isSoftware = service.slug === "saas-a-medida";

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          back={{ href: "/#servicios", label: "Volver a servicios" }}
          icon={ICONS[service.icon]}
          eyebrow="Servicio"
          badge={service.comingSoon ? "Próximamente" : undefined}
          title={service.title}
          tagline={service.tagline}
          aside={
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-line">
              <ImageSlot image={serviceImage(service.slug)} folder="servicios" width={1200} height={900} priority />
            </div>
          }
        >
          <WhatsAppButton message={service.whatsappMessage}>
            {service.comingSoon ? "Avisame cuando esté" : "Consultar por WhatsApp"}
          </WhatsAppButton>
        </PageHero>

        <Highlights items={service.highlights} />

        {service.process && <Process steps={service.process} />}

        {SLUGS_WITH_GALLERY.has(service.slug) && <WorkshopGallery />}

        {isSoftware && (
          <RelatedLinks
            title="Sistemas listos para instalar"
            items={softwareCatalog.map((p) => ({
              href: `/catalogo/${p.slug}`,
              icon: p.icon,
              title: p.name,
              description: p.description,
            }))}
          />
        )}

        <div className="pt-20 md:pt-24">
          <CtaBand
            title={service.comingSoon ? "¿Querés que te avisemos?" : "¿Consultamos tu caso?"}
            text={
              service.comingSoon
                ? "Escribinos y te avisamos apenas esté disponible este servicio."
                : "Contanos qué necesitás y te respondemos a la brevedad."
            }
            message={service.whatsappMessage}
          />
        </div>

        <RelatedLinks
          title="Otros servicios"
          items={services
            .filter((s) => s.slug !== service.slug)
            .map((s) => ({
              href: `/servicios/${s.slug}`,
              icon: s.icon,
              title: s.title,
              description: s.description,
              badge: s.comingSoon ? "Próximamente" : undefined,
            }))}
        />
      </main>
      <Footer />
    </>
  );
}
