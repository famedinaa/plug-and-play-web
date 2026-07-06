import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import type { GalleryImage } from "@/lib/content";

/**
 * Muestra la foto real si ya fue subida a /public/images/..., o un
 * placeholder con la leyenda de qué foto va ahí si todavía no existe.
 */
export function ImageSlot({
  image,
  folder = "taller",
  className = "",
}: {
  image: GalleryImage;
  folder?: string;
  className?: string;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "images", folder, image.filename));

  if (exists) {
    return (
      <Image
        src={`/images/${folder}/${image.filename}`}
        alt={image.caption}
        width={480}
        height={360}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-2 border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center text-xs text-neutral-500 ${className}`}
    >
      <ImageOff size={20} />
      <span>Foto pendiente: {image.caption}</span>
    </div>
  );
}
