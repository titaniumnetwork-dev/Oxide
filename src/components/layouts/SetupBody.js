import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SetupBody() {
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
            <h1 id="usage">Usage</h1>
            <p>Titanium Network's services can be utlized either by hosting manually or using the officially hosted services. These servies such as Holy Unblocker or Incognito can be obtained in the <a href="discord.gg/unblock">TN Discord</a> with a brief overview on the <a href="/services">Services</a>.</p>
            <br></br><h3>Web Proxy Services</h3>
            <p>In order to use a web proxy site, you would simply obtain any of our official domains (URLS/mirrors) from the Titanium Network discord.</p>
            <br></br><p>Example Mirror/URL: <code>https://holyubofficial.net</code></p>
            <br></br><p>Then you would just simply access the mirror URL on any modern browser, enter in a site within the search engine on the proxy site and enjoy unblocked content!</p>
            <br></br><h3>Kajigs</h3>
            <p>A repository of methods/exploits (found in the TN discord) maintained by Titanium Network you can employ enabling you to bypass restrictions!</p>
            <br></br><p>These exploits range from WebView bypasses, Extension bypasses, chromeOS vulnerabilities, Windows elevation bypasses, and most web filter bypasses.</p>
            <br></br><p>The most specialized part of Titanium Network would lastly be the development of Bookmarklets which can be used to exploit either extension bypasses to simply history flooding tools.</p>
            <h1 id="basic-setup">Manual Setup</h1>
            <p>Often times, a proxy site that is open source will include basic setup instructions for their site. These instructions normally include how to clone the repository, and how to run or &quot;start&quot; the backend web proxy, as well as serve the static files of the site.</p>
            <br></br><h2 id="cloning">Cloning</h2>
            <p>Cloning a proxy is as simple as running <code>git clone</code>, and then the link to the repository. See an example below:</p>
            <br></br><pre><code class="lang-sh">$ git <span class="hljs-keyword">clone</span> <span class="hljs-title">https</span>://titaniumnetwork-dev/Ultraviolet-Node
            </code></pre>
            <br></br>
            <p>Be sure to replace <code>titaniumnetwork-dev/Ultraviolet-Node</code> with the repo to the proxy you are trying to clone, assuming you are not trying to clone Degeneracy.</p>
            <br></br><h2 id="installing-dependencies">Installing Dependencies</h2>
            <p>Web proxies and proxy sites will have dependencies in order to get them up and running. In general, a proxy site will use a Node.js framework to serve static files and <a href="https://www.npmjs.com">NPM</a> to install dependencies.
            <br></br><br></br>To install dependencies, you will need to cd into the repository you just cloned and then run <code>npm install</code> The commands can be seen below:</p>
            <br></br><pre><code class="lang-sh"><span class="hljs-variable">$ </span>cd RepoName
            <br></br><span class="hljs-variable">$ </span>npm install</code></pre>
            <br></br><p>Be sure to change &quot;RepoName&quot; to the actual name of the repo you just cloned.</p>
            <br></br><h2 id="starting-the-site">Starting the Site</h2>
            <br></br><p>Sometimes the creator of a site will include a start script in npm that makes it as simple as possible to start the proxy. See the command below:</p>
            <br></br><pre><code >$ <span>npm</span> start
            </code></pre>
            <br></br><p>Assuming the site does not include a start script, you will have to find the index file manually. In general, the file name will be something along the lines of <code>main.js</code>, <code>index.js</code> or <code>start.js</code>. To run the file, simply run the following command:</p>
            <pre><code class="lang-sh">$ <span class="hljs-keyword">node</span> <span class="hljs-title">filename</span>.js
            </code></pre>
            <br></br><p>Be sure to exclude the curly brackets and change <code>filename</code> to the actual name of the file you are trying to run.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SetupBody;
