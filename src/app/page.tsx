import { About } from "@/components/ui/about";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Sponsers } from "@/components/ui/sponsers";


export default function Home() {
  return (
   <main>
    <Hero />
    <About />
    <Sponsers />
    <Footer />
   </main>
  );
}
