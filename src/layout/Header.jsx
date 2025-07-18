import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { X, Menu, ShoppingCart, UserRound } from "lucide-react";

import "./styles.css";

import MySearch from "../components/MySearch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handlePopUp = () => {
    setIsPopUp((prev) => !prev);
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
              <div className="relative">
                <button
                  onClick={handlePopUp}
                  className={`text-md md:font-light md:text-nowrap after:content-[''] after:absolute after:w-2 after:h-2 after:border after:border-black after:border-t-transparent after:border-r-transparent after:-rotate-45 after:top-1/2 after:translate-x-[50%] after:translate-y-[-70%]`}
                >
                  Shop
                </button>
              </div>
              {isPopUp && (
                <div className="w-7 h-20 md:absolute md:top-1/2 md:translate-x-[50%] md:translate-y-[20%] flex flex-col items-center md:bg-white">
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                  <p>Test</p>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="text-md md:font-light md:text-nowrap">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="text-md md:font-light md:text-nowrap">
                New Arrivals
              </a>
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
