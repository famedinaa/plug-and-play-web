import { workshopGallery } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";

export function WorkshopGallery() {
  return (
    <section className="border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Nuestro taller</h2>
        <p className="mt-2 text-neutral-600">
          Trabajamos con equipamiento de precisión para diagnosticar y reparar en serio.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {workshopGallery.map((img) => (
            <figure key={img.filename} className="overflow-hidden rounded-2xl border border-neutral-200">
              <div className="h-52">
                <ImageSlot image={img} />
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
