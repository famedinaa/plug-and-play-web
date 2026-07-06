import type { LucideIcon } from "lucide-react";

export function ServiceVisual({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <section className="border-t border-neutral-200 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 md:h-80">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_50%)]" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur">
            <Icon size={44} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
