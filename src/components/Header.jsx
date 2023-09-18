import { useState, useEffect } from "react";

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [shadowHeader, setShadowHeader] = useState(false);

  /*=============== DARK LIGHT THEME ===============*/
  const [dark, setDark] = useState(false);

  useEffect(() => {
    function handleShadowHeader() {
      setShadowHeader(this.scrollY > 50);
    }

    window.addEventListener("scroll", handleShadowHeader);

    return () => window.removeEventListener("scroll", handleShadowHeader);
  });

  const navItems = [
    {
      id: "home",
      content: "Home",
    },
    {
      id: "about",
      content: "About Me",
    },
    {
      id: "projects",
      content: "Projects",
    },
    {
      id: "contact",
      content: "Contact Me",
    },
  ];

  function handleTheme() {
    setDark((prevTheme) => !prevTheme);
    document.body.classList.toggle("dark-theme");
  }

  const navElems = navItems.map((navItem) => (
    <li className="nav__item" key={navItem.id}>
      <a
        href={`#${navItem.id}`}
        className={`nav__link ${
          navItem.id === "contact" && "nav__link-button"
        }`}
        onClick={() => setShowMenu(false)}
      >
        {navItem.content}
      </a>
    </li>
  ));

  return (
    <header className={`header ${shadowHeader && "shadow-header"}`} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-circle">Y</span>
          <span className="nav__logo-name">Yousuf Rashwan.</span>
        </a>

        <div className={`nav__menu ${showMenu && "show-menu"}`} id="nav-menu">
          <span className="nav__title">Menu</span>

          <h3 className="nav__name">-</h3>

          <ul className="nav__list">{navElems}</ul>

          {/* Close Button  */}
          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setShowMenu(false)}
          >
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          {/* Theme Button */}
          <i
            onClick={handleTheme}
            className={`${dark ? "ri-sun-line" : "ri-moon-line"} change-theme`}
            id="theme-button"
          ></i>
          <div
            // Toggle Button
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShowMenu(true)}
          >
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
