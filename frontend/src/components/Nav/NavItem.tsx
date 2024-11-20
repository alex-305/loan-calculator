import { Link } from "react-router-dom";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

interface NavItemProps {
  title: string;
  href?: string;
  children?: React.ReactNode | null;
}

function NavItem({ title, href, children }: NavItemProps) {
  return (
    <>
      <NavigationMenuItem>
        {children ? (
          <>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <NavigationMenuContent>{children}</NavigationMenuContent>
          </>
        ) : (
          <Link to={href ?? ""} className={navigationMenuTriggerStyle()}>
            <NavigationMenuLink>{title}</NavigationMenuLink>
          </Link>
        )}
      </NavigationMenuItem>
    </>
  );
}

export default NavItem;
