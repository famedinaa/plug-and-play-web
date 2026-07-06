// Contenido editable del sitio. Los valores marcados "COMPLETAR" son
// placeholders — reemplazalos por los datos reales del local.

export const business = {
  name: "Plug and Play",
  description:
    "Especialista en mantenimiento informático. Reparación y mantenimiento de computadoras y celulares.",
  whatsapp: "5490000000000", // COMPLETAR: número con código de país, sin "+" ni espacios
  whatsappDisplay: "+54 9 000 000-0000", // COMPLETAR
  instagram: "https://instagram.com/plugandplay", // COMPLETAR
  email: "contacto@plugandplay.com", // COMPLETAR
  address: "General J. J. de Urquiza 1285, Federal, Entre Ríos",
  hours: [
    { day: "Lunes a viernes", time: "9:00 – 18:00" },
    { day: "Sábados", time: "9:00 – 13:00" },
  ],
};

export function mapEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`;
}

export interface GalleryImage {
  /** Nombre de archivo dentro de /public/images/taller/. Subilo con este nombre exacto para que aparezca. */
  filename: string;
  caption: string;
}

/** Fotos del taller — se muestran en las páginas de reparación de PCs y celulares. */
export const workshopGallery: GalleryImage[] = [
  { filename: "escritorio-herramientas.jpg", caption: "Escritorio de reparación con herramientas" },
  { filename: "microscopio.jpg", caption: "Microscopio para reparaciones de precisión" },
  { filename: "soldadora.jpg", caption: "Estación de soldadura" },
  { filename: "multimetro.jpg", caption: "Multímetro para diagnóstico" },
];

/** Foto general del local — se muestra en "Sobre Plug and Play". */
export const storefrontImage: GalleryImage = {
  filename: "local.jpg",
  caption: "Nuestro local",
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: "wrench" | "smartphone" | "shopping-bag" | "code" | "printer";
  title: string;
  /** Bajada corta, usada en la tarjeta del inicio. */
  description: string;
  comingSoon?: boolean;
  /** Frase corta para el hero de la página de detalle. */
  tagline: string;
  /** "¿Qué incluye?" — lista de puntos concretos del servicio. */
  highlights: string[];
  /** Pasos del proceso de trabajo. Se omite en servicios "Próximamente". */
  process?: ProcessStep[];
  /** Mensaje pre-cargado del botón de WhatsApp en la página de detalle. */
  whatsappMessage: string;
}

export const services: Service[] = [
  {
    slug: "reparacion-de-pcs",
    icon: "wrench",
    title: "Reparación de PCs",
    description:
      "Diagnóstico, mantenimiento, cambio de piezas y optimización de rendimiento para computadoras de escritorio y notebooks.",
    tagline: "Tu PC o notebook, funcionando como el primer día.",
    highlights: [
      "No enciende o se reinicia solo",
      "Pantallas azules y cuelgues frecuentes",
      "Lentitud general y falta de espacio",
      "Cambio de disco rígido a SSD",
      "Actualización de memoria RAM",
      "Formateo, instalación de programas y drivers",
      "Limpieza de virus y malware",
      "Mantenimiento preventivo: limpieza física y cambio de pasta térmica",
    ],
    process: [
      {
        title: "Traé tu equipo (o coordinamos retiro)",
        description: "Nos contás qué le pasa y vemos cómo hacértelo llegar más fácil.",
      },
      {
        title: "Diagnóstico sin cargo",
        description: "Revisamos el equipo y te decimos exactamente qué tiene.",
      },
      {
        title: "Presupuesto claro antes de tocar nada",
        description: "Vos decidís si seguimos — sin sorpresas en el precio final.",
      },
      {
        title: "Reparación con garantía por escrito",
        description: "Te entregamos el equipo funcionando, con garantía sobre el trabajo realizado.",
      },
    ],
    whatsappMessage: "Hola! Quiero consultar sobre reparación de PC.",
  },
  {
    slug: "reparacion-de-celulares",
    icon: "smartphone",
    title: "Reparación de celulares",
    description:
      "Cambio de pantallas, baterías, módulos de carga y otras reparaciones para la mayoría de las marcas.",
    tagline: "Reparamos tu celular, no te vendemos uno nuevo.",
    highlights: [
      "Cambio de pantalla (roturas, táctil que no responde)",
      "Batería que se agota rápido o se hincha",
      "Módulo de carga / no carga",
      "Cámara con fallas",
      "Botones físicos y volumen",
      "Daño por humedad o líquidos",
      "Problemas de software y actualizaciones",
      "Trabajamos las principales marcas: Samsung, Motorola, Xiaomi, Apple y más",
    ],
    process: [
      {
        title: "Contanos qué le pasa",
        description: "Por WhatsApp o en el local, nos describís el problema.",
      },
      {
        title: "Diagnóstico sin cargo",
        description: "Revisamos el equipo y confirmamos la falla real.",
      },
      {
        title: "Presupuesto claro antes de tocar nada",
        description: "Aprobás el arreglo solo si el precio te cierra.",
      },
      {
        title: "Reparación con garantía por escrito",
        description: "Retirás tu celular andando, con garantía sobre la reparación.",
      },
    ],
    whatsappMessage: "Hola! Quiero consultar sobre reparación de celular.",
  },
  {
    slug: "venta-de-tecnologia",
    icon: "shopping-bag",
    title: "Venta de tecnología",
    description:
      "Accesorios, repuestos y equipos — asesoramiento incluido para elegir lo que realmente necesitás.",
    tagline: "Lo que necesitás, con asesoramiento real.",
    highlights: [
      "Accesorios: cargadores, fundas, auriculares, cables",
      "Repuestos: pantallas, baterías, módulos de carga",
      "Equipos reacondicionados con garantía",
      "Asesoramiento antes de comprar — te ayudamos a elegir bien",
    ],
    whatsappMessage: "Hola! Quiero consultar por productos de tecnología.",
  },
  {
    slug: "saas-a-medida",
    icon: "code",
    title: "Desarrollo de SaaS a medida",
    description: "Software a medida para digitalizar y automatizar procesos de tu negocio.",
    comingSoon: true,
    tagline: "Software a medida para tu negocio. Muy pronto.",
    highlights: [
      "Sistemas de gestión a medida",
      "Automatización de procesos repetitivos",
      "Aplicaciones web para digitalizar tu negocio",
      "Acompañamiento técnico continuo",
    ],
    whatsappMessage: "Hola! Quiero que me avisen cuando esté disponible el servicio de SaaS a medida.",
  },
  {
    slug: "impresion-3d",
    icon: "printer",
    title: "Impresión 3D",
    description: "Piezas, repuestos y prototipos impresos a pedido.",
    comingSoon: true,
    tagline: "Piezas y prototipos, impresos a medida. Muy pronto.",
    highlights: [
      "Piezas y repuestos descontinuados",
      "Prototipos para proyectos propios",
      "Objetos decorativos y personalizados",
    ],
    whatsappMessage: "Hola! Quiero que me avisen cuando esté disponible el servicio de impresión 3D.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const advantages = [
  "Diagnóstico sin cargo",
  "Repuestos de calidad",
  "Garantía por escrito en cada reparación",
  "Atención personalizada",
];
