import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials",
};

export default function Socials() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="docs">
          <div data-aos="fade-right">
            <h2 id="titanium-socials">Socials</h2>
            <br></br>
            <ul className="service-lists">
              <li>
                <a href="https://github.com/titaniumnetwork-dev">GitHub</a>
                <div>
                  <a href="https://github.com/titaniumnetwork-dev">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://discord.gg/unblock">Discord</a>
                <div>
                  <a href="https://discord.gg/unblock">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg">
                  YouTube
                </a>
                <div>
                  <a href="https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://twitter.com/TitaniumNetDev">Twitter</a>
                <div>
                  <a href="https://twitter.com/TitaniumNetDev">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://www.tiktok.com/@tn_unblock">TikTok</a>
                <div>
                  <a href="https://www.tiktok.com/@tn_unblock">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://www.patreon.com/holyunblocker">
                  Patreon (Holy Unblocker)
                </a>
                <div>
                  <a href="https://www.patreon.com/holyunblocker">
                    <i className="fa-brands fa-patreon"></i>
                  </a>
                </div>
              </li>
              <li>
                <a href="https://www.patreon.com/incognitotn">
                  Patreon (Incognito)
                </a>
                <div>
                  <a href="https://www.patreon.com/incognitotn">
                    <i className="fa-brands fa-patreon"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
