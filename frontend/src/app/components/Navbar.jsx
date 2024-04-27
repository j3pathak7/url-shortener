"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white font-bold text-xl">LinkLite</span>
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleNav}
            >
              {isNavOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <CSSTransition
        in={isNavOpen}
        timeout={200}
        classNames="nav-transition"
        unmountOnExit
      >
        <div className="bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <div
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={toggleNav}
              >
                Home
              </div>
            </Link>
            <Link href="/about">
              <div
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                onClick={toggleNav}
              >
                About
              </div>
            </Link>
          </div>
        </div>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
