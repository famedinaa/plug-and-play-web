import Image from "next/image";
import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt={business.name} width={28} height={28} className="rounded-md" />
          <span className="font-semibold text-white">{business.name}</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
