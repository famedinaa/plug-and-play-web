"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/lib/content";
import { OpenStatus } from "@/components/OpenStatus";

const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* El logo tiene fondo blanco: multiply lo funde con el papel. */}
          <Image src="/logo.png" alt="" width={40} height={40} className="mix-blend-multiply" priority />
          <span className="font-display text-lg font-bold tracking-tight whitespace-nowrap">
            {business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-medium lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-ink/70 transition hover:bg-ink/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden xl:inline-flex">
            <OpenStatus />
          </span>
          <a
            href={whatsappLink("Hola! Quiero hacer una consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-signal"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Escribinos</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-paper px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display rounded-lg px-2 py-2 text-2xl font-semibold tracking-tight hover:text-signal"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 border-t border-line px-2 pt-4">
            <OpenStatus />
          </div>
        </nav>
      )}
    </header>
  );
}
