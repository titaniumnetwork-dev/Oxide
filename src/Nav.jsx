import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header">
      <div className="sitetitle">
        <Link to="/">Titanium Network</Link>
      </div>
      <div className="responsive">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul id="navbar-sel" className="navbar">
        <li>
          <Link to="/setup">Setup</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/socials">Socials</Link>
        </li>
        <li>
          <a href="https://docs.titaniumnetwork.org" target="_blank">Docs</a>
        </li>
        <li className="social-link">
          <a href="https://discord.gg/unblock" target="_blank">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
        <li className="social-link">
          <a href="https://github.com/titaniumnetwork-dev" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;