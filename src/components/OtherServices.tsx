import Link from "next/link";
import { Wrench, Smartphone, ShoppingBag, Code2, Printer, ArrowRight, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  wrench: Wrench,
  smartphone: Smartphone,
  "shopping-bag": ShoppingBag,
  code: Code2,
  printer: Printer,
};

export function OtherServices({ excludeSlug }: { excludeSlug: string }) {
  const others = services.filter((s) => s.slug !== excludeSlug);

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Otros servicios</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-white">
                  <Icon size={16} />
                </div>
                <span className="flex-1 text-sm font-semibold">{s.title}</span>
                <ArrowRight size={15} className="shrink-0 text-neutral-400 transition group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
