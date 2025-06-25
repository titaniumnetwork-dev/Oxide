"use client";

import disabled from "../lib/disabled";

export default function Error() {
	return (
		<>
			<div className="background"></div>
			<div className="content">
				<div className="container">
					<div data-aos="fade-right">
						<p className="header-text">{disabled("Titanium Network")}</p>
						<p>Something went wrong</p>
					</div>
				</div>
			</div>
		</>
	);
}
