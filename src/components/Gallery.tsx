import type { GalleryImage } from "@/lib/content";
import { imageExists } from "@/components/ImageSlot";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { SectionLabel } from "@/components/ui";

export function Gallery({
  title,
  subtitle,
  images,
  folder,
  variant = "photo",
}: {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
  folder: string;
  /** "screen" = capturas de sistemas (marco de navegador); "photo" = fotos del taller. */
  variant?: "photo" | "screen";
}) {
  const items = images.map((img) => ({
    filename: img.filename,
    caption: img.caption,
    src: imageExists(folder, img.filename) ? `/images/${folder}/${img.filename}` : null,
  }));

  return (
    <section className="border-t border-line bg-card py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel>Galería</SectionLabel>
        <h2 className="font-display mt-5 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-xl text-lg text-ink/70">{subtitle}</p>}
        <GalleryLightbox items={items} variant={variant} />
      </div>
    </section>
  );
}
