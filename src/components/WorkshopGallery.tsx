import { workshopGallery } from "@/lib/content";
import { Gallery } from "@/components/Gallery";

export function WorkshopGallery() {
  return (
    <Gallery
      title="Nuestro taller"
      subtitle="Trabajamos con equipamiento de precisión para diagnosticar y reparar en serio."
      images={workshopGallery}
      folder="taller"
    />
  );
}
