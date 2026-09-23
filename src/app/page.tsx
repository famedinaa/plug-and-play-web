import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { services } from "@/lib/content";

export default function Home() {
  const repairProcess = services.find((s) => s.slug === "reparacion-de-pcs")?.process ?? [];

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Services />
        <Process steps={repairProcess} index="02" title="Sin sorpresas: sabés qué tiene y cuánto sale antes de arrancar." />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
