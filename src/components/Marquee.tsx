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
    <div className="on-dark overflow-hidden border-y border-white/10 bg-night py-4 text-white" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="font-brand flex items-center gap-8 text-xl lowercase tracking-[-0.03em] sm:text-2xl">
            {item}
            <span className="h-2.5 w-2.5 rotate-45 bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
