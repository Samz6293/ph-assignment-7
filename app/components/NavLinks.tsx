import Link from "next/link";
import { NavLink } from "../types";

async function navCategories() {
    const data = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const response = await data.json();
    return response;
}

export default async function NavLinks() {
    const navLinks = await navCategories();
    return (
        <div className="flex gap-4 justify-center">
            {navLinks.map((link: NavLink) =><Link key={link.id} href={`/${link.id}`} className="text-base-content text-xs font-semibold md:text-base">
            {link.icon} {link.nameBn}
            </Link> )}
        </div>
    )
}
