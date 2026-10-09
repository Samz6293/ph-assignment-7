import { NavLink } from "../types";
import NavLinkItem from "./NavLinkItem";

export default function NavLinks({ className, links }: { className?: string, links:NavLink[] }) {
    return (
        <div className={className}>
            {links.map((link: NavLink) => <NavLinkItem key={link.id} link={link} /> )}
        </div>
    )
}
