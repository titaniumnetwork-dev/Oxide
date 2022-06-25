function Nav() {
  return (
    <nav class="header">
      <div className="brand">
        <a href="/">Titanium Network</a>
      </div>
      <ul id="navbar-sel" className="navbar">
        <li>
          <a href="/panel">Panel</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/documentation">Docs</a>
        </li>
        <li>
          <a href="/socials">Socials</a>
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
