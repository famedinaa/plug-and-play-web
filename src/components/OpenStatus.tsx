"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/content";

type Status = { open: boolean; text: string };

const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

/** Hora y día actuales en Argentina, sin importar la zona horaria del visitante. */
function nowInArgentina(): { day: number; hour: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hour = (Number(get("hour")) % 24) + Number(get("minute")) / 60;
  return { day, hour };
}

function slotFor(day: number) {
  return business.schedule.find((s) => s.days.includes(day));
}

function computeStatus(): Status {
  const { day, hour } = nowInArgentina();
  const today = slotFor(day);
  if (today && hour >= today.open && hour < today.close) {
    return { open: true, text: `Abierto ahora · cierra ${today.close}:00` };
  }
  if (today && hour < today.open) {
    return { open: false, text: `Cerrado · abre hoy ${today.open}:00` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const slot = slotFor(d);
    if (slot) {
      const when = i === 1 ? "mañana" : `el ${DAY_NAMES[d]}`;
      return { open: false, text: `Cerrado · abre ${when} ${slot.open}:00` };
    }
  }
  return { open: false, text: "Cerrado" };
}

/**
 * Indicador "Abierto ahora / Cerrado". Se calcula recién en el cliente
 * (la página es estática y la hora del build no sirve).
 */
export function OpenStatus({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return <span className="inline-block h-5" aria-hidden />;

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs ${
        tone === "light" ? "text-white/70" : "text-muted"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${status.open ? "live-dot bg-live text-live" : "bg-muted/60"}`}
      />
      {status.text}
    </span>
  );
}
