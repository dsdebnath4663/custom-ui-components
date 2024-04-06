import { Outlet, Link } from "react-router-dom";
import "./layout.css";
import { useState } from "react";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <button className="toggle-btn" onClick={toggleMenu}>
          Menu
        </button>
        <div className={`menu-container ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/DataTableMain">Data Table</Link>
            </li>
            <li>
              <Link to="/AutocompleteCompo">Auto complete Search Box</Link>
            </li>
            {/* Add more menu items here */}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
