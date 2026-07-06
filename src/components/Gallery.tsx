import type { GalleryImage } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";

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
  return (
    <section className="border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-neutral-600">{subtitle}</p>}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {images.map((img) => (
            <figure key={img.filename} className="overflow-hidden rounded-2xl border border-neutral-200">
              <div className="h-52">
                <ImageSlot image={img} folder={folder} />
              </div>
              <figcaption className="border-t border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
