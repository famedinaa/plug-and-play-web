import { WhatsAppButton } from "@/components/ui";

/** Franja de cierre con llamado a WhatsApp. */
export function CtaBand({ title, text, message }: { title: string; text: string; message: string }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-24">
      <div className="relative overflow-hidden on-dark rounded-[2rem] bg-night px-8 py-14 text-white md:px-14 md:py-16">
        <div className="dots pointer-events-none absolute inset-0 text-white/25 [mask-image:radial-gradient(circle_at_100%_100%,black,transparent_60%)]" />
        <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold leading-[1] tracking-tight md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-lg text-lg text-white/65">{text}</p>
          </div>
          <div className="md:justify-self-end">
            <WhatsAppButton message={message} size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
