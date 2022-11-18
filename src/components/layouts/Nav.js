function Nav() {
  return (
    <nav className="header">
      <div className="sitetitle">
        <a href="/">Titanium Network</a>
      </div>
      <div className="responsive">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul id="navbar-sel" className="navbar">
        <li>
          <a href="/setup">Setup</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/socials">Socials</a>
        </li>
        <li>
          <a href="/documentation">Docs</a>
        </li>
        <li className="social-link">
          <a href="https://discord.gg/unblock">
            <i className="fa-brands fa-discord"></i>
          </a>
        </li>
        <li className="social-link">
          <a href="https://github.com/titaniumnetwork-dev">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
