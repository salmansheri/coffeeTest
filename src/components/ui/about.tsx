import { cn } from "@/lib/utlils"
import { poppins } from "@/lib/fonts"
import Image from "next/image"






export const About = () => {
    return (
        <div className="bg-about-coffee h-[100vh] flex justify-between w-full mx-auto px-10 items-center">
            <div className="relative h-[500px] w-[500px]">
                <Image src="/about-coffee.svg" alt="about-coffee" fill />

            </div>
            <div className="w-1/2 flex-col space-y-5">
                <div className="flex-col space-y-2">

                <h2 className={cn(poppins.className,"text-5xl")}>Discover Coffee Borcelle</h2>
                <h3 className={cn(poppins.className, "text-4xl")}>Elevating Coffee Experience</h3>

                </div>
                <p>
                    At Coffee Barcelle, Were on a mission to redefine your Coffee 
                    moments. Our Carefully curated selection of premium beans sourced from the worlds most renowned coffee regions 

                    With expect craftsmanship and a commitment to quality join us in savoring the art of coffee, one coffee, one cup at a time
                </p>
                <button className="bg-coffee text-hero-text px-8 py-1">
                    Read More
                </button>
            </div>


        </div>
    )
}