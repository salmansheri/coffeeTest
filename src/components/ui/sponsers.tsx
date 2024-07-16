import Image from "next/image"
import { montserrat } from "@/lib/fonts"
import { poppins } from "@/lib/fonts"
import { cn } from "@/lib/utlils"



export const Sponsers = () => {
    return (
        <div className="bg-sponser-bg h-[100vh] flex flex-col  justify-center gap-y-10 items-center px-10">
            <div className="flex flex-col gap-2">

            <div className="flex justify-center items-center">
                <h1 className={cn(montserrat.className, "text-hero-text text-5xl font-extrabold")}>Reviews </h1>
               
                <Image 
                    src="/coffee-mug.svg"
                    alt="coffee-mug"
                    height={50}
                    width={50}
                    />

               
            </div>
            <h3 className={cn(poppins.className, "text-hero-text text-2xl ")}>
                    What other People are saying
                </h3>
                    </div>
            <div className="flex justify-between gap-10">
                <div className="bg-about-coffee h-auto  p-4  rounded-xl flex flex-col gap-3 shadow-2xl text-center">
                    <p>
                        Indulge in the sublime experience of Coffee Barcelle, where every sip is a journey to flavor paradise. Crafter with precision, our rich blends ignite the senses and redefine coffee appreciation
                       
                    </p>
                    <p className="text-[#0A424F]">
                            @elonmusk
                        </p>
                </div>
                <div className="bg-about-coffee h-auto  p-4  rounded-xl flex flex-col gap-3 text-center">
                    <p>Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest.</p>
                    <p className="text-[#0A424F]">@JeffBezos</p>
                </div>
                <div className="bg-about-coffee h-auto  p-4  rounded-xl flex flex-col gap-3 text-center">
                    <p>
                    Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.
                    </p>
                    <p className="text-[#0A424F]">@MrBeast</p>
                </div>
            </div>
        </div>
    )
}