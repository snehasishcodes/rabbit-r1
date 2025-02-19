/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import Link from "../components/link";
import { ArrowRight } from "lucide-react";

export default function Rightbar({ className }) {
    return (
        <div id="rightbar" className={cn(
            "h-[25%] w-full lg:h-full lg:w-[20%] flex flex-col bg-black text-white gap-4 justify-evenly items-center p-4 rounded-[2rem] lg:rounded-[3rem] leading-none tracking-wider overflow-hidden",
            className
        )}>
            <RightbarCard src="/assets/1.gif" title="See the R1 in Action" description="Watch videos on how to use the R1 and general use cases." />
            <RightbarCard src="/assets/2.gif" title="Make your R1 do stuff" description="Learn how to make your R1 do various tasks on the web." />

            <BuyCard />
        </div>
    )
}

export function RightbarCard({ src, title, description }) {
    return (
        <div className="hidden lg:flex flex-col w-full h-fit p-4 rounded-[1.5rem] hover:bg-[rgba(255,255,255,0.1)]">
            {
                src && typeof src === "string" ? <img src={src} alt="gif" loading="lazy" className="w-full max-h-[100px] object-contain bg-black rounded-2xl" />
                    : null
            }
            <h2 className="text-white r1fontmedium mt-1">{title}</h2>
            <p className="text-[rgba(255,255,255,0.65)] text-sm r1fontnormal">{description}</p>
        </div>
    )
}

export function BuyCard() {
    return (
        <div className="flex flex-col w-full h-fit p-4 rounded-[1.5rem] bg-[rgba(255,255,255,0.1)] hover:scale-95">
            <h2 className="text-main text-lg r1fontmedium">Buy the R1</h2>
            <p className="text-[rgba(255,255,255,0.85)] text-sm r1fontnormal">
                No extra subscriptions, just own it and use it!
            </p>

            <Link href="https://rabbit.tech" target="_blank" className="flex flex-row w-full justify-start gap-2 items-center">
                <h2 className="text-white text-right text-lg r1fontmedium">Buy Now $199</h2>
                <span className="text-main"><ArrowRight size={22} /></span>
            </Link>
        </div>
    )
}