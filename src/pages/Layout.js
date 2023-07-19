import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MyImage from "../logo.svg";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
  };

  return (
    <div className=" ">
      <nav className="flex flex-wrap items-center justify-between px-8 py-4 ">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={MyImage} alt="Logo" className="h-8 w-8" />
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            My Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } md:flex md:space-x-4 transition duration-300`}
        >
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick} // Close menu when a link is clicked
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick} // Close menu when a link is clicked
          >
            My Projects
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick} // Close menu when a link is clicked
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={handleLinkClick} // Close menu when a link is clicked
          >
            Contact Me
          </Link>
        </div>

        {/* Responsive Menu (Mobile) */}
        <div className="md:hidden flex">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl text-gray-800 cursor-pointer"
            onClick={handleMenuClick}
          />
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50">
          <div className="flex flex-col items-center justify-center h-full">
            <Link
              to="/"
              className="text-2xl font-semibold text-gray-800 hover:text-blue-500 mb-8"
              onClick={handleLinkClick} // Close menu when a link is clicked
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-2xl font-semibold text-gray-800 hover:text-blue-500 mb-8"
              onClick={handleLinkClick} // Close menu when a link is clicked
            >
              My Projects
            </Link>
            <Link
              to="/about"
              className="text-2xl font-semibold text-gray-800 hover:text-blue-500 mb-8"
              onClick={handleLinkClick} // Close menu when a link is clicked
            >
              About Me
            </Link>
            <Link
              to="/contact"
              className="text-2xl font-semibold text-gray-800 hover:text-blue-500"
              onClick={handleLinkClick} // Close menu when a link is clicked
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Layout;
