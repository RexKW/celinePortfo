import { useRef } from "react"
import { useGSAP } from "@gsap/react"

interface FadeInText{
    text: string
}

export default function FadeInTop({text}:FadeInText){
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(()=>{
        if(!containerRef || !textRef) return;
        
    })

}