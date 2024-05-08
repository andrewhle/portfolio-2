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
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Blog",
    path: "#blog",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      // Scroll element into the middle of the screen
      element.scrollIntoView({ block: 'center' });
    }
  };

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap lg:py-6 items-center justify-between mx-auto px-10 py-3">
        <Link href={"/"} className="text-3xl md:text-4xl text-white font-semibold">Hung Le</Link>
        
        {/* Mobile Menu */}
        <div className="mobile-menu block md:hidden">
          {
            !showMenu ? (
              <button onClick={() => setShowMenu(true)} className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-7 w-7"/>
              </button>
            ) : (
              <button onClick={() => setShowMenu(false)} className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-7 w-7"/>
              </button>
              )
          }
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {
              navLinks.map((link, index) => (
                <li key={index} onClick={handleScroll(link.path.substring(1))}>
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
