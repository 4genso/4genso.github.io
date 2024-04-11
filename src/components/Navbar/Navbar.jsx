import { useState } from "react";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  function resetNav() {
    setMenuExpanded(false);
  }

  function NavContent() {
    return (
      <>
        <NavLink to="/" onClick={() => resetNav()} className="hover:text-white">
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => resetNav()}
          className="hover:text-white"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={() => resetNav()}
          className="hover:text-white"
        >
          Contacts
        </NavLink>
      </>
    );
  }

  return (
    <>
      <div className="lg:hidden">
        <div
          onClick={() => setMenuExpanded(!menuExpanded)}
          className="flex fixed top-3 right-3 z-20"
        >
          {menuExpanded ? (
            <img src={CloseIcon} alt="Close Menu" />
          ) : (
            <img src={MenuIcon} alt="Open Menu" />
          )}
        </div>
        {menuExpanded && (
          <nav className="flex fixed h-full w-full gap-32 p-32 font-semibold text-2xl text-center flex-col z-10 bg-black">
            <NavContent />
          </nav>
        )}
      </div>

      <div className="hidden h-full lg:flex flex-col bg-black col-span-1">
        <nav className="w-1/6 flex flex-col items-center gap-24 fixed p-32 font-semibold text-2xl">
          <NavContent />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
