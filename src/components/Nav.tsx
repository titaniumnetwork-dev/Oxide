import Link from "next/link";

export default function Nav() {
  return (
    <nav className="header">
      <div className="sitetitle">
        <Link href="/">Titanium Network</Link>
      </div>
      <div className="responsive">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul id="navbar-sel" className="navbar">
        <li>
          <Link href="/setup">Setup</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        {/* 
		    <li>
		  <a href="#">Kajigs</a>
        </li>
        */}
        <li>
          <Link href="/socials">Socials</Link>
        </li>
        <li>
          <a href="https://docs.titaniumnetwork.org">Docs</a>
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