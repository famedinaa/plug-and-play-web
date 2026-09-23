import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ICONS } from "@/lib/icons";
import { SectionLabel } from "@/components/ui";

export interface RelatedItem {
  href: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

/** Grilla de "Otros servicios" / "Otros sistemas" al pie de las páginas internas. */
export function RelatedLinks({ title, items }: { title: string; items: RelatedItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Seguí mirando</SectionLabel>
        <h2 className="font-display mt-5 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = ICONS[it.icon];
            return (
              <Link
                key={it.href}
                href={it.href}
                className="group flex flex-col rounded-3xl border border-line bg-card p-6 transition hover:-translate-y-1 hover:border-ink"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-paper transition group-hover:bg-signal group-hover:text-on-signal">
                    <Icon size={18} />
                  </span>
                  <ArrowUpRight size={18} className="text-muted transition group-hover:text-signal" />
                </div>
                <p className="font-display mt-5 text-lg font-semibold tracking-tight">{it.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-ink/65">{it.description}</p>
                {it.badge && (
                  <span className="label mt-4 w-fit rounded-full bg-signal-soft px-2 py-0.5 !text-[0.6rem] text-signal">
                    {it.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
