import { SectionLabel } from "@/components/ui";

/** "¿Qué incluye?" — lista numerada en grilla, usada en servicios y fichas de sistemas. */
export function Highlights({ items, title = "¿Qué incluye?" }: { items: string[]; title?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionLabel>Detalle</SectionLabel>
          <h2 className="font-display mt-5 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 sm:[&>li:last-child:nth-child(odd)]:col-span-2">
          {items.map((h, i) => (
            <li key={h} className="flex gap-4 bg-card p-6">
              <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-ink/85">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
