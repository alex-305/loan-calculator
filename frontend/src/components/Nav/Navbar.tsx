import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavItem from "./NavItem";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";
import { Link } from "react-router-dom";

type NavbarProps = {
  className?: string;
};

function Navbar({ className }: NavbarProps) {
  return (
    <NavigationMenu
      className={`${className} w-full max-w-screen-xl mx-auto border-b-2 flex items-center justify-between px-4`}>
      <Link to="/" className="mx-3 text-lg">
        Lorem Ipsum Services
      </Link>
      <div className="flex-grow flex justify-center">
        <NavigationMenuList className="flex">
          <NavItem title="Service">
            <ServicesDropdown />
          </NavItem>
          <NavItem title="About" href="/about" />
          <NavItem title="Careers" href="/careers" />
          <NavItem title="Vendors Program" href="/vendors-program" />
        </NavigationMenuList>
      </div>
      <Button className="h-8 my-1">Get a quote</Button>
    </NavigationMenu>
  );
}

export default Navbar;
