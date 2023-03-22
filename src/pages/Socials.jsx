import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../Nav";

function Socials() {
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
                        <h2 id="titanium-socials">Socials</h2>
                        <br></br>
                        <ul className="service-lists">
                            <li><Social to="https://github.com/titaniumnetwork-dev" icon="fa-brands fa-github">GitHub</Social></li>
                            <li><Social to="https://discord.gg/unblock" icon="fa-brands fa-discord">Discord</Social></li>
                            <li><Social to="https://www.youtube.com/channel/UC6LaREFvs9L72SK1s2PcxNg" icon="fa-brands fa-youtube">YouTube</Social></li>
                            <li><Social to="https://twitter.com/TitaniumNetDev" icon="fa-brands fa-twitter">Twitter</Social></li>
                            <li><Social to="https://www.tiktok.com/@tn_unblock" icon="fa-brands fa-tiktok">TikTok</Social></li>
                            <li><Social to="https://www.patreon.com/holyunblocker" icon="fa-brands fa-patreon">Patreon (Holy Unblocker)</Social></li>
                            <li><Social to="https://www.patreon.com/incognitotn" icon="fa-brands fa-patreon">Patreon (Incognito)</Social></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

function Social({ to, icon, children }) {
    return (
        <>
            <a href={to} target="_blank">{children}</a>
            <div>
                <a href={to} target="_blank">
                    <i className={icon}></i>
                </a>
            </div>
        </>
    )
}

export default Socials;