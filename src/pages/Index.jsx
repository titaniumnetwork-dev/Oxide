import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import Nav from "../Nav";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <Nav />
            <div className="background"></div>
            <div className="content">
                <div className="container">
                    <div data-aos="fade-right">
                        <p title="Titanium Network is a provider of various web proxy services for unblocking sites and bypassing censorship." className="header-text">The Service Hub for Titanium Network</p>
                        <p title="This is the mobile version of Titanium Network's hub, Oxide." className="header-text-mobile">TN Service Hub</p>
                        <p title="What is Titanium Network?">
                            Titanium Network is an organization dedicated to providing services related to bypassing internet censorship. Our projects expect to provide users, and itself, with a less restrictive browsing experience. For this TN prioritizes the production and improvement of web proxy technologies.
                        </p>
                        <div className="button-group">
                            <Link
                                title="Wondering on how to unblock sites or self-host?"
                                className="button"
                                to="/setup"
                            >
                                Get Started
                            </Link>
                            <a 
                                title="Look here for either contributing or hosting your own web proxy service using our various open-source projects!"
                                className="button button-right"
                                href="https://docs.titaniumnetwork.org"
                                target="_blank"
                            >
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
