import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";

/** Encabezado de las páginas internas (servicios, catálogo, fichas de sistemas). */
export function PageHero({
  back,
  icon: Icon,
  eyebrow,
  title,
  tagline,
  badge,
  children,
  aside,
}: {
  back?: { href: string; label: string };
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  tagline?: string;
  badge?: string;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="dots pointer-events-none absolute inset-0 text-ink/60 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 md:pb-24">
        {back && (
          <Link
            href={back.href}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-ink"
          >
            <ArrowLeft size={16} className="transition group-hover:-translate-x-1" />
            {back.label}
          </Link>
        )}
        <div className={`mt-10 grid gap-12 ${aside ? "lg:grid-cols-2 lg:items-center" : ""}`}>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {Icon && (
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-paper">
                  <Icon size={22} />
                </span>
              )}
              {eyebrow && <span className="label text-muted">{eyebrow}</span>}
              {badge && (
                <span className="label rounded-full bg-signal-soft px-2.5 py-1 !text-[0.65rem] text-signal-dark">
                  {badge}
                </span>
              )}
            </div>
            <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
              {title}
            </h1>
            {tagline && <p className="mt-6 max-w-xl text-xl leading-snug text-ink/70">{tagline}</p>}
            {children && <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">{children}</div>}
          </div>
          {aside && <div className="relative">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
