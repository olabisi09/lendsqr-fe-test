import "./header.scss";
import logo from "../../assets/logo.svg";
import { BellIcon, HamburgerMenuIcon, MagnifierIcon } from "../../icons";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="Lendsqr Logo" className="logo" />
        </div>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <HamburgerMenuIcon />
        </button>
      </div>

      <section className="rest">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
          />
          <button className="search-button">
            <MagnifierIcon />
          </button>
        </div>

        <div className="header-right">
          <a href="#" className="docs-link">
            Docs
          </a>
          <button className="notification-button">
            <BellIcon />
          </button>
          <div className="user-profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="avatar"
            />
            <span className="username">Adedeji</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
