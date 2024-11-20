import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu"
import NavItem from "./NavItem"
import { Button } from "@/components/ui/button"
import ServicesDropdown from "./ServicesDropdown"

function Navbar() {
    return (
      <NavigationMenu className="w-full max-w-screen-xl mx-auto border-b-2 flex items-center justify-between px-4">
        <a href="/" className="mx-3 text-lg">Lorem Ipsum Services</a>
        <div className="flex-grow flex justify-center">
          <NavigationMenuList className="flex">
            <NavItem title="Service">
              <ServicesDropdown/>
            </NavItem>
            <NavItem title="About" href="/about"></NavItem>
            <NavItem title="Careers" href="/careers"></NavItem>
            <NavItem title="Vendors Program" href="/vendors-program"></NavItem>
          </NavigationMenuList>
        </div>
      <Button className="h-8 my-1">Get a quote</Button>
    </NavigationMenu>
    )
}

export default Navbar