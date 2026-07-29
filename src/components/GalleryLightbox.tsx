"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageOff, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryLightboxItem {
  filename: string;
  caption: string;
  src: string | null;
}

export function GalleryLightbox({ items }: { items: GalleryLightboxItem[] }) {
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
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <figure
            key={item.filename}
            className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm"
          >
            <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-3.5 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            {item.src ? (
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block h-56 w-full bg-neutral-50 p-3 sm:h-64"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={480}
                  height={360}
                  className="h-full w-full object-contain"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 transition group-hover:bg-neutral-950/10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/0 text-white opacity-0 shadow-md transition group-hover:bg-white group-hover:text-neutral-950 group-hover:opacity-100">
                    <ZoomIn size={17} />
                  </span>
                </span>
              </button>
            ) : (
              <div className="flex h-56 flex-col items-center justify-center gap-2 border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center text-xs text-neutral-500 sm:h-64">
                <ImageOff size={20} />
                <span>Foto pendiente: {item.caption}</span>
              </div>
            )}
            <figcaption className="border-t border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {current?.src && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950/90 p-4 sm:p-8"
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
