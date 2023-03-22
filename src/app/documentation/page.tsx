import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function Documentation() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h1 id="proxdocs">ProxDocs</h1>
            <p>
              ProxDocs is a highly detailed and useful guide to hosting a web
              proxy site and various web proxy services adapted by Titanium
              Network as a general guide for users.
            </p>
            <br></br>
            <h2 id="why-">Why?</h2>
            <p>
              Making &quot;sufficient&quot; documentation for a proxy site is
              difficult and lengthy. ProxDocs exists so that proxy site
              developers do not have to make lengthy documentation for their
              site, but can rather point users to this instead, allowing
              aspiring self-hosters to more easily be able to set up their own
              instance of your site!
            </p>
            <br></br>
            <h2 id="table-of-contents">Table Of Contents</h2>
            <ul>
              <li>
                <Link href="/setup">Setup</Link>
              </li>
              <li>
                <Link href="/configuration">Configuration</Link>
              </li>
            </ul>
            <br></br>
            <br></br>
            <h2 id="contributing">Contributing</h2>
            <p>
              See{" "}
              <a href="https://github.com/Degen-dev/ProxDocs/blob/master/CONTRIBUTING.md">
                CONTRIBUTING.md
              </a>{" "}
              for information on contributing to ProxDocs.
            </p>
            <br></br>
            <h2 id="license">License</h2>
            <br></br>
            <p>
              Copyright (C) <span className="hljs-number">2022</span>,
              Degen-dev; GNU
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
