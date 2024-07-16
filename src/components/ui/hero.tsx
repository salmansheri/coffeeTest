import Image from "next/image"; 
import { pompiere } from "@/lib/fonts";
import { galada } from "@/lib/fonts";
import { cn } from "@/lib/utlils";


export const Hero = () => {
    return (
        <div className="bg-coffee h-[100vh] pl-10">
            <Image 
                        src="/hero-coffee.svg"
                        alt=""
                        fill
                    />
            <div>

            <div className="relative h-[200px] w-[200px]">

            <Image 
                src="/borcelle.svg"
                alt="borcelle"
                
                fill
                
                />
            </div>
            <div className="text-hero-text">
                <h1 className={cn(pompiere.className, "text-7xl")}>
                    Coffee Makes Mood 
                   
                </h1>
               <p className={cn(galada.className, "text-2xl")}>
                Indulge in Every Sip Experience the Richness of Coffee!
               </p>
            </div>
                </div>
                <div className="relative h-[100px] w-[300px]">
                    
                
                </div>
            
        </div>
    )
}