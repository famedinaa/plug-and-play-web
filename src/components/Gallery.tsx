import type { GalleryImage } from "@/lib/content";
import { imageExists } from "@/components/ImageSlot";
import { GalleryLightbox } from "@/components/GalleryLightbox";

export function Gallery({
  title,
  subtitle,
  images,
  folder,
}: {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
  folder: string;
}) {
  const items = images.map((img) => ({
    filename: img.filename,
    caption: img.caption,
    src: imageExists(folder, img.filename) ? `/images/${folder}/${img.filename}` : null,
  }));

  return (
    <section className="border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
        <GalleryLightbox items={items} />
      </div>
    </section>
  );
}
