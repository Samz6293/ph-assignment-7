"use client";
import Link from "next/link";
import { NavLink } from "../types";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";

export default function NavLinkItem({ link }: { link: NavLink }) {
    const pathname = usePathname();
    const route = `/category/${link.id}`;
    return (
        <Link key={link.id} href={`/category/${link.id}`} className={`text-base-content text-xl font-semibold rounded-xl
            hover:bg-base-300 hover:text-base-content `}>
            <Button variant="ghost" className={`border-none text-xl ${pathname === route && "bg-primary text-primary-content"}
            
            `}>
                {link.icon} {link.nameBn}
            </Button>

        </Link>
    )
}
