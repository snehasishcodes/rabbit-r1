/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import Link from "../components/link";
import { cn } from "../lib/utils";
import { Search, Info, ShoppingBag, Bell, MessagesSquare } from "lucide-react";
import gsap from "gsap";

export default function Sidebar({ className }) {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from("#sidebar-item", {
            yPercent: -50,
            delay: 0.1,
            duration: 0.6,
            stagger: 0.2
        });
    }, []);

    return (
        <div className={cn(
            "h-[10%] w-full lg:w-[10%] lg:h-full flex flex-row lg:flex-col bg-black text-white gap-4 justify-evenly items-center px-2 py-0 rounded-[3rem] lg:rounded-[4rem]",
            className
        )}>
            <SidebarBranding />

            <SidebarButton><Search size={24} /></SidebarButton>
            <SidebarButton><Info size={24} /></SidebarButton>
            <SidebarButton><ShoppingBag size={24} /></SidebarButton>
            <SidebarButton><Bell size={24} /></SidebarButton>
            <SidebarButton><MessagesSquare size={24} /></SidebarButton>
        </div>
    )
}

export function SidebarBranding() {
    return (
        <div className="relative flex flex-row justify-center items-center h-full w-auto lg:w-full lg:h-auto aspect-[5/4] bg-transparent p-0">
            <Link href="https://rabbit.tech/" target="_blank">
                <img className="rounded-full h-full w-full" src={"/assets/rabbit.gif"} alt="rabbit" loading="lazy" />
            </Link>
        </div>
    )
}

export function SidebarButton({ children }) {
    return (
        <Link id="sidebar-item" href="#" className="bg-transparent text-main p-2 rounded-full">
            {children}
        </Link>
    )
}