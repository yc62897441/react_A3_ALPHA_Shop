import iconToggle from "../icons/Vector.png";
import iconSearch from "../icons/search-icon2x.png";
import iconCart from "../icons/shappingcar-icon2x.png";
import iconMoon from "../icons/darkmode-icon2x.png";
import iconSun from "../icons/darkmode-icon-light.png";
import iconLogo from "../icons/Logo2x.png";

import "../style/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <img src={iconToggle} alt="" srcSet="" />
        </label>
        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <img src={iconSearch} alt="" srcSet="" />
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <img src={iconCart} alt="" srcSet="" />
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* <!-- moon --> */}
              <img src={iconMoon} alt="" srcSet="" />
              {/* <!-- sun --> */}
              {/* <img src={iconSun} alt="" srcSet="" /> */}
            </li>
          </ul>
        </nav>
        {/* <!-- logo --> */}
        <a className="header-logo-container" href="/">
          <img src={iconLogo} alt="" srcSet="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
