"use client"
import Link from "next/link";
import NavLink from "./NavLink";
import Menu from "./Menu";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {

  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-8 py-3">
        <Link href={"/"} className="text-3xl md:text-4xl text-white font-semibold">Profile</Link>
        
        {/* Mobile Menu */}
        <div className="mobile-menu block md:hidden">
          {
            !showMenu ? (
              <button onClick={() => setShowMenu(true)} className="flex items-center px-3 py-2 border rounded-md border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5"/>
              </button>
            ) : (
              <button onClick={() => setShowMenu(false)} className="flex items-center px-3 py-2 border rounded-md border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-5 w-5"/>
              </button>
              )
          }
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {
              navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink path={link.path} title={link.title} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {
        showMenu ? (
          <div className="md:hidden">
            <Menu links={navLinks} />
          </div>
        ) : null
      }
    </nav>
  );
}

export default Navbar;
