import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../images/favicon.png";
import "./Header.scss";
function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`header-container fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" aria-label="Cruip" className="flex gap-2 items-center">
              <img src={Icon} width="50" height="50" />
              <span
                className="uppercase text-4xl"
                style={{ fontFamily: "auto" }}
              >
                Verify bags
              </span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow link-header">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li className="container">
                <Link to="/signin" className="btn-4">
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
