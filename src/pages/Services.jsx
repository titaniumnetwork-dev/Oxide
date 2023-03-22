import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../Nav";

function Services() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Nav />
            <div className="background"></div>
            <div className="content">
                <div className="docs">
                    <div data-aos="fade-right">
                        <h2 id="web-proxy-services">Web Proxy Services</h2>
                        <br></br>
                        <ul className="service-lists">
                            <li><Service to="https://holyubofficial.net">Holy Unblocker</Service></li>
                            <li><Service to="https://incog.dev">Incognito</Service></li>
                            <li><Service to="https://radon.games">Radon Games</Service></li>
                            <li><Service to="https://nebulaproxy.io">Nebula Proxy</Service></li>
                            <li><Service to="https://illusive.app">Illusive</Service></li>
                            <li><Service to="https://terbium.ga">Terbium UX</Service></li>
                            <li><Service to="https://ludicrous.icu">Ludicrous</Service></li>
                        </ul>
                        <br></br><h3 id="web-proxy-services">Community Proxy Services</h3>
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
    )
}

function Service({ to, children }) {
    return (
        <>
            <a href={to} target="_blank">{children}</a>
            <div><a href={to} target="_blank">❐</a></div>
        </>
    )
}

export default Services;