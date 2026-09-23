import { MapPin, Clock, AtSign, Mail, Phone, ArrowUpRight } from "lucide-react";
import { business, mapEmbedUrl } from "@/lib/content";
import { OpenStatus } from "@/components/OpenStatus";
import { SectionLabel, WhatsAppButton } from "@/components/ui";

export function Contact() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.address}, Argentina`)}`;

  const items = [
    { icon: Phone, label: "Teléfono", value: business.whatsappDisplay, href: `tel:+549${business.phone}` },
    { icon: Mail, label: "Email", value: business.email, href: `mailto:${business.email}` },
    { icon: AtSign, label: "Instagram", value: business.instagramHandle, href: business.instagram, external: true },
  ];

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-paper md:py-32">
      <div className="dots pointer-events-none absolute inset-0 text-white/20 [mask-image:radial-gradient(circle_at_0%_0%,black,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="05" tone="light">
          Contacto
        </SectionLabel>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="font-display text-[clamp(2.6rem,6.5vw,5.2rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            ¿Qué le pasa
            <br />
            a tu equipo<span className="text-signal">?</span>
          </h2>
          <div className="lg:justify-self-end">
            <p className="max-w-sm text-lg text-white/65">
              Escribinos, mandanos una foto y te respondemos con lo que necesitás saber.
            </p>
            <div className="mt-6">
              <WhatsAppButton message="Hola! Quiero hacer una consulta." size="lg">
                {business.whatsappDisplay}
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="label flex items-center gap-2 text-white/50">
                  <Clock size={14} /> Horarios
                </p>
                <OpenStatus tone="light" />
              </div>
              <dl className="mt-5 space-y-2">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 border-b border-dashed border-white/10 pb-2 last:border-0">
                    <dt className="text-white/65">{h.day}</dt>
                    <dd className="font-mono">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-signal"
            >
              <p className="label flex items-center gap-2 text-white/50">
                <MapPin size={14} /> Dirección
              </p>
              <p className="font-display mt-4 text-xl font-semibold leading-snug">{business.address}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-signal">
                Cómo llegar <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
            <ul className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 sm:col-span-2 lg:col-span-1">
              {items.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-4 py-4 transition hover:text-signal"
                  >
                    <Icon size={18} className="shrink-0 text-white/40" />
                    <span className="label w-24 shrink-0 text-white/45">{label}</span>
                    <span className="truncate">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-80 overflow-hidden rounded-3xl border border-white/10 lg:col-span-3">
            <iframe
              src={mapEmbedUrl()}
              title="Ubicación de Plug and Play"
              className="h-full min-h-80 w-full grayscale-[0.4] invert-[0.9] hue-rotate-180"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
