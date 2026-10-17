"use client";
import Link from "next/link";
import { NavLink } from "../types";
import { usePathname } from "next/navigation";
import { cn } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

export default function NavLinkItem({ link }: { link: NavLink }) {
    const pathname = usePathname();
    const route = `/category/${link.id}`;
    return (
        <Link href={route} className={cn(
            buttonVariants({ variant: "ghost" }),
            `border-none text-base-content text-xl font-semibold rounded-xl`,
            pathname === route && "bg-primary text-primary-content",
            `hover:bg-base-300 hover:text-base-content`
        )}>
            {link.icon} {link.nameBn}
        </Link>
    )
}
