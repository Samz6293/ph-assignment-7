"use client";
import Link from "next/link";
import { NavLink } from "../types";
import { usePathname } from "next/navigation";

export default function NavLinkItem({ link }: { link: NavLink }) {
    const pathname = usePathname();
    const route = `/category/${link.id}`;
    return (
        <Link key={link.id} href={`/category/${link.id}`} className={`text-base-content text-xs font-semibold px-3 py-1 rounded-xl
            hover:bg-base-300 hover:text-base-content md:text-base
            ${pathname === route && "bg-primary text-primary-content"}`}>
            {link.icon} {link.nameBn}
        </Link>
    )
}
