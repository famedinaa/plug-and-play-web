import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Camera } from "lucide-react";
import type { GalleryImage } from "@/lib/content";

export function imageExists(folder: string, filename: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", "images", folder, filename));
}

/**
 * Muestra la foto real si ya fue subida a /public/images/..., o un
 * placeholder con la leyenda de qué foto va ahí si todavía no existe.
 */
export function ImageSlot({
  image,
  folder = "taller",
  className = "",
  fit = "cover",
  tone = "light",
  width = 960,
  height = 720,
  priority = false,
}: {
  image: GalleryImage;
  folder?: string;
  className?: string;
  fit?: "cover" | "contain";
  tone?: "light" | "dark";
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const exists = imageExists(folder, image.filename);

  if (exists) {
    return (
      <Image
        src={`/images/${folder}/${image.filename}`}
        alt={image.caption}
        width={width}
        height={height}
        priority={priority}
        className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      />
    );
  }

  return (
    <div
      className={`dots flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center ${
        tone === "dark" ? "bg-night-2 text-white/40" : "bg-card text-muted"
      } ${className}`}
    >
      <Camera size={20} />
      <span className="label !text-[0.65rem]">{image.caption}</span>
    </div>
  );
}
