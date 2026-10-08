import { getCategories } from "../constants/fetch";
import { NavLink } from "../types";
import NavLinkItem from "./NavLinkItem";

export default async function NavLinks({ className }: { className?: string }) {
    const navLinks = await getCategories();
    return (
        <div className={className}>
            {navLinks.map((link: NavLink) => <NavLinkItem key={link.id} link={link} /> )}
        </div>
    )
}
