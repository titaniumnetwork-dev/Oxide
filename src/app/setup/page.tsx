import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup",
};

export default function Setup() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h1 id="usage">Usage</h1>
            <p>
              Titanium Network's services can be utlized either by hosting
              manually or using the officially hosted services. These servies
              such as Holy Unblocker or Incognito can be obtained in the{" "}
              <a href="discord.gg/unblock">TN Discord</a> with a brief overview
              on the <a href="/services">Services</a>.
            </p>
            <br></br>
            <h3>Web Proxy Services</h3>
            <p>
              In order to use a web proxy site, you would simply obtain any of
              our official domains (URLS/mirrors) from the Titanium Network
              discord.
            </p>
            <br></br>
            <p>
              Example Mirror/URL: <code>https://holyubofficial.net</code>
            </p>
            <br></br>
            <p>
              Then you would just simply access the mirror URL on any modern
              browser, enter in a site within the search engine on the proxy
              site and enjoy unblocked content!
            </p>
            <br></br>
            <h3>Kajigs</h3>
            <p>
              A repository of methods/exploits (found in the TN discord)
              maintained by Titanium Network you can employ enabling you to
              bypass restrictions!
            </p>
            <br></br>
            <p>
              These exploits range from WebView bypasses, Extension bypasses,
              chromeOS vulnerabilities, Windows elevation bypasses, and most web
              filter bypasses.
            </p>
            <br></br>
            <p>
              The most specialized part of Titanium Network would lastly be the
              development of Bookmarklets which can be used to exploit either
              extension bypasses to simply history flooding tools.
            </p>
            <br></br>
            <h3>Setup</h3>
            <br></br>
            <p>
              If you wish to setup any of Titanium Network's services please
              check out <a href="https://docs.titaniumnetwork.org">here.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
