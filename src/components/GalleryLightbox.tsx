"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageOff, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryLightboxItem {
  filename: string;
  caption: string;
  src: string | null;
}

export function GalleryLightbox({
  items,
  variant = "photo",
}: {
  items: GalleryLightboxItem[];
  variant?: "photo" | "screen";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItems = items.filter((it) => it.src);

  const currentOpenPos = openIndex === null ? -1 : openItems.findIndex((it) => it === items[openIndex]);

  const close = () => setOpenIndex(null);
  const step = (delta: number) => {
    if (currentOpenPos === -1) return;
    const next = (currentOpenPos + delta + openItems.length) % openItems.length;
    setOpenIndex(items.indexOf(openItems[next]));
  };

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className={`mt-12 grid gap-6 sm:grid-cols-2 ${variant === "screen" ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {items.map((item, i) => (
          <figure key={item.filename} className="group">
            <div
              className={`overflow-hidden rounded-2xl border border-line bg-white transition group-hover:-translate-y-1 group-hover:shadow-[0_24px_48px_-24px_rgba(17,18,20,0.45)] ${
                variant === "screen" ? "" : "aspect-square"
              }`}
            >
              {variant === "screen" && (
                <div className="flex items-center gap-1.5 border-b border-line bg-card px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                  <span className="h-2 w-2 rounded-full bg-line" />
                </div>
              )}
              {item.src ? (
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className={`relative block w-full cursor-zoom-in ${variant === "screen" ? "aspect-[16/10]" : "h-full"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    width={720}
                    height={450}
                    className={`h-full w-full object-cover ${variant === "screen" ? "object-top" : ""}`}
                  />
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper opacity-0 transition group-hover:opacity-100">
                    <ZoomIn size={16} />
                  </span>
                </button>
              ) : (
                <div
                  className={`dots flex flex-col items-center justify-center gap-2 bg-card p-4 text-center text-muted ${
                    variant === "screen" ? "aspect-[16/10]" : "h-full"
                  }`}
                >
                  <ImageOff size={20} />
                  <span className="label !text-[0.65rem]">Foto pendiente</span>
                </div>
              )}
            </div>
            <figcaption className="mt-3 flex gap-3 text-sm text-ink/75">
              <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {current?.src && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {openItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Anterior"
                className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-4"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Siguiente"
                className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-4"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="relative flex max-h-[80vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.caption}
              width={1600}
              height={1200}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
          </div>
          <p className="mt-4 max-w-2xl text-center text-sm font-medium text-white/80">{current.caption}</p>
        </div>
      )}
    </>
  );
}
