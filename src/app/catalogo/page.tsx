import type { Metadata } from "next";
import Link from "next/link";
import { AppWindow, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { business, softwareCatalog } from "@/lib/content";

export const metadata: Metadata = {
  title: `Catálogo de software — ${business.name}`,
  description: "Sistemas propios, listos para instalar en tu negocio.",
};

export default function CatalogoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_45%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
            <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Sistemas listos para tu negocio.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              Además del desarrollo a medida, ya tenemos sistemas propios que podés instalar hoy.
              Elegí uno para ver el detalle.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {softwareCatalog.map((s) => (
              <Link
                key={s.slug}
                href={`/catalogo/${s.slug}`}
                className="group relative flex flex-col rounded-2xl border border-neutral-200 p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-950 text-white">
                  <AppWindow size={20} />
                </div>
                <h2 className="text-lg font-semibold">{s.name}</h2>
                <p className="mt-1.5 text-sm text-neutral-600">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                  Ver más
                  <ArrowRight size={15} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-neutral-200 bg-neutral-50 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">¿No encontrás lo que necesitás?</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-600">
            También hacemos desarrollo de software a medida para tu negocio.
          </p>
          <Link
            href="/servicios/saas-a-medida"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Pedir un desarrollo a medida
            <ArrowRight size={16} />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
