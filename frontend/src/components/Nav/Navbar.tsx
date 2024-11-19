import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"
import NavItem from "./NavItem"

function Navbar() {
    return (
        <NavigationMenu className="w-100 border-b-2">
          <NavigationMenuList>
            <NavItem title="Service"></NavItem>
            <NavItem title="About"></NavItem>
            <NavItem title="Careers"></NavItem>
            <NavItem title="Vendors Program"></NavItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
}

export default Navbar