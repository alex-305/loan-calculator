
type NavLinkProps = {
    href:string
    children?: React.ReactNode | null;
}

function NavLink({href, children}:NavLinkProps) {
    
    return (
        <a href={href} className="hover:text-primary pb-2 text-sm">{children}</a>
    )
}

export default NavLink