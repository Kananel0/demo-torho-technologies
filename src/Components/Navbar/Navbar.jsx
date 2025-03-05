import React from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "#home",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "About",
    link: "#about",
  },
  {
    id: 4,
    name: "Contact",
    link: "#contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  // Handle resize to automatically close mobile menu on larger screens
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex items-center gap-3">
            {/* <img src={Logo} alt="" className="h-16" /> */}
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      className="py-2 text-xl font-semibold text-orange-500 transition-colors duration-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="block md:hidden">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-black dark:text-white flex flex-col items-center justify-center z-[9998]">
          <nav>
            <ul className="flex flex-col items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <a
                      href={link}
                      onClick={toggleMenu}
                      className="py-2 text-2xl font-semibold text-orange-500 transition-colors duration-500 hover:text-orange-500 hover:border-b-2 hover:border-orange-500"
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
