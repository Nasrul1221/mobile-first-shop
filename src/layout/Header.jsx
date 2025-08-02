import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { X, Menu, ShoppingCart, UserRound } from "lucide-react";

import "./styles.css";

import MySearch from "../components/MySearch";

// Shadcn UI
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="px-5 py-10 flex items-center h-7 gap-x-5 fixed left-0 right-0 bg-white z-50">
      <button onClick={handleClick} className="md:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      <div className="flex items-center justify-between w-full h-full">
        <NavLink to="/" className="font-bold text-2xl md:text-3xl">
          SHOP.CO
        </NavLink>

        <nav className="flex mx-3">
          <ul
            className={`flex flex-col items-center gap-y-3 fixed -left-96 top-20 transition-all duration-300 md:static md:flex-row md:gap-x-7 bg-white md:bg-transparent h-screen w-[150px] md:w-full md:h-full ${
              isOpen && "active"
            }`}
          >
            <li className="relative">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col p-3">
                      <NavigationMenuLink asChild>
                        <NavLink to="/products">Products</NavLink>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <NavLink to="/cart">Cart</NavLink>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <NavLink to="/cart">Cart</NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <a href="#" className="text-md md:font-light md:text-nowrap">
                On Sale
              </a>
            </li>
            <li>
              <NavLink
                to="/products?category=new-arrivals"
                className="text-md md:font-light md:text-nowrap"
              >
                New Arrivals
              </NavLink>
            </li>
            <li>
              <a href="#" className="text-md md:font-light md:text-nowrap">
                Brands
              </a>
            </li>
          </ul>
        </nav>

        <nav className="md:max-w-[577px] md:w-full">
          <ul className="flex gap-x-3 items-center md:max-w-[577px] md:w-full">
            <MySearch />
            <NavLink to="/cart">
              <ShoppingCart />
            </NavLink>
            <NavLink to="/profile">
              <UserRound />
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
