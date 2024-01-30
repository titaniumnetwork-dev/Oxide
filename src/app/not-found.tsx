import { Metadata } from "next";
import disabled from "../lib/disabled";

export const metadata: Metadata = {
	title: "Page Not Found"
}

export default function NotFound() {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <div className="container">
          <div data-aos="fade-right">
            <p className="header-text">{disabled("Titanium Network")}</p>
			<p>404: Page not found</p>
          </div>
        </div>
      </div>
    </>
  );
}