import { MapPin, Clock, MessageCircle, AtSign, Mail, Phone } from "lucide-react";
import { business, whatsappLink, mapEmbedUrl } from "@/lib/content";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight">Contacto y ubicación</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">Dirección</p>
              <p className="text-neutral-600">{business.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">Horarios</p>
              {business.hours.map((h) => (
                <p key={h.day} className="text-neutral-600">
                  {h.day}: {h.time}
                </p>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageCircle className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <a
                href={whatsappLink("Hola! Quiero hacer una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-600"
              >
                {business.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">Teléfono</p>
              <a href={`tel:+549${business.phone}`} className="text-neutral-600 hover:text-blue-600">
                {business.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">Email</p>
              <a href={`mailto:${business.email}`} className="text-neutral-600 hover:text-blue-600">
                {business.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AtSign className="mt-0.5 shrink-0 text-blue-500" size={22} />
            <div>
              <p className="font-semibold">Instagram</p>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-blue-600"
              >
                {business.instagramHandle}
              </a>
            </div>
          </div>
        </div>
        <div className="h-full min-h-64 overflow-hidden rounded-2xl border border-neutral-200">
          <iframe
            src={mapEmbedUrl()}
            title="Ubicación de Plug and Play"
            className="h-full w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
