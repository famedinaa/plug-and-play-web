import Image from "next/image";
import Link from "next/link";
import { business, whatsappLink } from "@/lib/content";

const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt={business.name} width={40} height={40} className="rounded-lg" />
          <span className="text-lg font-bold tracking-tight">{business.name}</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-neutral-600 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-neutral-950">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappLink("Hola! Quiero hacer una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Escribinos
        </a>
      </div>
    </header>
  );
}
