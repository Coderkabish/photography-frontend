import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              Elia Locardi
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-accent focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="nav-link">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="nav-link">
                  Workshops
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 nav-link">
                Home
              </Link>
              <Link to="/portfolio" className="block px-3 py-2 nav-link">
                Portfolio
              </Link>
              <Link to="/about" className="block px-3 py-2 nav-link">
                About
              </Link>
              <Link to="/contact" className="block px-3 py-2 nav-link">
                Contact
              </Link>
              <Link to="/tutorials" className="block px-3 py-2 nav-link">
                Tutorials
              </Link>
              <Link to="/workshops" className="block px-3 py-2 nav-link">
                Workshops
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
