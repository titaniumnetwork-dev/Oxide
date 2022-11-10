import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DocsBody() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h1 id="proxdocs">ProxDocs</h1>
            <p>ProxDocs is a highly detailed and useful guide to hosting a web proxy site and various web proxy services adapted by Titanium Network as a general guide for users.</p><br></br>
            <h2 id="why-">Why?</h2>
            <p>Making &quot;sufficient&quot; documentation for a proxy site is difficult and lengthy. ProxDocs exists so that proxy site developers do not have to make lengthy documentation for their site, but can rather point users to this instead, allowing aspiring self-hosters to more easily be able to set up their own instance of your site!</p>
            <br></br>
            <h2 id="table-of-contents">Table Of Contents</h2>
            <ul>
            <li><a href="/setup">Setup</a></li>
            <li><a href="/configuration">Configuration</a></li>
            <li><a href="/hosting">Hosting</a></li>
            <li><a href="/domains">Domains</a></li>
            <li><a href="/nginx-setup">Nginx</a></li>
            <li><a href="/ssl-setup">SSL/TLS</a><br></br></li>
            </ul><br></br>
            <br></br><h2 id="contributing">Contributing</h2>
            <p>See <a href="https://github.com/Degen-dev/ProxDocs/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a> for information on contributing to ProxDocs.</p>
            <br></br><h2 id="license">License</h2><br></br>
            <p>Copyright (C) <span class="hljs-number">2022</span>, Degen-dev; GNU</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DocsBody;
