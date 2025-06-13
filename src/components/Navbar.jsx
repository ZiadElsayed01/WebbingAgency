import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Container from "./Container";

const NavbarItems = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Services" },
  { path: "/about", name: "About" },
  { path: "/projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm py-4">
      <Container>
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-48 h-12" />
            </NavLink>
          </div>

          <ul className="hidden md:flex items-center md:gap-5 lg:gap-10">
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} className="text-lg">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3 text-lg">
            <Link to="/" className="text-primary py-1 rounded">
              Sign Up
            </Link>
            <Link to="/" className="bg-primary text-white px-4 py-1 rounded">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer "
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3 mb-4 text-lg">
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Auth Section */}
          <div className="flex flex-col gap-2 text-lg">
            <Link
              to="/"
              className="text-primary border border-primary px-4 py-2 rounded"
            >
              Sign Up
            </Link>
            <Link to="/" className="bg-primary text-white px-4 py-2 rounded">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
