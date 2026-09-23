import Image from "next/image";
import Link from "next/link";
import { business, services, softwareCatalog } from "@/lib/content";

export function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-night text-white/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={40} height={40} className="rounded-lg bg-white p-1" />
            <span className="font-brand text-2xl font-light lowercase tracking-[-0.04em] text-white">{business.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{business.description}</p>
          <p className="mt-4 text-sm">{business.address}</p>
        </div>
        <div>
          <p className="label text-white/40">Servicios</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label text-white/40">Sistemas</p>
          <ul className="mt-4 space-y-2 text-sm">
            {softwareCatalog.map((p) => (
              <li key={p.slug}>
                <Link href={`/catalogo/${p.slug}`} className="transition hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/catalogo" className="text-signal transition hover:text-white">
                Ver catálogo →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Nombre gigante de cierre, recortado por abajo. */}
      <div className="overflow-hidden">
        <p
          aria-hidden
          className="font-brand mx-auto max-w-7xl translate-y-[22%] whitespace-nowrap px-5 text-[clamp(3rem,12.5vw,11.5rem)] font-light leading-none tracking-[-0.05em] text-white/[0.08] sm:px-8"
        >
          plug and play
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
          </p>
          <p>
            En colaboración con{" "}
            <a href="https://elradar.ar/" target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-signal">
              El Radar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
