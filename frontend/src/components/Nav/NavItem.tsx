import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu"

interface NavItemProps {
    title: string;
    href?: string;
    children?: React.ReactNode | null;
}

function NavItem({title, href, children}:NavItemProps) {
    return(
        <>
        <NavigationMenuItem>
            { children ?
            <>
              <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                {children}
              </NavigationMenuContent>
            </>
            :
            <a href={href} className={navigationMenuTriggerStyle()}>
              <NavigationMenuLink>{title}</NavigationMenuLink>
            </a>
            }
          </NavigationMenuItem>
        </>
    )
}

export default NavItem