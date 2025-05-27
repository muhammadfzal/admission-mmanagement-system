import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Admission", path: "/admission-form" },
    { name: "Contact Us", path: "/contact-us" },
     { name: "About", path: "/About" },
  ];

  return (
    <header className="w-full bg-googleDark py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
          Admission Management System
        </h1>

        <ul className="flex space-x-6 pr-5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-white hover:text-blue-300 transition-colors ${
                  location.pathname === item.path ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
