import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "../ui/navigation-menu"

interface NavItemProps {
    title: string;
    children?: React.ReactNode | null;
}

function NavItem({title, children}:NavItemProps) {
    return(
        <>
        <NavigationMenuItem>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {children}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </>
    )
}

export default NavItem