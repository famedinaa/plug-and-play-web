import { advantages, storefrontImage, workshopGallery } from "@/lib/content";
import { ImageSlot } from "@/components/ImageSlot";
import { SectionLabel } from "@/components/ui";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 border-t border-line bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Collage: foto del local grande + dos del taller. */}
        <div className="reveal grid grid-cols-2 grid-rows-[auto_auto] gap-4">
          <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-3xl border border-line">
            <ImageSlot image={storefrontImage} folder="local" width={1200} height={750} />
          </div>
          {workshopGallery.slice(0, 2).map((img) => (
            <div key={img.filename} className="aspect-square overflow-hidden rounded-3xl border border-line">
              <ImageSlot image={img} folder="taller" width={600} height={600} />
            </div>
          ))}
        </div>

        <div>
          <SectionLabel index="04">Nosotros</SectionLabel>
          <h2 className="font-display mt-5 text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl">
            Un local de barrio,
            <br />
            <span className="text-muted">con banco de trabajo en serio.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Somos especialistas en mantenimiento informático: reparamos computadoras y celulares con
            equipamiento de precisión y te explicamos qué tiene tu equipo antes de tocarlo.
          </p>
          <p className="mt-4 leading-relaxed text-ink/65">
            Y como también programamos, cuando un negocio nos cuenta que se ahoga en planillas le
            armamos un sistema. Así nacieron FierrOS, LaboSys y GymAccess.
          </p>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {advantages.map((a, i) => (
              <li key={a} className="flex items-center gap-4 bg-paper p-5">
                <span className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
