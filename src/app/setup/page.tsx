import { Metadata } from "next";
import Link from "next/link";

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
              <a href="https://discord.gg/unblock" target="_blank">TN Discord</a> with a brief overview
              on the <Link href="/services">Services</Link>.
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
            <h3>Setup</h3>
            <br></br>
            <p>
              If you wish to setup any of Titanium Network's services please
              check out <a href="https://docs.titaniumnetwork.org">the documentation.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
