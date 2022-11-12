import iconToggle from "../icons/Vector.png";
import iconSearch from "../icons/search-icon2x.png";
import iconCart from "../icons/shappingcar-icon2x.png";
import iconMoon from "../icons/darkmode-icon2x.png";
import iconSun from "../icons/darkmode-icon-light.png";
import iconLogo from "../icons/Logo2x.png";

import "../style/Header.css";

function Header() {
  return (
    <header class="site-header">
      <div class="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" class="burger-container">
          <img src={iconToggle} alt="" srcset="" />
        </label>

        {/* <!-- navbar-menu --> */}
        <nav class="navbar-menu">
          <ul class="nav-list site-menu-list mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                男款
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                女款
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                最新消息
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                客製商品
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul class="nav-list site-action-list">
            {/* <!-- search --> */}
            <li class="nav-item">
              <img src={iconSearch} alt="" srcset="" />
            </li>
            {/* <!-- cart --> */}
            <li class="nav-item">
              <img src={iconCart} alt="" srcset="" />
            </li>
            <li id="theme-toggle" class="nav-item">
              {/* <!-- moon --> */}
              <img src={iconMoon} alt="" srcset="" />
              {/* <!-- sun --> */}
              {/* <img src={iconSun} alt="" srcset="" /> */}
            </li>
          </ul>
        </nav>

        {/* <!-- logo --> */}
        <a class="header-logo-container" href="#">
          <img src={iconLogo} alt="" srcset="" />
        </a>
      </div>
    </header>
  );
}

export default Header;
