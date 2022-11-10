import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesBody() {
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
            <h2 id="web-proxy-services">Web Proxy Services</h2>
            <br></br>
            <ul className="service-lists">
            <li>Holy Unblocker<div><a href="https://holyubofficial.net">❐</a></div></li>
            <li>Incognito<div><a href="https://incog.dev">❐</a></div></li>
            <li>Hypertabs<div><a href="https://hypertabs.cc">❐</a></div></li>
            <li>Illusive<div><a href="https://illusive.app/">❐</a></div></li>
            <li>Terbium<div><a href="https://terbium.ga/">❐</a></div></li>
            <li>Ludicrous<div><a href="https://ludicrous.icu/">❐</a></div></li>
            </ul>
            <br></br><h3 id="web-proxy-services">Community Proxy Services</h3>
            <br></br>
            <ul className="service-lists">
            <li>Nebula</li>
            <li>Astral (Lucid)</li>
            <li>SealCentral</li>
            <li>Radon Games</li>
            <li>Abyss</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
} 

export default ServicesBody;
