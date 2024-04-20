// components/Navbar.jsx
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer text-xl font-bold text-gray-800">
            Woodward Bluffs Hub
          </span>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            aria-label="toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className={`absolute left-0 top-16 w-full transform bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 transition md:relative md:left-auto md:top-0 md:w-auto md:bg-none md:p-0 ${isMenuOpen ? "scale-100" : "scale-0"} md:scale-100`}
        >
          <ul className="flex flex-col gap-4 md:flex-row">
            <li>
              <Link href="/">
                <span className="cursor-pointer hover:text-gray-600">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/calendar">
                <span className="cursor-pointer hover:text-gray-600">
                  Calendar
                </span>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <span className="cursor-pointer hover:text-gray-600">FAQ</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="cursor-pointer hover:text-gray-600">
                  Contact
                </span>
              </Link>
            </li>
            {/* Placeholder for future Login functionality */}
            <li>
              <span className="cursor-pointer hover:text-gray-600">Login</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
