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
        <li>
          <Link href="/socials">Socials</Link>
        </li>
        <li>
          <Link href="https://docs.titaniumnetwork.org">Docs</Link>
        </li>
        <li className="social-link">
          <Link href="https://discord.gg/unblock">
            <i className="fa-brands fa-discord"></i>
          </Link>
        </li>
        <li className="social-link">
          <Link href="https://github.com/titaniumnetwork-dev">
            <i className="fa-brands fa-github"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
