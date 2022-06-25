import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DocsBody() {
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
            <p className="header-text">Docs</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DocsBody;
