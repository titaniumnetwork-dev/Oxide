import { Metadata } from "next";
import disabled from "../../lib/disabled";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h2 id="web-proxy-services">Web Proxy Services</h2>
            <br></br>
            <ul className="service-lists">
              <li>
                <Service href="https://holyunblocker.org" source="https://github.com/QuiteAFancyEmerald/Holy-Unblocker/">Holy Unblocker LTS</Service>
              </li>
              <li>
                <Service href="https://aluu.xyz">Alu</Service>
              </li>
              <li>
                <Service href="https://anura.pro" source="https://github.com/MercuryWorkshop/anuraOS">Anura OS</Service>
              </li>
              <li>
                <Service href="https://radon.games" source="https://github.com/Radon-Games/Radon-Games">Radon Games</Service>
              </li>
              <li title={disabled("nebula")}>
                <Service href="https://nebulaproxy.io" source="https://github.com/NebulaServices/Nebula">Nebula Proxy</Service>
              </li>
              <li>
                <Service href="https://definitelyscience.com" source="https://github.com/titaniumnetwork-dev/Definitely-Science">Definitely Science</Service>
              </li>
              <li>
                <Service href="https://kazwire.com" source="https://github.com/whos-evan/kazwire">Kazwire</Service>
              </li>
              <li>
                <Service href="https://anura.pro" source="https://github.com/MercuryWorkshop/anuraOS">AnuraOS</Service>
              </li>
              <li>
                <Service href="https://ludicrous.icu" source="https://github.com/titaniumnetwork-dev/Ludicrous">Ludicrous</Service>
              </li>
              <li>
                <Service href="https://totallyscience.co">Totally Science</Service>
              </li>
              <li>
                <Service href="https://incog.works">Incognito</Service>
              </li>
              <li>
                <Service href="https://binbashbanana.github.io/webretro" source="https://github.com/BinBashBanana/webretro">webretro</Service>
              </li>
              <li>
                <Service href="https://nano-proxy.github.io" source="https://github.com/titaniumnetwork-dev/nano">nano.</Service>
              </li>
            </ul>
            <br></br>
            <h3 id="web-proxy-services">Community Proxy Services</h3>
            <br></br>
            <ul className="service-lists">
              <li>Astral (Lucid)</li>
              <li>SealCentral</li>
              <li>Abyss</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}


function Service({ href, children, source }: { href: string, children: React.ReactNode, source?: string }) {
  return (
    <>
      <a href={href} target="_blank">{children}</a>
      <div>
        <a href={href} target="_blank">❐</a>
      </div>
      <div>
        {source ? <a href={source} target="_blank">[Source]</a> : ""}
      </div>
    </>
  )
}
