import { NavLink } from "../types";
import NavLinkItem from "./NavLinkItem";

async function navCategories() {
    const data = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const response = await data.json();
    return response;
}

export default async function NavLinks() {
    const navLinks = await navCategories();
    return (
        <div className="flex gap-4 justify-center">
            {navLinks.map((link: NavLink) => <NavLinkItem key={link.id} link={link} /> )}
        </div>
    )
}
