import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

/** Etiqueta de sección: "01 — Servicios". */
export function SectionLabel({
  index,
  children,
  tone = "dark",
}: {
  index?: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p className={`label flex items-center gap-3 ${tone === "light" ? "text-white/60" : "text-muted"}`}>
      {index && <span className="text-signal">{index}</span>}
      <span className={`h-px w-8 ${tone === "light" ? "bg-white/25" : "bg-line"}`} />
      {children}
    </p>
  );
}

export function WhatsAppButton({
  message,
  children = "Escribinos por WhatsApp",
  size = "md",
  variant = "signal",
}: {
  message: string;
  children?: React.ReactNode;
  size?: "md" | "lg";
  /** "ink" para usarlo sobre fondos naranja. */
  variant?: "signal" | "ink";
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full font-semibold text-white transition hover:-translate-y-0.5 ${
        variant === "ink"
          ? "bg-ink hover:bg-ink-2"
          : "bg-signal shadow-[0_8px_24px_-8px] shadow-signal/60 hover:bg-signal-dark"
      } ${
        size === "lg" ? "px-7 py-4 text-base" : "px-6 py-3 text-sm"
      }`}
    >
      <MessageCircle size={size === "lg" ? 20 : 18} />
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  tone = "dark",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  external?: boolean;
}) {
  const className = `inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${
    tone === "light"
      ? "border-white/25 text-white hover:border-white/60 hover:bg-white/5"
      : "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper"
  }`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <ArrowUpRight size={16} />
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Link a un sitio externo propio de un proyecto (ej. "gestiontallerfierros.com.ar ↗"). */
export function ExternalLink({
  href,
  label,
  tone = "dark",
}: {
  href: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1.5 font-mono text-sm underline decoration-signal decoration-2 underline-offset-4 transition hover:text-signal ${
        tone === "light" ? "text-white" : "text-ink"
      }`}
    >
      {label}
      <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

/** Marco de ventana de navegador para mostrar capturas de los sistemas. */
export function BrowserFrame({
  children,
  address,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  address?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-[0_30px_60px_-30px_rgba(17,18,20,0.45)] ${
        dark ? "border-white/10 bg-ink-2" : "border-line bg-card"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10" : "border-line"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-signal" />
        <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/20" : "bg-line"}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dark ? "bg-white/20" : "bg-line"}`} />
        {address && (
          <span
            className={`ml-3 truncate rounded-md px-2.5 py-0.5 font-mono text-[11px] ${
              dark ? "bg-white/5 text-white/50" : "bg-paper text-muted"
            }`}
          >
            {address}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}
