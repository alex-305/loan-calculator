import Link from "@/types/Link";
import { NavigationMenuLink } from "../ui/navigation-menu";
import NavDropdownSection from "./NavDropdownSection";
import { Button } from "../ui/button";
import { mdiArrowRightCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";

function ServicesDropdown() {
  const FacilityMaintenanceLinks: Link[] = [
    { href: "/our-approach", title: "Our Approach" },
    { href: "/diversity-equity", title: "Diversity & Equity" },
    { href: "/faq", title: "FAQs" },
    { href: "/get-started", title: "Get Started" },
  ];

  const ConstructionManagementLinks: Link[] = [
    { href: "/restoration", title: "Restoration" },
    { href: "/remodeling", title: "Remodeling" },
    { href: "/special-projects", title: "Special Projects / Roll Outs" },
    { href: "/new-construction", title: "New Construction" },
  ];

  const IndustriesLinks: Link[] = [
    { href: "/convenience-stores", title: "Convenience Stores" },
    { href: "/entertainment", title: "Entertainment" },
    { href: "/financial", title: "Financial" },
    { href: "/supermarkets", title: "Grocery / Supermarkets" },
    { href: "/healthcare", title: "Healthcare" },
    { href: "/hospitality", title: "Hospitality" },
    { href: "/restaurants", title: "Restaurants" },
    { href: "/retail", title: "Retail" },
  ];

  return (
    <ul className="flex flex-row w-full max-w-screen">
      <NavigationMenuLink asChild>
        <div className="flex flex-col flex-grow h-full w-full bg-gradient-to-b from-muted/50 to-muted p-6 ">
          <div className="mb-2 mt-4 text-lg font-medium">Services</div>
          <p className="text-sm leading-tight text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <Button className="mt-2">
            Overview
            <Icon path={mdiArrowRightCircleOutline} />
          </Button>
        </div>
      </NavigationMenuLink>
      <div className="flex flex-row space-x-8 px-5">
        <NavDropdownSection title="Facility Maintenance" links={FacilityMaintenanceLinks} />
        <NavDropdownSection title="Construction Management" links={ConstructionManagementLinks} />
        <NavDropdownSection title="Industries" links={IndustriesLinks} />
      </div>
    </ul>
  );
}

export default ServicesDropdown;
