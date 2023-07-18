import React from "react";
import { Outlet, Link } from "react-router-dom";
import MyImage from "../logo.svg";

const Layout = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-between px-8 py-4 ">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={MyImage} alt="Logo" className="h-8 w-8" />
          <Link
            to="/"
            className=" text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            My Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            My Projects
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
