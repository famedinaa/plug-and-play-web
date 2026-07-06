import { CheckCircle2 } from "lucide-react";
import { advantages, business, storefrontImage } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";

export function About() {
  return (
    <section id="nosotros" className="bg-neutral-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="h-72 overflow-hidden rounded-2xl border border-neutral-200 md:h-96">
          <ImageSlot image={storefrontImage} folder="local" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sobre Plug and Play</h2>
          <p className="mt-4 font-medium text-neutral-800">{business.description}</p>
          <p className="mt-3 text-neutral-600">
            Trabajamos con transparencia y seriedad en cada diagnóstico, y estamos ampliando lo que
            ofrecemos: desarrollo de software a medida (SaaS) e impresión 3D, para acompañar cada
            vez más necesidades tecnológicas de nuestros clientes.
          </p>
          <ul className="mt-6 space-y-3">
            {advantages.map((a) => (
              <li key={a} className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="shrink-0 text-blue-500" size={20} />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
