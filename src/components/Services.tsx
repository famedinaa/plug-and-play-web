import Link from "next/link";
import { ArrowRight, Wrench, Smartphone, ShoppingBag, Code2, Printer, type LucideIcon } from "lucide-react";
import { services } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  wrench: Wrench,
  smartphone: Smartphone,
  "shopping-bag": ShoppingBag,
  code: Code2,
  printer: Printer,
};

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Nuestros servicios</h2>
      <p className="mt-2 max-w-xl text-neutral-600">
        Hoy nos enfocamos en reparación y tecnología. Muy pronto sumamos desarrollo de software y
        impresión 3D. Hacé click en cualquier servicio para ver el detalle.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = ICONS[s.icon];
          return (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className="group relative flex flex-col rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
            >
              {s.comingSoon && (
                <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
                  Próximamente
                </span>
              )}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-neutral-600">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                Ver más
                <ArrowRight size={15} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
