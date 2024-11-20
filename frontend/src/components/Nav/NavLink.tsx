import { Link } from "react-router-dom";

type NavLinkProps = {
  href: string;
  children?: React.ReactNode | null;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link to={href} className="hover:text-primary pb-2 text-sm">
      {children}
    </Link>
  );
}

export default NavLink;
