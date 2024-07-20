import { About } from "@/components/ui/about";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Sponsers } from "@/components/ui/sponsers";


export default function Home() {
  return (
   <main className="">
   
    <Hero />
    <About />
    <Sponsers />
    <Footer />
   </main>
  );
}
