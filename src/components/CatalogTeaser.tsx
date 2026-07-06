import Link from "next/link";
import { AppWindow, ArrowRight } from "lucide-react";
import { softwareCatalog } from "@/lib/content";

export function CatalogTeaser() {
  const sample = softwareCatalog.slice(0, 3);

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Ya tenemos sistemas listos</h2>
        <p className="mt-2 text-neutral-600">
          Antes de arrancar un desarrollo desde cero, mirá si alguno de estos sistemas ya resuelve
          lo que necesitás.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {sample.map((s) => (
            <Link
              key={s.slug}
              href={`/catalogo/${s.slug}`}
              className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-4 transition hover:border-neutral-300 hover:shadow-sm"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-950 text-white">
                <AppWindow size={16} />
              </div>
              <span className="text-sm font-semibold">{s.name}</span>
              <span className="mt-1 text-xs text-neutral-600">{s.description}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/catalogo"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600"
        >
          Ver catálogo completo
          <ArrowRight size={15} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
