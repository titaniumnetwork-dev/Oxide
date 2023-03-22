import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Configuration",
};

export default function Configuration() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h1 id="basic-configuration">Basic Configuration</h1>
            <br></br>
            <p>
              Different proxies have different ways to configure them. This will
              go over how to configure{" "}
              <a href="https://github.com/titaniumnetwork-dev/Ultraviolet">
                Ultraviolet
              </a>
              .
            </p>
            <br></br>
            <h2 id="ultraviolet">Ultraviolet</h2>
            <br></br>
            <p>
              Ultraviolet has its configuration in a file called{" "}
              <code>uv.config.js</code>. In this case of Degeneracy, this file
              can be found in <code>public/uv/uv.config.js</code>.
            </p>
            <br></br>
            <p>
              The meaning for each configurable option can be found below:
              <br></br>
              <br></br>| Configuration | Options and Explanation |<br></br>|
              ------------- | ----------------------- |<br></br>
              <br></br>Prefix | The prefix is the prefix that you want users to
              see. Ex: <code>https://example.com/service.</code> The default
              prefix is <code>service</code>.<br></br>
              <br></br>Bare | Bare Servers can run on directories. For example,
              if the directory was /bare/ then the bare origin would look like{" "}
              <code>http://example.org/bare/</code>. The bare origin is passed
              to clients.
              <br></br>
              <br></br>encodeUrl| EncodeUrl is how you want the URL a proxy
              site&#39;s visitors has to be encoded. Options include{" "}
              <code>Ultraviolet.codec.base64.encode</code>,{" "}
              <code>Ultraviolet.codec.plain.encode</code>, or{" "}
              <code>Ultraviolet.codec.xor.encode</code>. It is recommended that
              you use <code>xor</code> or <code>base64</code> as it hides the
              queries your visitors are searching and visiting.
              <br></br>
              <br></br>decodeUrl | DecodeUrl is how you want the url to be
              decoded. It is recommended you keep it the same as{" "}
              <code>encodeUrl</code>.<br></br>
              <br></br>Handler | Handler is the path to the UV handler. The
              default name and path to this file is{" "}
              <code>/uv/uv.handler.js</code>.<br></br>
              <br></br>Bundle | Bundle is the path to the UV bundle file. The
              default name and path to this file is <code>uv/uv.bundle.js</code>
              .<br></br>
              <br></br>Config | Config is the path to the UV config file. The
              default name and path to this file is <code>uv/uv.bundle.js</code>
              .<br></br>
              <br></br>SW | SW is the path to the UV Service Worker file. The
              default name and path to this file is <code>uv/uv.sw.js</code>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
