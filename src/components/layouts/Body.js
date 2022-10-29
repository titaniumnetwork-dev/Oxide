import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      <div className="background"></div>
      <div className="content">
        <div className="container">
          <div data-aos="fade-right">
            <p className="header-text">The Service Hub for Titanium Network</p>
            <p>
              Titanium Network is an organization dedicated to providing free
              access to information by bypassing over-restrictive filters
              employed by institutions like schools and workplaces.
            </p>
            <div className="button-group">
              <a className="button" href="/setup">
                Get Started
              </a>
              <a
                className="button button-right"
                href="https://github.com/QuiteAFancyEmerald"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
