import Link from "@/types/Link";
import NavLink from "./NavLink";

type NavDropdownSectionProps = {
    title:string,
    links:Link[]
}

function NavDropdownSection({title,links}:NavDropdownSectionProps) {


    return (
        <li className="flex flex-col">
            <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
            {links.map((link, _) => (
                <NavLink href={link.href}>{link.title}</NavLink>
            ))}
        </li>
    )
}

export default NavDropdownSection