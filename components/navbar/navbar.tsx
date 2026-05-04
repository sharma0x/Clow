"use client"
import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { MenuItem, NavbarProps } from "@/types";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";


const Navbar : React.FC<NavbarProps> = ({
    logo,
    menu,
    auth
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);
  
  // Function to close the sheet
  const closeSheet = () => {
    setIsOpen(false);
  };
  
  return (
    <section className="py-4 mx-auto">
      <div className="container mx-auto px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image 
                src={logo.src} 
                width={100}
                height={100}
                alt={logo.alt} />
            </Link>
            <div className="flex items-end justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
              <Button variant="outline" size="sm" data-cal-namespace="30min" data-cal-link="clowwork/30min" data-cal-config='{"layout":"month_view"}'>
                {auth.book.title}
              </Button>
              <Button asChild size="sm">
                <Link href={auth.quote.url}>{auth.quote.title}</Link>
              </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <Image 
                src={logo.src} 
                width={100}
                height={100}
                alt={logo.alt} />
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url} onClick={closeSheet} className="flex items-center gap-2">
                      <Image 
                        src={logo.src} 
                        width={40}
                        height={40}
                        alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, closeSheet))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" data-cal-namespace="30min" data-cal-link="clowwork/30min" data-cal-config='{"layout":"month_view"}' onClick={closeSheet}>
                      {auth.book.title}
                    </Button>
                    <Button asChild>
                      <Link href={auth.quote.url} onClick={closeSheet}>{auth.quote.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <div className="flex flex-col w-80 p-1">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink item={subItem} onClick={() => {}} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, closeSheet: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} onClick={closeSheet} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link 
      key={item.title} 
      href={item.url} 
      onClick={closeSheet}
      className="text-md font-semibold"
    >
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item, onClick }: { item: MenuItem; onClick: () => void }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
      onClick={onClick}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export default Navbar;