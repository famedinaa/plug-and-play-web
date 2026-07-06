import Link from "next/link";
import { AppWindow, ArrowRight } from "lucide-react";
import { softwareCatalog } from "@/lib/content";

export function OtherSoftware({ excludeSlug }: { excludeSlug: string }) {
  const others = softwareCatalog.filter((s) => s.slug !== excludeSlug);

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Otros sistemas</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/catalogo/${s.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:shadow-sm"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-950 text-white">
                <AppWindow size={16} />
              </div>
              <span className="flex-1 text-sm font-semibold">{s.name}</span>
              <ArrowRight size={15} className="shrink-0 text-neutral-400 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
