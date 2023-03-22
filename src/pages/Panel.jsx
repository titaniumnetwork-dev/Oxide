import React, { useEffect } from "react";
import AOS from "aos";

import Nav from "../Nav";

function Panel() {
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
                        <p className="header-text">Panel</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Panel;
