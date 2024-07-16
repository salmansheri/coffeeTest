import { Montserrat } from "next/font/google"
import { Poppins } from "next/font/google"
import { Inter } from "next/font/google"
import { Pompiere } from "next/font/google";
import { Galada } from "next/font/google";




export const poppins = Poppins({
    subsets: ["latin"], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 

})

export const inter = Inter( {
    subsets: ["latin"]
})

export const pompiere = Pompiere({
    subsets: ["latin"], 
    weight: ["400"]
})

export const galada = Galada({
    subsets: ["latin"], 
    weight: ["400"]
})

export const montserrat = Montserrat({
    subsets: ["latin"], 
    
})

