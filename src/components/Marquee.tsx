const ITEMS = [
  "Reparación de PCs",
  "Notebooks",
  "Cambio de pantallas",
  "Baterías",
  "Módulos de carga",
  "SSD y memoria RAM",
  "Limpieza y pasta térmica",
  "Accesorios",
  "Software a medida",
  "Sistemas de gestión",
  "Impresión 3D",
];

/** Franja infinita con los servicios. El contenido va duplicado para que el loop no tenga salto. */
export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-4 text-paper" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="font-display flex items-center gap-8 text-xl font-semibold tracking-tight sm:text-2xl">
            {item}
            <span className="h-2.5 w-2.5 rotate-45 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
