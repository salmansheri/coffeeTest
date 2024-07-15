import Image from "next/image"

export const Hero = () => {
    return (
        <div className="bg-coffee">
            
            <Image 
                src="/borcelle.svg"
                alt="borcelle"
                height={50}
                width={50}
                
            />
            
        </div>
    )
}