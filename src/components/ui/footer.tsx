import Image from "next/image"; 
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utlils";

const date = new Date()
let year = date.getFullYear(); 

export const Footer = () => {
    return (
        <footer className="">
           

        <div className="bg-footer-bg text-white py-5">
<div className="w-[80vw] mx-auto flex justify-between">

            <div className={cn(inter.className,"flex flex-col gap-1")}>
                <h1 className="text-4xl">Contact Us</h1>
                <h3 className="text-2xl">Send us a Message</h3>
                <form className="grid space-y-3 mt-3 ">
                    <input className="w-full rounded bg-about-coffee p-1" />
                    <input className="w-full rounded bg-about-coffee p-1" />
                    <textarea className="w-full rounded bg-about-coffee p-1" />
                    <button className="bg-about-coffee text-coffee w-fit py-2 px-4 rounded hover:bg-about-coffee/90 transition">
                        Submit
                    </button>
                </form>

            </div>
            <div>
                <h1 className={cn(inter.className, "text-4xl ")}>Sitemap</h1>
                <h3 className="text-2xl">All our pages</h3>
                <ol className="mt-5">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ol>
            </div>
            <div>
                <Image
                    src="/borcelle.svg"
                    alt="borcelle"
                    height={200}
                    width={200}
                />
                <li className="flex items-center justify-center gap-2">
                    <Image 
                        src="/phone.svg"
                        alt="phone"
                        height={20}
                        width={20}
                    />
                    <p>(08) 400 2000</p>
                </li>
                <li className="flex items-center justify-center gap-2">
                    <Image 
                        src="/mail_icon.svg"
                        alt="phone"
                        height={20}
                        width={20}
                    />
                    <p>coffeeborcelle@gmail.com</p>
                </li>
               
            </div>
            </div>
            <div>

</div>


            </div>

            <div className="flex items-center justify-center py-3 bg-about-coffee">
    <p className="">Copyright {year}. All rights Reserved Company Name</p>
</div>

            
        </footer>
    )
}