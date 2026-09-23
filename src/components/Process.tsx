import type { ProcessStep } from "@/lib/content";
import { SectionLabel } from "@/components/ui";

/**
 * Pasos del proceso como "pines" conectados por un cable — el mismo lenguaje
 * del logo. Sirve para el inicio y para las páginas de servicio.
 */
export function Process({
  steps,
  index,
  title = "Cómo trabajamos",
}: {
  steps: ProcessStep[];
  index?: string;
  title?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-night py-24 text-white md:py-28">
      <div className="dots pointer-events-none absolute inset-0 text-white/25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index={index} tone="light">
          Proceso
        </SectionLabel>
        <h2 className="font-display mt-5 max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl">
          {title}
        </h2>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Cable que une los pasos (solo en desktop, donde van en fila). */}
          <div className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-signal via-white/25 to-white/10 md:block" />
          {steps.map((step, i) => (
            <li key={step.title} className="reveal relative flex gap-5 md:block">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-night font-mono text-sm font-semibold text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:mt-6">
                <p className="font-display text-xl font-semibold leading-snug tracking-tight">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
